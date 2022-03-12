var callBackGetSuccess = function(data) {
    console.log("donnees api", data)
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "LA TEMPERATURE EST DE : " + data.main.temp;
}

function buttonClickGET() {
    var queryLoc = document.getElementById("queryLoc").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&APPID=9003d2c1fc2589a0329e87c4bcb20aea"
  
    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
        })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            //alert( "finished" ); 
        });
}                     
                                                               