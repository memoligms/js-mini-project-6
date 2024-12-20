const apikey = 'aadb5ed6ea2b1ad655a980e6f3d1031f';
const form = document.getElementById('form');
const city = document.getElementById('city');
const weatherDiv = document.getElementById('weather');
const iconDiv = document.getElementById('icon');
const temperatureDiv = document.getElementById('temperature');
const descriptionDiv = document.getElementById('desc');
const detailsDiv = document.getElementById('details');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const cityValue = city.value;
  getWeather(cityValue);
});

async function getWeather(cityValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
    );

    const data = await response.json();

    const temparature = Math.round(data.main.temp);
    const icon = data.weather[0].icon;
    const details = [
      `Hissedilen: ${Math.round(data.main.feels_like)}`,
      `Nem Oranı:${data.main.humidity}%`,
      `Rüzgar:${data.wind.speed} m/s`,
    ];

    iconDiv.innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    temperatureDiv.textContent = `${temparature}°C`;

    let detailsNew = details.map((detail) => `<div>${detail}</div>`).join('');
    descriptionDiv.textContent = '';
    detailsDiv.innerHTML = detailsNew;

  } catch (error) {
    iconDiv.innerHTML = '';
    temperatureDiv.textContent = '';
    descriptionDiv.textContent = 'Lütfen geçerli bir şehir giriniz';
    detailsDiv.innerHTML = '';
  }
}
