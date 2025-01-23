# WeatherAPI (PWA)

Ce projet a pour but de consulter la météo actuelle des grandes villes du monde (ex: Paris, Madrid, Pékin etc..).

## PWA

C'est une PWA (Progressive Web App) donc il est possible de l'installer sur son téléphone.
Pour convertir une application web angular en une pwa, j'ai utilisé la dépendance [@angular/pwa](https://www.npmjs.com/package/@angular/pwa) afin d'automatiser : 
- la création des fichiers manifest.webmanifest
- la création du fichier ngsw-config.json pour le service-worker
- l'update du fichier app.config.ts (ajout configuration du service worker)
- l'update du fichier index.html (ajout du lien vers le manifest et une balise meta pour définir la couleur du thème)
- l'update du fichier angular.json
- l'ajout de la dépendance @angular/service-worker (package.json modifié)
- la création des icons (par défaut une icon du logo Angular)


## Développé avec
- [Angular](https://angular.dev/)
- [Weather API](https://www.weatherapi.com/) 
- [SASS](https://sass-lang.com/)

Il a été généré en utilisant [Angular CLI](https://github.com/angular/angular-cli) (version 19.0.7).

## Développement local

Pour visualiser le résultat de ce projet localement, veuillez executer les commandes suivantes dans le dossier du projet : 

```bash
cd weather-api # permet de se déplacer dans le dossier du projet
npm i # installe les dépendances nécessaires à l'execution du projet
ng serve # faire tourner le projet sur sa machine
```
Puis rendez vous sur  `http://localhost:4200/` afin de le visualiser.

## Hébergement

Le projet est consultable sans installation grâce à l'hébergement de celui-ci sur GitHub Pages.
Consultez le site à l'adresse suivante : https://mariaguyde.github.io/weather-api/
