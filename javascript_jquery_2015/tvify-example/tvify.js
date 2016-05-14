$(function(){
  //VanillaJS
  var vJSHeader = document.getElementById("app-header"); //Obtenemos por id, pero recorrer los hijos para buscar el h1 es más engorroso, y no se puede hace uso de métodos como GetElementsByTagName porque retornan todos los del documento y no de una porción de él. Éste es uno de los escenarios donde jQuery facilita la vida

  //jQuery
  var header = $("#app-header");
  console.log(header);
  var subHeaders = $("h1 + h2");
  console.log(subHeaders);

  var title = $("h1", header[0]);    //Utiliza un elemento DOM como contexto para acelerar la búsqueda sobre sólo una parte de todo el árbol DOM. Se utiliza el objeto DOM para facilitar el trabajo, aunque un jQUeryObject también es válido

  $("#app-header").find("h1");

  var $createdA = $('<a>', {
    "href": "http://platzi.com",
    "title": "Ir a platzi",
    "target": "_blank",
    "html": "Visitar Platzi"
  });

  $("#app-body").append($createdA);
});