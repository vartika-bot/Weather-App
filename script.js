
        const apiKey = "b1230dbbb7c660f4ce8a812949c09370";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const weatherIcon = document.querySelector('.weather-icon');
        const searchInput = document.getElementById('searchInput');
        const weatherTag = document.querySelector('.state');

        async function checkWeather(city) {
            const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
            const data = await response.json();

            console.log(data);
            document.querySelector(".city").textContent = data.name;
            document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").textContent = data.main.humidity + "%";
            document.querySelector(".wind").textContent = data.wind.speed + ' Km/h';

            switch (data.weather[0].main) {
                case "Clouds":
                    weatherTag.textContent = 'Clouds';
                    break;
                case "Clear":
                    weatherTag.textContent = 'Clear';
                    break;
                case "Rain":
                    weatherTag.textContent = 'Rain';
                    break;
                case "Drizzle":
                    weatherTag.textContent = 'Drizzle';
                    break;
                case "Mist":
                weatherTag.textContent = 'Mist';                   
                 break;
                default:
                weatherTag.textContent = 'Clouds';
                    break;
            }

            switch (data.weather[0].main) {
                case "Clouds":
                    weatherIcon.src = 'images/clouds.png';
                    break;
                case "Clear":
                    weatherIcon.src = 'images/clear.png';
                    break;
                case "Rain":
                    weatherIcon.src = 'images/rain.png';
                    break;
                case "Drizzle":
                    weatherIcon.src = 'images/drizzle.png';
                    break;
                case "Mist":
                    weatherIcon.src = 'images/mist.png';
                    break;
                default:
                    weatherIcon.src = 'images/snow.png';
                    break;
            }

            document.querySelector(".weather").style.display = 'block';
        }

        document.querySelector('.search button').addEventListener("click", () => {
            checkWeather(searchInput.value);
        });

        searchInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                checkWeather(searchInput.value);
            }
        });
    