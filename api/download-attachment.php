<?php
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    exit('Method not allowed.');
}

$token = $_GET['token'] ?? '';
if (!preg_match('/^[a-f0-9]{48}$/', $token)) {
    http_response_code(404);
    exit('File not found.');
}

$storage = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'private_uploads';
$matches = glob($storage . DIRECTORY_SEPARATOR . $token . '.*');
if (!$matches) {
    http_response_code(404);
    exit('File not found.');
}

$filePath = $matches[0];
$extension = strtolower(pathinfo($filePath, PATHINFO_EXTENSION));
$mimeMap = [
    'pdf' => 'application/pdf',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'png' => 'image/png',
    'doc' => 'application/msword',
    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

header('Content-Type: ' . ($mimeMap[$extension] ?? 'application/octet-stream'));
header('Content-Length: ' . filesize($filePath));
header('Content-Disposition: attachment; filename="Akhawat-attachment.' . $extension . '"');
header('X-Content-Type-Options: nosniff');
readfile($filePath);
