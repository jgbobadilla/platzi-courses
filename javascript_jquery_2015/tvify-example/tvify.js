$(function(){
  
  /**
  *Submit search form
  */
  $("#app-body").find("form")
    .submit(function (ev) {
      ev.preventDefault();
      var query = $(this)
        .find('input[type="text"]')
        .val();
      alert("Está buscando por: " + query);
    });

  /**
  *Load info
  */
  var template = '<article class="tv-show">' + 
      '<div class="left img-container"><img src=":img:" alt=":img-alt:"></div>' +
      '<div class="right info">' +
        '<h2>:name:</h2>' +
        '<p>:summary:</p>' +
      '</div>' + 
    '</article>';

  $.ajax({
    url: "http://api.tvmaze.com/shows",
    success: function(shows, textStatus, jqXHR){
      //se realizan dos mejoras: Una, se cacha el resultado de la búsqueda jQuery. Dos, para evitar el re-renderizado se llama una sola vez al append
      var $showsContainer = $('#app-body').find(".tv-shows");
      var showsHTML = '';

      shows.forEach(function(show){
        var article = template
          .replace(':name:', show.name)
          .replace(':img:', show.image.medium)
          .replace(':summary:', show.summary)
          .replace(':img-alt:', show.name + "logo");

          showsHTML += article;
      });

      $showsContainer.append($(showsHTML));
    },
    fail: function(){
      console.log('Failed to load data');
    }
  });

});