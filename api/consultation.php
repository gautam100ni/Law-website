<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');
const MAX_FILE_SIZE = 10485760;
const TOKEN_BYTES = 32;
const TOKEN_TTL = 604800;
function respond(int $status, array $payload): never { http_response_code($status); echo json_encode($payload, JSON_UNESCAPED_SLASHES); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') respond(405, ['success'=>false,'message'=>'Method not allowed.']);
if (!empty($_POST['website'] ?? '')) respond(400, ['success'=>false,'message'=>'Invalid submission.']);
$required=['fullName','phone','email','state','city','caseType','message'];
foreach($required as $key){ if(trim((string)($_POST[$key]??''))==='') respond(422,['success'=>false,'message'=>'Please complete all required fields.']); }
$email=trim((string)$_POST['email']);
if(!filter_var($email,FILTER_VALIDATE_EMAIL)) respond(422,['success'=>false,'message'=>'Please enter a valid email address.']);
$privateDir=dirname(__DIR__).DIRECTORY_SEPARATOR.'private_uploads';
if(!is_dir($privateDir) && !mkdir($privateDir,0700,true)) respond(500,['success'=>false,'message'=>'Secure upload storage is unavailable.']);
$fileUrl=null;
if(isset($_FILES['attachment']) && $_FILES['attachment']['error']!==UPLOAD_ERR_NO_FILE){
  $file=$_FILES['attachment'];
  if($file['error']!==UPLOAD_ERR_OK) respond(422,['success'=>false,'message'=>'The document upload failed. Please try again.']);
  if((int)$file['size']>MAX_FILE_SIZE) respond(422,['success'=>false,'message'=>'The attachment must be 10 MB or smaller.']);
  $extension=strtolower(pathinfo((string)$file['name'],PATHINFO_EXTENSION));
  $allowed=['pdf','jpg','jpeg','png','doc','docx'];
  if(!in_array($extension,$allowed,true)) respond(422,['success'=>false,'message'=>'Unsupported attachment type.']);
  $finfo=new finfo(FILEINFO_MIME_TYPE); $mime=$finfo->file($file['tmp_name'])?:'';
  $mimes=[
    'pdf'=>['application/pdf'],'jpg'=>['image/jpeg'],'jpeg'=>['image/jpeg'],'png'=>['image/png'],
    'doc'=>['application/msword','application/octet-stream'],
    'docx'=>['application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/zip','application/octet-stream']
  ];
  if(!in_array($mime,$mimes[$extension],true)) respond(422,['success'=>false,'message'=>'The uploaded file type could not be verified.']);
  $token=bin2hex(random_bytes(TOKEN_BYTES));
  $target=$privateDir.DIRECTORY_SEPARATOR.$token.'.'.$extension;
  if(!move_uploaded_file($file['tmp_name'],$target)) respond(500,['success'=>false,'message'=>'The document could not be stored securely.']);
  @chmod($target,0600);
  $meta=['originalName'=>preg_replace('/[^A-Za-z0-9._ -]/','_',basename((string)$file['name'])),'mime'=>$mime,'size'=>(int)$file['size'],'expiresAt'=>time()+TOKEN_TTL];
  file_put_contents($privateDir.DIRECTORY_SEPARATOR.$token.'.json',json_encode($meta,JSON_UNESCAPED_SLASHES),LOCK_EX);
  @chmod($privateDir.DIRECTORY_SEPARATOR.$token.'.json',0600);
  $scheme=(!empty($_SERVER['HTTPS'])&&$_SERVER['HTTPS']!=='off')?'https':'http';
  $host=$_SERVER['HTTP_HOST']??''; if($host==='') respond(500,['success'=>false,'message'=>'Unable to create a secure document link.']);
  $fileUrl=$scheme.'://'.$host.'/api/download.php?token='.rawurlencode($token);
}
respond(200,['success'=>true,'fileUrl'=>$fileUrl]);
