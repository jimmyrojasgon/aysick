<?php
$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$pass = isset($_POST['pass']) ? $_POST['pass'] :'';
$data = json_decode(file_get_contents('db/data.json'));
if($data->usuario == $usuario){
    if($data->pass == $pass){
        echo json_decode('true');
    }else{
        echo json_decode('la contraseña no es valida');
    }
} else{
    echo json_decode('el usuario no existe');
}
