<?php
$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$pass = isset($_POST['pass']) ? $_POST['pass'] :'';
$data = file_get_contents('./data.json');
$json = json_decode($data, true);
if($data->usuario == $usuario){
    if($data->pass == $pass){
        echo json_encode('true');
    }else{
        echo json_encode('la contraseña no es valida');
    }
} else{
    echo json_encode('el usuario no existe');
}
?>