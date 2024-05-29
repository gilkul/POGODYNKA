# POGODYNKA

POGODYNKA is an Angular weather web app (SPA) based on the free versions of 4 APIs from Weatherbit.io and Google Geocoding API. The user can either look up a location through the search bar or use geolocation. POGODYNKA uses custom weather icons designed by Bas Milius. Currently available only in Polish. This is a non-commercial, front end focused project that demonstrates the knowledge of the usage of APIs and Angular. 

### 🔆 POGODYNKA lets you:
- check the current weather 
- check the weather forecast for the next 16 days
- check the current air quality
- check for any weather alerts
- check the weather map visualization (currently provided by Windy)


## ⭐ Main technologies used:
- Angular
- TypeScript
- Node.js
- HTML
- SCSS
- RXJS


### 🐥 APIs used:
- Weatherbit.io APIs (https://www.weatherbit.io/)
  - Air Quality API
  - Severe Weather Alerts API
  - Forecast API
  - Current Weather API  
- Google Geocoding API (https://developers.google.com/maps/documentation/geocoding)


### 🐣 Other resources used:
- Windy Widget (https://www.windy.com)
- Meteocons by Bas Milius (https://bas.dev/work/meteocons)


## 💡 Future plans for updates:
- Replacement of the Windy Widget - switching to a map with weather layers.
- Other language versions
- Implementation of a language translation API for weather alerts (currently displayed in the language of the location that has been searched up)


## 📥 How to install and run the project:
- This project was generated with Angular CLI version 17.1.0.

1. Clone the repository: git clone <link>
2. Install all dependencies: npm i
3. Run the project and open the dev server in the browser, using Angular CLI: ng serve --open
