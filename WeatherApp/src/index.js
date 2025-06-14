document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("input");
    let button = document.getElementById("button");
    let info = document.getElementById("info");
    let apiKey = "a3a6ab6b7141b95955ac499bae3bb366";

    button.addEventListener("click", async () => {
        let text = input.value.trim();
        if (text === "") {
            return;
        }
        try {
            let weatherData = await fetchData(text);
            renderWeatherData(weatherData);
        } catch (error) {
            showError(error);
        }
    });

    async function fetchData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Location not found");
        }
        const weatherData = await response.json();
        console.log(weatherData.main);
        return weatherData;
    }

    function renderWeatherData(weatherData) {
        let { name, main, weather } = weatherData;
        info.innerHTML = `
        <h2 class="text-white text-center bg-orange-400 hover:bg-orange-800 hover:text-black">City Name: ${name}</h2>
        <h2 class="text-white text-center bg-orange-400 hover:bg-orange-800 hover:text-black">Temperature: ${main.temp}℃</h2>
        <h2 class="text-white text-center bg-orange-400 hover:bg-orange-800 hover:text-black">Weather: ${weather[0].description}</h2>`;
        console.log(name, weather, main);
    }
    function showError(error) {
        info.innerHTML = `<p class="text-black-400">${error.message}</p>`;
    }
});
