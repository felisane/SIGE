<?php
class Pages {
    public function view($page = 'home') {
        $file = __DIR__ . '/../views/' . $page . '.php';
        if (!file_exists($file)) {
            http_response_code(404);
            echo 'Page not found';
            return;
        }
        $data = [];
        if ($page === 'lista_clientes') {
            require_once __DIR__ . '/../models/Cliente_model.php';
            $model = new Cliente_model();
            $data['clientes'] = $model->all();
        }
        $dataVar = $data; // variable used in view
        include $file;
    }
}
