<?php
declare(strict_types=1);

$token = $_GET['token'] ?? '';

if (!preg_match('/^[a-f0-9]{64}$/', $token)) {
    http_response_code(400);
    exit('Invalid document link.');
}

$privateDir = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'private_uploads';
$metaPath = $privateDir . DIRECTORY_SEPARATOR . $token . '.json';

if (!is_file($metaPath)) {
    http_response_code(404);
    exit('Document not found or expired.');
}

$metadata = json_decode((string) file_get_contents($metaPath), true);

if (!is_array($metadata) || ($metadata['expires_at'] ?? 0) < time()) {
    if (is_file($metaPath)) @unlink($metaPath);
    foreach (glob($privateDir . DIRECTORY_SEPARATOR . $token . '.*') ?: [] as $oldFile) {
        if (is_file($oldFile)) @unlink($oldFile);
    }
    http_response_code(410);
    exit('Document link has expired.');
}

$extension = strtolower(pathinfo((string) ($metadata['original_name'] ?? ''), PATHINFO_EXTENSION));
$filePath = $privateDir . DIRECTORY_SEPARATOR . $token . ($extension ? '.' . $extension : '');

if (!is_file($filePath)) {
    http_response_code(404);
    exit('Document not found.');
}

header('Content-Type: ' . ($metadata['mime'] ?? 'application/octet-stream'));
header('Content-Length: ' . filesize($filePath));
header('Content-Disposition: attachment; filename="' . basename((string) $metadata['original_name']) . '"');
header('X-Content-Type-Options: nosniff');

readfile($filePath);
