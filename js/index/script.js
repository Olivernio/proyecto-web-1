// notacion abreviada
$(function () {
    $("#submit-form").click(function (event) {
      event.preventDefault();
  
      var email = $("#email").val();
      var nombre = $("#nombre").val();
      var tel = $("#tel").val();
      var mensaje = $("#mensaje").val();
  
      if (email.length >= 3 && nombre.length >= 3 && tel.length === 9 && mensaje.length >= 3){
  
        alert("Muchas gracias "+nombre+", pronto le enviaremos un correo electrónico.")

      }else{
      
        alert("Verifique los requerimientos.")
  
      };
  
  
  
    });
    //   cierre del click de submint
  });
  //   cierre del ready
  
  