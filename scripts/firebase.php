<?php
require 'vendor/autoload.php';
use Kreait\Firebase\Factory;

function initFirebase() {
  return (new Factory)
    ->withServiceAccount('firebase-credentials.json')
    ->withDatabaseUri('https://faster-a2447-default-rtdb.firebaseio.com');
}

function verifyIdToken($token) {
  $auth = initFirebase()->createAuth();
  return $auth->verifyIdToken($token);
}
