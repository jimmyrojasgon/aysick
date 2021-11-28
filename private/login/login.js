$(window).ready(function(){

    $('#formulario_login').on('submit', function(e){
        e.prevenDefault();
        let usuario = $('#txt_usuario').val();
        let pass = $('#txt_contraseña').val();
        $.post('controlador.php', {usuario, pass}, function(data){
            data = JSON.parse(data);
            if(data == 'true'){
                location.href = 'index.html';
            }else{
                swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    text: data
                })
            }
        })
    })
})

