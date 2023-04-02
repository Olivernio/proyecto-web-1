$(document).ready(function() {
    $("#contact-form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            nombre: {
                required: true,
                minlength: 3
            },
            tel: {
                required: true,
                minlength: 9,
                maxlength: 9,
                number: true
            },
            mensaje: {
                required: true,
                minlength: 3
            }
        },
        messages: {
            email: {
                required: "Ingresa tu email",
                email: "Debe ser la sintaxis del email. ej: hola@ejemplo.com."
            },
            name: {
                required: "Ingrese su nombre",
                minlength: "Largo mínimo 3 caracteres."
            },
            tel: {
                required: "Ingrese su número telefónico",
                minlength: "Largo debe ser de 9.",
                maxlength: "Largo debe ser de 9."
            },
            mensaje: {
                required: "Ingrese su mensaje",
                minlength: "Largo mínimo 3 caracteres"
            }
        }
    })
});