<?php
require 'firebase.php';

$data = json_decode(file_get_contents('php://input'), true);
$tag = $data['tag'] ?? '';
$value = $data['value'] ?? '';
$token = $data['token'] ?? '';

try {
  verifyIdToken($token);
  $db = initFirebase()->createDatabase();
  $db->getReference($tag)->set($value);
  echo json_encode(['status' => 'inserted']);
} catch (Exception $e) {
  echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
