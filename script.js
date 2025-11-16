async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "44e1a1212b049a8fc946afb1545a790c";
  
  if (!city) {
    document.getElementById("weatherResult").innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Debugging

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML =
        `🌡️ Temp: ${data.main.temp}°C<br>🌥️ Condition: ${data.weather[0].description}`;
    } else {
      document.getElementById("weatherResult").innerHTML = `❌ ${data.message}`;
    }
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = "⚠️ Error fetching weather data.";
    console.error(error);
  }
}