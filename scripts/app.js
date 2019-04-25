const cityForm = document.querySelector("form");

const updateCity = async city => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.key);
};

cityForm.addEventListener("submit", e => {
  //prevent default action
  e.preventDefault();

  //Get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //update the ui with a new city
  updateCity(city);
});
