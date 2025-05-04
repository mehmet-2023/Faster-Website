<?php
require 'firebase.php';

$tag = $_GET['tag'] ?? '';
$token = $_GET['token'] ?? '';

try {
  verifyIdToken($token);
  $db = initFirebase()->createDatabase();
  $value = $db->getReference($tag)->getValue();
  echo json_encode(['status' => 'success', 'value' => $value]);
} catch (Exception $e) {
  echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
