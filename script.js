document.getElementById("weatherForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const city = document.getElementById("cityInput").value;
    const apiKey = "fdbb2e2ee2debb596b50ed79219419f6"; // Replace with your OpenWeatherMap API key
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.cod === "404") {
          document.getElementById("weatherResult").innerHTML = `<p>City not found. Please try again.</p>`;
        } else {
          document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
          `;
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        document.getElementById("weatherResult").innerHTML = `<p>Unable to retrieve weather data. Please try again later.</p>`;
      });
  });
  