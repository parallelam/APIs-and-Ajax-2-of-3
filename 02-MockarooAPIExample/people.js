$(document).ready(function() {
    
  $.get('https://my.api.mockaroo.com/people?key=0a1e36d0').then(function(response) {
    console.log(response);

    var tbody = $("#people tbody");


    for (var i = 0; i < response.length; i++) {
      var row = $("<tr>");
      
      var id = $("<td>").text(response[i].id);
      var fn = $("<td>").text(response[i].first_name);
      var ln = $("<td>").text(response[i].last_name);
      var em = $("<td>").text(response[i].email);
      var ge = $("<td>").text(response[i].gender);

      row.append(id, fn, ln, em, ge);
      tbody.append(row);
    }

        

  });

});
