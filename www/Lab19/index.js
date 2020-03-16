$(document).ready(function () {
    const base_url = "https://api.weather.gov/stations/";
    const endpoint = "/observations/latest";
    // weather update button click
    $('#getwx').on('click', function (e) {
        var mystation = $('input').val();
        var myurl = base_url + mystation + endpoint;
        $('input#my-url').val(myurl);
        // clear out any previous data
        $('ul').empty();
        console.log("Cleared Elements of UL");
        // execute AJAX call to get and render data
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function (data) {
                console.log(JSON.stringify(data));
                var tempC = data['properties']['temperature'].value.toFixed(1);
                var tempF = (tempC * 9 / 5 + 32).toFixed(1);
                // get wind info and convert m/s to kts
                var windDirection = data['properties']['windDirection'].value.toFixed(1);
                var windSpeed = data['properties']['windSpeed'].value.toFixed(1) * 1.943844;
                var humidity = data['properties']['relativeHumidity'].value.toFixed(1);
                // uncomment this if you want to dump full JSON to textarea
                var myJSON = JSON.stringify(data);
                $('textarea').val(myJSON);
                var str = "<li>Current temperature: " + tempC + "C " + tempF + "F" + "</li>";
                var windDir = "<li>Wind Direction: " + windDirection + " degrees" + "</li>";
                var windSp = "<li>Wind Speed: " + windSpeed + " kts" + "</li>";
                var hum = "<li>Relative Humidity: " + humidity + " %RH" + "</li>";
                $('ul').append(str, windDir, windSp, hum);
                $('ul li').attr('class', 'list-group-item');

                $('ul').append(
                    `<h3>${data['properties'].textDescription}</h3>`,
                    `<img src="${data['properties'].icon}"/>`,
                );
            }
        });
    });
});