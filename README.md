# WeatherAPI PWA

Ce projet a pour but de consulter la météo actuelle des grandes villes du monde (ex: Paris, Madrid, Pékin etc..).

## Développé avec
- [Angular](https://angular.dev/)
- [Weather API](https://www.weatherapi.com/) 
- [SASS](https://sass-lang.com/)

Il a été généré en utilisant [Angular CLI](https://github.com/angular/angular-cli) (version 19.0.7).

## Conversion en PWA

Pour passer d'une application web à une PWA (progressive web app), j'ai utilisé [@angular/pwa](https://www.npmjs.com/package/@angular/pwa) afin d'automatiser la conversion.
Elle a permis d'automatiser : 
- création du fichier manifest.webmanifest & ngsw-config.json
- création des icons (par défaut le logo d'Angular)
- update des fichiers angular.json & package.json (ajout de @angular/service-worker)
- update du fichier app.config.ts (configuration du service worker)
- update du fichier index.html (ajout balises pour la définition du thème et lien vers le manifest)

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

Pour éviter que la page d'accueil affiche une erreur 404, il faut : 
- générer le dossier docs (grâce à ng build)
- copier coller le contenu de docs/browser dans le dossier docs afin que GitHub Pages puisse identifier le index.html
- push les modifications sur sa branche et choisir celle-ci lors de la configuration du déploiement (voir dans l'onglet Settings du repos du projet)

### Liens utiles
- [Héberger une app Angular sur GitHub Pages](https://www.gaetanrouzies.com/github-pages-angular) 
