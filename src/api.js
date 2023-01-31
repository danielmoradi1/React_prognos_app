export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '929f72d503msh085de2f25ba4e9cp12fedajsn1c054405321d',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

/**
 * Api:er som har används för den här applikationen är GeoDB Cities för att få fram namn på städer
 * Den andra API är OPENWEATHER för att få fram prognoser 
 * Här skapas en GET request till API för att hämta data
 * Sparas API:er och KEY
 * **/


export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export const WEATHER_API_KEY = '60eb10f3e7e649165053b4a49cf88e0b';