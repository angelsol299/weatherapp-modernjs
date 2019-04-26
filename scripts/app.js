const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = data => {
  const cityDets = data.cityDets;
  const weather = data.weather;

  //updating details  template
};

const updateCity = async city => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);

  return {
    cityDets,
    weather
  };
};

cityForm.addEventListener("submit", e => {
  //prevent default action
  e.preventDefault();

  //Get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with a new city
  updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));
});
