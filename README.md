# Mairie de Yopougon — Application Angular

Migration du site officiel de la Mairie de Yopougon (HTML/CSS/JS natif) vers Angular
(Standalone Components, Signals, nouveau Control Flow, PrimeNG).

## Installation

```bash
npm install
```

## Lancement en développement

```bash
ng serve
```

Puis ouvrir http://localhost:4200/

## Build de production

```bash
ng build --configuration production
```

## Images et assets

Ce script ne copie **aucune image**. Toutes les références du code pointent vers
`src/assets/images/NOM_IMAGE` en conservant exactement le nom, la casse et
l'extension d'origine (aucune image n'a été renommée ni inventée). Il faut copier
les images originales du site source dans :

```
src/assets/images/
├── logo-2.jpg
├── le-maire.png
├── mairie-facadeè-1.jpg
├── mairie-facade-2.jpg
├── mairie-facade-3.jpg
└── actualites/
    ├── 1.jpg
    ├── 2.jpg
    └── 3.jpg
```

**Note sur la section "Chiffres clés" (numbers) :** dans le CSS source
(`home.css`), l'image de fond de cette section est une URL externe
(`https://yop.eburtis.com/wp-content/uploads/2025/03/mairie1-1.jpg`), déjà
présente telle quelle dans le fichier d'origine. Elle a été conservée à l'identique
dans `accueil-page.component.scss` pour respecter le rendu visuel 1:1. Si vous
préférez l'héberger localement, ajoutez le fichier correspondant dans
`src/assets/images/` et mettez à jour la propriété `background-image` de ce
composant.

## Architecture

- `src/app/components/header` — top-bar + navigation multi-niveaux (desktop hover
  + accordéon mobile), pilotée par Signals.
- `src/app/components/footer` — pied de page institutionnel.
- `src/app/components/scroll-top` — bouton flottant de retour en haut de page.
- `src/app/components/page-en-construction` — page cible de toutes les routes de
  l'arborescence dont le contenu n'est pas encore converti.
- `src/app/components/accueil-page` — page d'accueil complète (hero, ticker,
  aperçu du Maire, actualités, demandes en ligne, chiffres clés, formulaire de
  contact).
- `src/app/models/nav-item.model.ts` — modèle typé de l'arborescence de
  navigation.
- `src/app/directives/fade-in.directive.ts` — directive partagée reproduisant
  l'animation d'apparition au scroll (IntersectionObserver) du site source.

## Routing

Toutes les routes de l'arborescence officielle du site sont définies dans
`src/app/app.routes.ts`. Les pages dont le HTML source n'a pas encore été
converti (ainsi que toute route inconnue) redirigent vers
`PageEnConstructionComponent`.
