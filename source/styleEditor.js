$(document).ready(function(){
  $("input[type=submit]").on( "click", function() {
    var selector = $(style_editor[name="selector"]).val();
    var property = $(style_editor[name="property"]).val();
    var value = $(style_editor[name="value"]).val()

    event.preventDefault();
    $(`${selector}`).css(property, value);
  })
});
