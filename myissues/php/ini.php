<?php
error_reporting(E_ERROR | E_PARSE); // mostrar sólo errores por salida

// manage CORS
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");

// open database
$db = new SQLite3('test.db');
// create database
$res = $db->query('SELECT * FROM users');
if (!$res) {
    $db->exec('CREATE TABLE users (id VARCHAR(32), email VARCHAR(32), name VARCHAR(32), surname VARCHAR(32), password VARCHAR(32), img TEXT)') or die;
    //$db->exec('CREATE TABLE workspaces ()') or die; crear todas las tablas

    error_log("Created database successfully"); // mensaje por consola
}

// manage authentication
if (isset($_REQUEST['token'])) {
    $token = $_REQUEST['token'];
    $user = NULL;
    $res = $db->query("SELECT * FROM users WHERE id='$token'");
    if (!is_bool($res) and $row = $res->fetchArray()) {
    $user = array(
    'id' => $row['id'],
    'email' => $row['email'],
    'name' => $row['name'],
    'surname' => $row['surname'],
    'img' => $row['img'],
    'token' => $row['id']
    );
    }
    if (!$user) {
    $db->close();
    http_response_code(401);
    exit;
    }
   }
   


?>