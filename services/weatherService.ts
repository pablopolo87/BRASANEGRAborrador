export interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  icon: string;
  location: string;
}

export const getWeatherData = async (): Promise<WeatherData> => {
  try {
    // Using OpenWeatherMap API (free tier)
    // Coordinates for Pradollano, Sierra Nevada: ~37.0947, -3.3911
    const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Free API key
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.0947&lon=-3.3911&appid=${API_KEY}&units=metric&lang=es`
    );

    if (!response.ok) {
      throw new Error('Weather API request failed');
    }

    const data = await response.json();

    return {
      temperature: Math.round(data.main.temp),
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
      icon: data.weather[0].icon,
      location: 'Pradollano, Sierra Nevada'
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    // Fallback data
    return {
      temperature: -2,
      description: 'nevando',
      humidity: 85,
      windSpeed: 15,
      icon: '13d',
      location: 'Pradollano, Sierra Nevada'
    };
  }
};
