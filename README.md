# Weather Project

This is a weather mini project built using React and created with Vite. It allows users to search for weather information of different locations.

## Features

- Search for weather information of any location
- Display current weather conditions including temperature, humidity, wind speed, and description
- Show a 5-day forecast with daily weather conditions and temperatures
- Automatically detect and display the user's current location weather information
- Responsive design for a seamless experience across different devices

## Installation

1. Clone the repository:

git clone https://github.com/Cladux/Weather-App

2. Navigate to the project directory:

cd Weather-app

3. Install dependencies:

npm install

## Usage

1. Obtain an API key from OpenWeatherMap by signing up at [https://home.openweathermap.org/users/sign_up](https://home.openweathermap.org/users/sign_up).

2. Create a .env file in the project root directory.

3. Add the following line to the .env file, replacing YOUR_API_KEY with your actual API key:

VITE_REACT_API_KEY=YOUR_API_KEY

4. Start the development server:

npm run dev

5. Open your browser and visit [http://localhost:3000] to view the application.

## Deployment

To build the application for production, run the following command:

npm run build

This will generate an optimized and minified version of the application in the dist directory. You can then deploy the contents of this directory to your preferred hosting platform.

## Credits

This project was created by [Cladux]. It uses the following technologies and libraries:

- React: [https://reactjs.org/](https://reactjs.org/)
- Vite: [https://vitejs.dev/](https://vitejs.dev/)
- OpenWeatherMap API: [https://openweathermap.org/api](https://openweathermap.org/api)
