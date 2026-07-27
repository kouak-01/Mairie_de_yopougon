import { Routes } from '@angular/router';
import { AccueilPageComponent } from './components/accueil-page/accueil-page.component';
import { MairePageComponent } from './components/maire-page/maire-page.component';
import { RadioPageComponent } from './components/radio-page/radio-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { YopMaCommunePageComponent } from './components/yop-ma-commune-page/yop-ma-commune-page.component';
import { PageEnConstructionComponent } from './components/page-en-construction/page-en-construction.component';

export const routes: Routes = [
  { path: '', component: AccueilPageComponent, title: 'Mairie de Yopougon - Site Officiel', data: { footerVariant: 'full' } },

  // Page "Le Maire" : dans le site source, cette page utilise un pied de page allégé
  // (footer.simple-footer) au lieu du footer institutionnel complet. On le signale
  // via les route data, lues par AppComponent pour choisir le variant du <app-footer>.
  { path: 'maire', component: MairePageComponent, title: 'Adama Bictogo - Maire de Yopougon', data: { footerVariant: 'simple' } },

  { path: 'radio', component: RadioPageComponent, title: 'Radio Yopougon 94.5 FM - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'contact', component: ContactPageComponent, title: 'Contact - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'yop-ma-commune', component: YopMaCommunePageComponent, title: 'Yop, Ma Commune - Mairie de Yopougon', data: { footerVariant: 'full' } },

  // Toute route de l'arborescence dont le HTML source n'a pas encore été converti
  // pointe vers ce composant générique, conformément à la stratégie de migration.
  { path: 'en-construction', component: PageEnConstructionComponent, title: 'Page en construction - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: '**', redirectTo: 'en-construction' },
];
