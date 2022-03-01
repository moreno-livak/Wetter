const key = 'mdxa6jC448bAvpWsYezrXw0zVNAAujCT';


// Wetter Infortmationen
const getWeather = async (id) => {
  
  const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}&language=de`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};


// Stadt Informationen
const getCity = async (city) => {

  const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`; 

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

