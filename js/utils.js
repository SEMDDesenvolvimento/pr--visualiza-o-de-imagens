// Pré-visualização de imagens no navegador
var visualizacaoImagens = function (input, lugarParaInserirVisualizacaoDeImagem) {

  if (input.files) {
    var quantImagens = input.files.length;

    for (i = 0; i < quantImagens; i++) {
      var reader = new FileReader();
      $("img").parent(".shazam").remove();
      reader.onload = function (event) {
        $("<div class=\"shazam\" style=\"flex-basis: 0; flex-grow: 1; min-width: 100%;"+
          "margin-left: auto!important; margin-right: auto!important;\" >" +
          "<i style=\"margin-left: 180px; position: absolute;\" "+
          "class=\"ic_rmv fa fa-times remove\" aria-hidden=\"true\"></i>" +
          "<img class=\"border-cicle\" style=\"margin-left: 0px; margin-top: 0px;\" src=\"" 
          + event.target.result + "\" />" +
          "</div>").appendTo(lugarParaInserirVisualizacaoDeImagem);
        $(".remove").click(function () {
          $('#files').val("");
          $("#imgpadrao").show();
          $(this).parent(".shazam").remove();
        });

      }

      reader.readAsDataURL(input.files[i]);
    }

  }

};


// Simplifica a exibição de elementos da página
function showItem(element) {
  element.style.display = 'block';
}

// Simplifica a remoção de elementos da página
function hideItem(element) {
  element.style.display = 'none';
}
