function check() {
    let api_key = "dfd8060833d766659d43e04033eb95c3";
    let city = document.getElementById("city").value || "rajkot";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        .then((a) => {
            return a.json();
        })
        .then((res) => {
            document.getElementById("main").innerHTML = view(res)
        })
        .catch((err) => {
            console.log(err);

        })
}

function view(obj) {
    let iconurl = `https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png`
    console.log(obj);
    
    return `<div class="weather-container">
        <h2 class="city-name">City: <span id="city-name">${obj.name}</span></h2>
        <h3 class="country">Country: <span id="country">${obj.sys.country}</span></h3>
        
        <div class="weather-details">
            <p><strong>Temperature:</strong> <span id="temp">${obj.main.temp}°C</span></p>
            <img src="${iconurl}" alt="${obj.weather[0].description}">
            <p><strong>Feels Like:</strong> <span id="feels-like">${obj.main.feels_like}°C</span></p>
            <p><strong>Humidity:</strong> <span id="humidity">${obj.main.humidity}%</span></p>
            <p><strong>Max Temperature:</strong> <span id="max-temp">${obj.main.temp_max}°C</span></p>
            <p><strong>Min Temperature:</strong> <span id="min-temp">${obj.main.temp_min}°C</span></p>
            <p><strong>Wind Speed:</strong> <span id="wind-speed">${obj.wind.speed} m/s</span></p>
        </div>
    </div>`
}