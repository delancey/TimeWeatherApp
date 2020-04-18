$(document).ready(function() {

   
    $('#getForecast').click(function() {
       
        var zipCode = $('#zip').val();
        var key = '9ac5bc3be4129c77500db64422716a04';
        let ty;
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather',
            dataType: 'json',
            type: 'GET',
            data: {zip:zipCode, appid: key, units: 'imperial'},
            success: function(data){
                $(".heading").show();
                var wf = '';
                $.each(data.weather, function(index, val) {
                    ty= data.timezone;
                    wf += '<p><b>' + data.name + "</b></p>" + parseInt(data.main.temp) + '&deg;F ' + ' | ' + val.main + ", " + val.description 
                });
                $(".showForecast").html(wf);
                let zone;
                let now = moment().unix();
                
                let difference = data.timezone; //utc offset-timezone
                
                



                let offset = (difference -(-14400));//offset - local time
                
                let timeAndOff = now + offset;
                
                let localZone = moment.unix(timeAndOff).format('llll');
                
                if (difference == -14400){
                    zone = "Eastern";
                } else if ( difference == -18000) {
                    zone = "Central"; 
                } else if (difference == -21600) {
                    zone = "Mountain"
                } else if(difference == -25200){
                    zone = "Pacific"
                } else if(difference == -28800){
                    zone = "Alaskan"
                } else if ( difference == -36000) {
                    zone = "Hawaiian"
                } else {
                    $(".showForecast").html("Please enter a valid zip code")
                }

                $(".location").html(localZone + ' ' + " "+ zone);
            },// success

            error: function(xhr, status, error) {
                $(".showForecast").html("Please enter a valid zip code");
              }
        })
        
    }) //end of get forecast

})  //end of document ready function

