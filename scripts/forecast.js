const key = "0j0Gw2xhvgJjzDDJoTbQ3zFAVAoAklSG";

const getCity = async () => {
  const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apiKey=${key}&&q=${city}`;
  const response = await fetch(base + query);
};
