$(function(){
  var template = '<article class="tv-show">' + 
      '<div class="left img-container"><img src=":img:" alt=":img-alt:"></div>' +
      '<div class="right info">' +
        '<h2>:name:</h2>' +
        '<p>:summary:</p>' +
      '</div>' + 
    '</article>';
  
  var $showsContainer = $('#app-body').find(".tv-shows");
  var $loader = $showsContainer.find('.loader');

  function renderShows(shows){
    //se realizan dos mejoras: Una, se cacha el resultado de la búsqueda jQuery. Dos, para evitar el re-renderizado se llama una sola vez al append
    var showsHTML = '';

    shows.forEach(function(show){
      var article = template
        .replace(':name:', show.name)
        .replace(':img:', show.image !== null ? show.image.medium : "")
        .replace(':summary:', show.summary)
        .replace(':img-alt:', show.name + "logo");

      showsHTML += article;
    });

    $showsContainer.append($(showsHTML));
  }
  
  /**
  *Submit search form
  */
  $("#app-body").find("form")
    .submit(function (ev) {
      ev.preventDefault();
      var query = $(this)
        .find('input[type="text"]')
        .val();
      
      $loader.show();

      $.ajax({
        url: "http://api.tvmaze.com/search/shows",
        data: { q: query },
        success: function(qResults, textStatus, jqXHR){
          $showsContainer.find('.tv-show').remove();

          var qShows = qResults.map(function(qEl){
            console.log(qEl.show.image);
            return qEl.show;
          });

          $loader.hide();
          renderShows(qShows);
        },
        fail: function(){
          console.log("No se encontraron shows con la palabra clave");
        }
      });
    });

  /**
  *Load info With callbacks (No Promises)
  */
  /*
  $.ajax({
    url: "http://api.tvmaze.com/shows",
    success: function(shows, textStatus, jqXHR){
      renderShows(shows);
      $loader.hide();
    },
    fail: function(){
      console.log('Failed to load data');
    }
  });
  */

  /**
  *Load info With Promises
  */
  $.ajax("http://api.tvmaze.com/shows")
    .then(function(shows, textStatus, jqXHR){
      renderShows(shows);
      $loader.hide();
    });

});