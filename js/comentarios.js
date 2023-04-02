// notacion abreviada
$(function () {
  $("#submit").click(function (event) {
    event.preventDefault();

    var comentario = $("#comentario").val();
    var len_c = comentario.length;

    if (len_c >= 3){

    var fila =  '<div class="container text-center border-top border-3"><div class="row"><div class="col col1-nashe text-start"><p id="user">Anónimo:</p></div><div class="col col2-nashe text-end"><p id="time">Hace un momento</p></div></div><div class="row"><div class="col col3-nashe text-start"><p class="text-break">'+comentario+'</p></div></div></div>';

    

    $('#container>#container-comentarios').append(fila);
    }else{
    
      alert("El comentario tiene que ser almenos 3 digitos.")

    };



  });
  //   cierre del click de submint
});
//   cierre del ready

