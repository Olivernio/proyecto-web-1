$(document).ready(function() {
    $("#formulario").validate({
        rules: {
            email: {
                rquerid: true,
                email: true
            },
            name: {
                requerid: true,
                minlength: 3
            },
            tel: {
                requerid: true,
                minlength: 9,
                number: true
            },
            mensaje: {
                requerid: true,
                minlength: 3
            }
        },
        messages: {
            email: {
                email: "Debe ser la sintaxis del email. ej: hola@ejemplo.com."
            },
            name: {
                minlength: "El nombre tiene que tener como mínimo 3 caracteres."
            },
            tel: {
                minlength: "El número de teléfono tiene que ser de 9 caracteres"
            },
            mensaje: {
                minlength: "El mensaje tiene que tener como mínimo 3 caracteres."
            }
        }
    })
});