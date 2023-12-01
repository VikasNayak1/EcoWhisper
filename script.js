
document.addEventListener("DOMContentLoaded", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = "3fc02434525f3efcf790a2908bb2322e";
      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      try {
        const response = await fetch(weatherApiUrl);
        const data = await response.json();

        
        const temperatureCelsius = (data.main.temp - 273.15).toFixed(2);

       
        const weatherData = `Location: ${data.name}\nTemperature: ${temperatureCelsius} °C, Description: ${data.weather[0].description}`;
        document.getElementById("weather-data").innerText = weatherData;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }, (error) => {
      console.error("Error getting location:", error.message);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
});

