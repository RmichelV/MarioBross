<?php
// Verificamos que se hayan recibido los datos del formulario
if(isset($_POST["nombre"]) && isset($_POST["correo"]) && isset($_POST["cantidad"])) {

    // Validamos los datos del formulario
    $nombre = trim($_POST["nombre"]);
    $correo = trim($_POST["correo"]);
    $cantidad = intval($_POST["cantidad"]);

    if(empty($nombre) || empty($correo) || $cantidad <= 0) {
        // Los datos del formulario no son válidos
        $respuesta = array("exito" => false, "mensaje" => "Por favor ingresa todos los datos requeridos.");
    } else {

        // Realizamos la reserva de boletos
        $boletos = array();
        for($i = 0; $i < $cantidad; $i++) {
            $codigo_boleto = uniqid("boleto_", true); // Generamos un código único para el boleto
            $nombre_archivo = $codigo_boleto . ".pdf";
            $archivo = fopen($nombre_archivo, "w"); // Creamos un archivo PDF vacío para el boleto
            fwrite($archivo, "¡Gracias por reservar tu boleto para la película de Mario!"); // Escribimos el contenido en el archivo PDF
            fclose($archivo); // Cerramos el archivo
            $boletos[] = $nombre_archivo; // Agregamos el nombre del archivo a la lista de boletos
        }

        // Generamos la respuesta en formato JSON
        $respuesta = array("exito" => true, "mensaje" => "Reserva realizada con éxito.", "boletos" => $boletos);
    }

} else {
    // Los datos del formulario no se recibieron correctamente
    $respuesta = array("exito" => false, "mensaje" => "Por favor ingresa todos los datos requeridos.");
}

// Enviamos la respuesta en formato JSON
header("Content-type: application/json");
echo json_encode($respuesta);
?>
