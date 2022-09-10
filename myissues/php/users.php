<?php
require('ini.php');

if (!$_SERVER['PATH_INFO'] and $_SERVER['REQUEST_METHOD'] == 'POST') {
    // addUser
    $user = json_decode(file_get_contents('php://input'), true);
    $user['id'] = uniqid();
    $res = $db->exec("INSERT INTO users VALUES('" . $user['id'] . "','" .
        $user['email'] . "','" . $user['name'] . "','" .
        $user['surname'] . "','" . $user['password'] . "','" .
        $user['img'] . "')");
    if ($res) {
        header('Content-Type: application/json');
        echo json_encode($user);
    } else {
        http_response_code(500);
        echo $db->lastErrorMsg();
    }
} elseif (
    $_SERVER['PATH_INFO'] == '/login' and $_SERVER['REQUEST_METHOD'] ==
    'POST'
) {
    // login
    $credentials = json_decode(file_get_contents('php://input'), true);
    $email = $credentials['email'];
    $password = $credentials['password'];
    $user = NULL;
    $res = $db->query("SELECT * FROM users WHERE email='$email' AND password='$password'");
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
    if ($user) {
        header('Content-Type: application/json');
        echo json_encode($user);
    } else {
        http_response_code(404);
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    // updateUser
    $password = $credentials['password'];
    $res = $db->exec("UPDATE users SET password = '$password' WHERE $user[id] = ''");
} elseif (!$_SERVER['PATH_INFO'] and $_SERVER['REQUEST_METHOD'] == 'GET') {
    // listUsers
    $sql = "SELECT * FROM users";
    $where = '';
    foreach ($_GET as $key => $val) {
        if ($key == 'token') continue;
        if ($where) $where = $where . " AND $key='$val'";
        else $where = "$key='$val'";
    }
    if ($where) $sql = $sql . ' WHERE ' . $where;
    $users = array();
    $res = $db->query($sql);
    if ($res) {
        while (!is_bool($res) and $row = $res->fetchArray()) {
            $user = array(
                'id' => $row['id'],
                'email' => $row['email'],
                'name' => $row['name'],
                'surname' => $row['surname'],
                'img' => $row['img']
            );
            array_push($users, $user);
        }
        header('Content-Type: application/json');
        echo json_encode($users);
    } else {
        http_response_code(500);
        echo $db->lastErrorMsg();
    }
}

require('end.php');
