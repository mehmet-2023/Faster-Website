<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

$comments = json_decode(file_get_contents("comments.json"), true);

array_unshift($comments, [
  "name" => htmlspecialchars($data["name"]),
  "comment" => htmlspecialchars($data["comment"])
]);

file_put_contents("comments.json", json_encode($comments, JSON_PRETTY_PRINT));

echo json_encode(["success" => true]);
?>
