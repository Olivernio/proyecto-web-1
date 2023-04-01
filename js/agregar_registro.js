// notacion abreviada
$(function () {
  $("#submit-form").click(function (event) {
    event.preventDefault();

    var titulo = $("#titulo").val();
    var descripcion = $("#descripcion").val();
    var precio = $("#precio").val();

    var fila = '<div class="registro"><h3>'+titulo+'</h3><p>'+descripcion+'</p><p>'+precio+'</p></div>';

    $('#contenedor_registros').append(fila);
  
    // esta es una forma de cambiar el CSS a algun
    // componente del DOM
    var documento = $("#contenedor_registros");
    // elementoDom.css("atributo", "valor");
    documento.css("background-color", "#ff8833");
 
  });
  //   cierre del click de submint
});
//   cierre del ready
