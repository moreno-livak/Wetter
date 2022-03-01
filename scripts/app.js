const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const hmm = document.querySelector('.hmm');

const updateUI = (data) => {
  const cityDets = data.cityDets;
  const weather = data.weather;

  console.log(cityDets, weather);

  // Update Stuff
  card.innerHTML =
  `<h5>${cityDets.EnglishName}</h5>

  <div class="big">
    <div class="icon">
      <img src="assets/${weather.WeatherIcon}.svg" alt="">
    </div>

    <span>${weather.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>

  <div class="condition">${weather.WeatherText}</div>`;

  card.style.display = 'block';
  hmm.style.display = 'none';
};


const errorUI = () => {
  card.innerHTML = `<h5>Stadt Name nicht erkannt oder die 50 Wetter Anfragen für heute erfüllt.</h5>`;

  card.style.display = 'block';
  hmm.style.display = 'none';
};



const updateCity = async (city) => {

  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);
  return {cityDets, weather};

};

cityForm.addEventListener('submit', e => {
  e.preventDefault();
  
  // get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  // update the ui with new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => errorUI());
});
