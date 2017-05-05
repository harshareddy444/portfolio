 document.getElementById("btn").onclick = function abc(){
      var loc = document.getElementById("location").value;
      var weather = new XMLHttpRequest();
weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ loc+"&appid=8c271c2c1a2919bb79b8f31314c52ed9&units=metric",false);
weather.send(null);

var r = JSON.parse(weather.response);
var dis = "City: " + r.name;
var tem =  "Current Temp: " + r.main.temp + " °C";
var win = "Wind Speed: " +r.wind.speed + " m/s";
var cntry = "Country: " +r.sys.country;
     var min = "Min Temp: " +r.main.temp_min + " °C";
     var max = "Max Temp: " +r.main.temp_max + " °C";
     
     var foot = "The current weather in <b>"+loc+"</b> is <b>"+r.weather[0].main+"</b> with  <b>Humidity: "+r.main.humidity+"<b>% ; Cloudiness: "+r.clouds.all+"%";
     
      document.getElementById("city"). innerHTML= dis;
     document.getElementById("country"). innerHTML= cntry;
      document.getElementById("temp"). innerHTML= tem;
     document.getElementById("minimum"). innerHTML= min;
     document.getElementById("maximum"). innerHTML= max;
      document.getElementById("wind"). innerHTML= win;
     document.getElementById("footer"). innerHTML= foot;
      }