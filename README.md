# POGODYNKA

POGODYNKA is a weather web app based on the free versions of 4 APIs from Weatherbit.io and Google Geocoding API. POGODYNKA uses custom weather icons designed by Bas Milius. Currently available only 
in Polish.

Functions of the app:
- check the current weather 
- check forecast for the next 16 days
- check the air quality
- check for any weather alerts
- check the weather map visualization (currently provided by Windy)

## 🛠️ Technologies used:
- Angular
- TypeScript
- RXJS
- Node.js
- HTML
- SCSS

## 📚 APIs used:
- Weatherbit.io APIs (https://www.weatherbit.io/)
  - Air Quality API
  - Severe Weather Alerts API
  - Forecast API
  - Current Weather API
    
- Google Geocoding API (https://developers.google.com/maps/documentation/geocoding)

## 📚 Other resources used:
- Windy Widget // soon to be replaced with responsive map with weather tiles
- Meteocons by Bas Milius (https://bas.dev/work/meteocons)

## Future plans for updates:
- Other language versions
- Translation for weather alerts (currently displayed in the language of the location that has been searched up)

## 📥 How to install and run the project:
- This project was generated with Angular CLI version 17.1.0.

1. Clone the repository: git clone <link>
2. Install all dependencies: npm i
3. Run the project and open the dev server in the browser, using Angular CLI: ng serve --open
