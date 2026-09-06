# City Weather

This is a simple PWA to check the weather of a big city in the world

## Built with
- [Angular](https://angular.dev/) 
- [SASS](https://sass-lang.com/)
- [Weather API](https://www.weatherapi.com/)
- [Angular CLI](https://github.com/angular/angular-cli) (version 19.0.7)

## PWA Conversion

To convert the web application into a Progressive Web App (PWA), I used @angular/pwa to automate the conversion process

This automated the following tasks :

- Creation of the icons
- Creation of the manifest.webmanifest and ngsw-config.json files
- Updates to angular.json and package.json (including the addition of @angular/service-worker)
- Updates to app.config.ts (service worker configuration) and index.html

## Run it locally

Run the following commands in the folder of the project
```bash
npm i 
ng serve
```
Then go to  `http://localhost:4200/` and there you go

## Deployment

Check it out : https://mariaguyde.github.io/weather-api/

This project is hosted on Github Pages

To update the project, you have to make sure to : 

- delete the folder docs if it is already there
   ```bash
  rm -rf docs
  ```
- generate the folder docs
  ```bash
  ng build --base-href=/weather-api/
  ```
- if needed : copy/paste the content of docs/browser in docs (so GithHub Pages can detect the index.html file)
- push the changes and choose the right branch where you pushed it (check the tab Settings > pages of your repository)

