<?php
    require '../vendor/autoload.php';
    require "../libs/nusoap.php";
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header("Access-Control-Allow-Headers: X-Requested-With");
    header('Content-Type: text/html; charset=utf-8');
    header('P3P: CP="IDC DSP COR CURa ADMa OUR IND PHY ONL COM STA"');
    Slim\Slim::registerAutoloader();
    $app = new \Slim\Slim();

    function echoResponse($status_code, $response) {
        $app = \Slim\Slim::getInstance();
        $app->status($status_code);
        $app->contentType('application/json');
        echo json_encode($response);
    }

    $app->get('/getCiudades', function () {
        $cliente = new nusoap_client("http://201.236.20.29/WS_carro_PRD/WSE.asmx?WSDL", true);
        $selectCiudad = $cliente->call("getCiudades", array());
        $result = $selectCiudad['getCiudadesResult'];
        $response["error"] = false;
        $response["data"] = $result;
        echoResponse(200, $result);
    });

    $app->run();