# WeatherAPI

Ce projet a pour but de consulter la météo actuelle des grandes villes du monde (ex: Paris, Madrid, Pékin etc..) en anglais.

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

Pour éviter que la page d'accueil affiche une erreur 404, il faut : 
- générer le dossier docs (grâce à ng build)
- copier coller le contenu de docs/browser dans le dossier docs afin que GitHub Pages puisse identifier le index.html
- push les modifications sur sa branche et choisir celle-ci lors de la configuration du déploiement (voir dans l'onglet Settings du repos du projet)

### Liens utiles
- [Héberger une app Angular sur GitHub Pages](https://www.gaetanrouzies.com/github-pages-angular) 
