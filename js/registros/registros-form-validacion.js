$(document).ready(function() {
    $("#asd").validate({
        rules: {
            titulo: {
                required: true,
                minlength: 3
            },
            descipcion: {
                required: true,
                minlength: 3
            }
        },
        titulo: {
            titulo: {
                required: "Ingrese un título",
                minlength: "Largo mínimo 3 caracteres."
            },
            descipcion: {
                required: "Ingrese alguna descripción",
                minlength: "Largo mínimo 3 caracteres."
            }
        }
    })
});