$(document).ready(function() {
    
  $.get('http://api.alperg.com/grocery').then(function(response) {
    console.log(response);

    for (var i = 0; i < response.length; i++) {
      var item = $("<div>");
      item.addClass("item");

      var groceryItem = $("<span>");
      groceryItem.addClass("food-name");
      groceryItem.text(response[i].name);

      var checked = response[i].isFood ? 'checked' : '';
      var checkbox = $("<input type='checkbox' name='cb" + i + "' " + checked + ">");
      checkbox.addClass("isfood");
      
      item.append(checkbox, groceryItem);
      $("#items").append(item);
    }

  });

});
