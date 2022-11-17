<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET,POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Conecta a la base de datos  con usuario, contraseña y nombre de la BD
$servidor = "localhost"; $usuario = "root"; $contrasenia = ""; $nombreBaseDatos = "shift";
$conexionBD = new mysqli($servidor, $usuario, $contrasenia, $nombreBaseDatos);
// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sqlRegistrousua = mysqli_query($conexionBD,"SELECT * FROM registrousua WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sqlRegistrousua) > 0){
        $Registrousua = mysqli_fetch_all($sqlRegistrousua,MYSQLI_ASSOC);
        echo json_encode($Registrousua);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sqlRegistrousua = mysqli_query($conexionBD,"DELETE FROM registrousua WHERE id=".$_GET["borrar"]);
    if($sqlRegistrousua){
        echo json_encode(["success"=>1]);
        exit();
    }
    else{  echo json_encode(["success"=>0]); }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $data = json_decode(file_get_contents("php://input"));
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    $fecha=$data->fecha;
    $provincia=$data->provincia;
    $contrasenia=$data->contrasenia;
    $pais=$data->pais;
    $mail=$data->mail;
        if(($mail!="")&&($nombre!="")&&($apellido!="")&&($fecha!="")&&($provincia!="")&&($contrasenia!="")&&($pais!="")){       
    $sqlRegistrousua = mysqli_query($conexionBD,"INSERT INTO registrousua(nombre,apellido,fecha,provincia,contrasenia,pais,mail) 
                                                 VALUES('$nombre','$apellido','$fecha','$provincia','$contrasenia','$pais','$mail')");
    echo json_encode(["success"=>1]);
        }
    exit();
}
 // Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    $data = json_decode(file_get_contents("php://input"));
    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $nombre=$data->nombre;
    $apellido=$data->apellido;
    $fecha=$data->fecha;
    $provincia=$data->provincia;
    $contrasenia=$data->contrasenia;
    $pais=$data->pais;
    $mail=$data->mail;
    $sqlRegistrousua = mysqli_query($conexionBD,"UPDATE registrousua 
    SET nombre='$nombre',apellido='$apellido',fecha='$fecha',provincia='$provincia',contrasenia='$contrasenia',pais='$pais',mail='$mail' WHERE id='$id'");
    echo json_encode(["success"=>1]);
    exit();
}
// Consulta todos los registros de la tabla registrousua
$sqlRegistrousua = mysqli_query($conexionBD,"SELECT * FROM registrousua ");
if(mysqli_num_rows($sqlRegistrousua) > 0){
    $Registrousua = mysqli_fetch_all($sqlRegistrousua,MYSQLI_ASSOC);
    echo json_encode($Registrousua);
}
else{ echo json_encode([["success"=>0]]); }
?>