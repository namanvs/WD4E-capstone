async function getOWM() {
  let response = await fetch( "https://api.openweathermap.org/data/2.5/weather?id=1880252&appid=221d052ce4025d1c344cf96504574531&units=metric");
  let data = await response.json();
  document.getElementById("response").innerHTML= "<h3>" + data.name + "</h3><br>Temperature: <em>" + data.main.temp.toFixed(1) + "</em>&degC<br>Humidity: " + data.main.humidity + "%<br>Feels Like: " + data.main.feels_like + "&degC"
}

function cookieDemo(){
  document.cookie="message="+document.getElementById("inputArea").value;
  alert(document.cookie);
}

document.getElementById("getWeather").addEventListener("click", getOWM, true);

document.getElementById("submitText").addEventListener("click", cookieDemo, true);
