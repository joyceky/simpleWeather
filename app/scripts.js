$(document).ready(function () {  
    getCurrentAddress(); 
});
    var currentAddress = {};
    var currentWeather = {};
    var weatherUrl = "https://api.forecast.io/forecast/b608b777eb9877f79b43bddfa74f5d86/";

function getCurrentAddress() {
    var request = $.ajax({
        url: "http://ip-api.com/json",
        dataType: "jsonp"
    });
    
    request.done(function (data) {
        currentAddress = data;
        weatherUrl = weatherUrl + currentAddress.lat + "," + currentAddress.lon;

        getCurrentWeather(weatherUrl);
    });
    
    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    })    
}

function getCurrentWeather(url) {
    var request = $.ajax({
        url: url,
        dataType: "jsonp"
    });

    request.done(function (data) {
        currentWeather = data;
        $("#temp").html(currentWeather.currently.apparentTemperature);
        $("#chancePrec").html(currentWeather.currently.precipProbability);
    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    })
};

