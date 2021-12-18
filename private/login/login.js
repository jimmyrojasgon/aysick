//var archivo = new XMLHttpRequest();
//archivo.open("GET", "./db/data.json");
//archivo.onload = function(){
//    if(archivo.status == 200){
//        var data = JSON.parse(archivo.responseText);
//    }
//}
//archivo.send();

$(window).ready(function(){

    $('#formulario_login').on('submit', function(e){

        e.preventDefault();

        let usuario = $('#txt_usuario').val();
        let pass = $('#txt_contraseña').val();
        $.post('controlador.php', {usuario, pass}, function(data){
            data = JSON.parse(data);
            if(data == 'true'){
                location.href = 'index.html';
            }else{
                console.log(data);
            
            }
        })
    })
})

