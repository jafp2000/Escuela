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

    $app->get('/getCategorias', function () {
        $cliente = new nusoap_client("http://201.236.20.29/WS_carro_PRD/WSE.asmx?WSDL", true);
        $selectCateogria = $cliente->call("getCategorias", array());
        $result = $selectCateogria["getCategoriasResult"]["anyType"];
        $response["error"] = false;
        $response["data"] = $result;
        echoResponse(200, $result);
    });

    $app->get('/getCursosMes/:categoria/:ciudad/:mes/:anio', function ($categoria, $ciudad, $mes, $anio) {
        $cliente = new nusoap_client("http://201.236.20.29/WS_carro_PRD/WSE.asmx?WSDL", true);
        $params = array();
        $params ["id_categoria"] = $categoria;
        $params ["id_ciudad"] = $ciudad;
        $params ["mes"] = $mes;
        $params ["ano"] = $anio;
        $data = $cliente->call("getCursosMes", $params);
        $result = $data["getCursosMesResult"];
        $response["error"] = false;
        $response["data"] = $result;
        echoResponse(200, $result);
    });

    $app->get('/getOrdenCursosInicial/:sucursal/:mes/:anio', function ($sucursal, $mes, $anio) {
        $cliente = new nusoap_client("http://201.236.20.29/WS_carro_PRD/WSE.asmx?WSDL", true);
        $params = array();
        $params ["sucursal"] = $sucursal;
        $params ["mes"] = $mes;
        $params ["ano"] = $anio;
        $data = $cliente->call("ORDEN_CURSOS_INICIAL", $params);
        $result = $data;
        $response["error"] = false;
        $response["data"] = $result;
        echoResponse(200, $result);
    });

    //PRUEBA POST
    $app->post('/test', function () {
        $hola = $_POST["hola"];
        echo $hola;
    });

    $app->run();