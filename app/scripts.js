$(document).ready(function () {  
    getCurrentAddress(); 

});
    var currentAddress = {};
    var Weather = {};
    var weatherUrl = "https://api.forecast.io/forecast/b608b777eb9877f79b43bddfa74f5d86/";

function getCurrentAddress() {
    var request = $.ajax({
        url: "http://ip-api.com/json",
        dataType: "jsonp"
    });
    
    request.done(function (data) {
        currentAddress = data;
        weatherUrl = weatherUrl + currentAddress.lat + "," + currentAddress.lon;
        
        currentLocation.innerHTML = currentAddress.city;

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
        Weather = data;
        currentTemp.innerHTML = Weather.currently.apparentTemperature;

    });

    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    })
};

