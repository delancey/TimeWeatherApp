    /* =============== weather api call =============*/

let request = require('request');

let apiKey = '9ac5bc3be4129c77500db64422716a04';
// let city = 'charlotte';
let url = `http://api.openweathermap.org/data/2.5/weather?zip=${postCode},us&units=imperial&appid=${apiKey}`

// const request = require('request');
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);

    let message = `It's ${weather.main.temp} degrees ${weather.name} high temp is: ${weather.main.temp_max}`;
    console.log(message);
  }
});


(function(){      
    var NowMoment = moment(); // instantiate a moment object         
    var NowDate = new Date();  // instantiate a JS Date object      
    // display value of moment object in #displayMoment div   
    var eDisplayMoment = document.getElementById('displayMoment');   eDisplayMoment.innerHTML = NowMoment;      
    // display value of Date object in #displayJsDate div   
    var eDisplayDate = document.getElementById('displayJsDate');   eDisplayDate.innerHTML = NowDate; })();






