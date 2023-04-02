var contador = 0;
// notacion abreviada
$(function () {
  $("#submit-form").click(function (event) {
    event.preventDefault();

    var titulo = $("#titulo").val();
    var descripcion = $("#descipcion").val();
    var len_t = titulo.length;
    var len_d = descripcion.length;
    if (len_d >= 3 && len_t >= 3){
      contador +=1;

    var fila = '<tr><th scope="row">'+contador+'</th><td>'+titulo+'</td><td>'+descripcion+'</td></tr>';

    $('#tabla>tbody').append(fila);
    }else{
      alert("El título y la descripción tienen que ser mayor que 3.")
    };

    

  });
  //   cierre del click de submint
});
//   cierre del ready

