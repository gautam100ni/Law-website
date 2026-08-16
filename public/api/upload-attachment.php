<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

if (!isset($_FILES['attachment'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'No attachment was received.']);
    exit;
}

if ($_FILES['attachment']['error'] !== UPLOAD_ERR_OK) {
    $uploadErrors = [
        UPLOAD_ERR_INI_SIZE => 'The file is larger than the server upload limit.',
        UPLOAD_ERR_FORM_SIZE => 'The file is larger than the allowed form limit.',
        UPLOAD_ERR_PARTIAL => 'The file upload was interrupted. Please try again.',
        UPLOAD_ERR_NO_FILE => 'No file was selected.',
        UPLOAD_ERR_NO_TMP_DIR => 'The server temporary upload directory is missing.',
        UPLOAD_ERR_CANT_WRITE => 'The server could not save the uploaded file.',
        UPLOAD_ERR_EXTENSION => 'A server extension stopped the upload.'
    ];
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => $uploadErrors[$_FILES['attachment']['error']] ?? 'The attachment could not be uploaded.']);
    exit;
}

$file = $_FILES['attachment'];
$maxSize = 10 * 1024 * 1024;
$allowed = [
    'pdf' => 'application/pdf',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'png' => 'image/png',
    'doc' => 'application/msword',
    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

if ($file['size'] > $maxSize) {
    http_response_code(413);
    echo json_encode(['success' => false, 'message' => 'Attachment must be 10 MB or smaller.']);
    exit;
}

$extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
if (!isset($allowed[$extension])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unsupported attachment type.']);
    exit;
}

if (class_exists('finfo')) {
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']);
} else {
    $mime = function_exists('mime_content_type') ? mime_content_type($file['tmp_name']) : $file['type'];
}
if ($mime !== $allowed[$extension] && $mime !== 'application/octet-stream' && $mime !== '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'The attachment type could not be verified.']);
    exit;
}

$storage = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'private_uploads';
if (!is_dir($storage) && !mkdir($storage, 0750, true)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to create secure storage.']);
    exit;
}

$token = bin2hex(random_bytes(24));
$target = $storage . DIRECTORY_SEPARATOR . $token . '.' . $extension;

if (!move_uploaded_file($file['tmp_name'], $target)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to save the attachment.']);
    exit;
}

$baseUrl = rtrim(dirname(dirname($_SERVER['SCRIPT_NAME'])), '/\\');
$url = $baseUrl . '/api/download-attachment.php?token=' . rawurlencode($token);

echo json_encode(['success' => true, 'url' => $url]);
