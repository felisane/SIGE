<?php
// Minimal front controller to mimic CodeIgniter routing
$path = $_GET['path'] ?? 'home';
require __DIR__ . '/application/controllers/Pages.php';
$controller = new Pages();
$controller->view($path);
