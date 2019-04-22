const key = "0j0Gw2xhvgJjzDDJoTbQ3zFAVAoAklSG";

//geting the weather
const getWeather = async id => {
  const base = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${id}?apikye=${key}`;
  const response = await fetch(base + query);
};

//getting the city
const getCity = async city => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&&q=${city}`;
  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity("stockholm")
  .then(data => console.log(data))
  .catch(err => console.log(err));
