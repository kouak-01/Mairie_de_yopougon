import { Routes } from '@angular/router';
import { AccueilPageComponent } from './components/accueil-page/accueil-page.component';
import { MairePageComponent } from './components/maire-page/maire-page.component';
import { RadioPageComponent } from './components/radio-page/radio-page.component';
import { RadioProgrammePageComponent } from './components/radio-programme-page/radio-programme-page.component';
import { RadioVacancesPageComponent } from './components/radio-vacances-page/radio-vacances-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ContactFormulairePageComponent } from './components/contact-formulaire-page/contact-formulaire-page.component';
import { ContactReseauxPageComponent } from './components/contact-reseaux-page/contact-reseaux-page.component';
import { ContactFaqPageComponent } from './components/contact-faq-page/contact-faq-page.component';
import { YopMaCommunePageComponent } from './components/yop-ma-commune-page/yop-ma-commune-page.component';
import { MunicipalitePageComponent } from './components/municipalite-page/municipalite-page.component';
import { SecretariatGeneralPageComponent } from './components/secretariat-general-page/secretariat-general-page.component';
import { ConseilMunicipalPageComponent } from './components/conseil-municipal-page/conseil-municipal-page.component';
import { CommissionsPageComponent } from './components/commissions-page/commissions-page.component';
import { DirectionsPageComponent } from './components/directions-page/directions-page.component';
import { ProjetsPageComponent } from './components/projets-page/projets-page.component';
import { AgendaPageComponent } from './components/agenda-page/agenda-page.component';
import { OpportunitesAffairesPageComponent } from './components/opportunites-affaires-page/opportunites-affaires-page.component';
import { ActualitesPageComponent } from './components/actualites-page/actualites-page.component';
import { HistoirePageComponent } from './components/histoire-page/histoire-page.component';
import { ProgrammeCompletPageComponent } from './components/programme-complet-page/programme-complet-page.component';
import { PageEnConstructionComponent } from './components/page-en-construction/page-en-construction.component';
import { GeographiePageComponent } from './components/geographie-page/geographie-page.component';
import { EconomiePageComponent } from './components/economie-page/economie-page.component';
import { GouvernanceParticipativePageComponent } from './components/gouvernance-participative-page/gouvernance-participative-page.component';
import { EmploiRecrutementPageComponent } from './components/emploi-recrutement-page/emploi-recrutement-page.component';
import { SportEtCulturePageComponent } from './components/sport-et-culture-page/sport-et-culture-page.component';
import { TourismeEtLoisirsPageComponent } from './components/tourisme-et-loisirs-page/tourisme-et-loisirs-page.component';
import { ActualiteDetailPageComponent } from './components/actualite-detail-page/actualite-detail-page.component';
import { SanteVivrePageComponent } from './components/vivre-sante-page/vivre-sante-page.component';
import { EducationVivrePageComponent } from './components/vivre-education-page/vivre-education-page.component';
import { TransportsVivrePageComponent } from './components/vivre-transports-page/vivre-transports-page.component';
import { EnvironnementVivrePageComponent } from './components/vivre-environnement-page/vivre-environnement-page.component';

export const routes: Routes = [
  { path: '', component: AccueilPageComponent, title: 'Mairie de Yopougon - Site Officiel', data: { footerVariant: 'full' } },

  // Page "Le Maire" : dans le site source, cette page utilise un pied de page allégé
  // (footer.simple-footer) au lieu du footer institutionnel complet. On le signale
  // via les route data, lues par AppComponent pour choisir le variant du <app-footer>.
  { path: 'maire', component: MairePageComponent, title: 'Adama Bictogo - Maire de Yopougon', data: { footerVariant: 'simple' } },

  { path: 'radio', component: RadioPageComponent, title: 'Radio Yopougon 96.8 FM - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'radio/programme', component: RadioProgrammePageComponent, title: 'Programme de la Radio Yopougon - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'radio/special-vacances', component: RadioVacancesPageComponent, title: 'Spécial Vacances - Radio Yopougon - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'contact', component: ContactPageComponent, title: 'Coordonnées et points d\'accès - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'contact/formulaire', component: ContactFormulairePageComponent, title: 'Formulaire de contact - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'contact/reseaux-sociaux', component: ContactReseauxPageComponent, title: 'Réseaux sociaux - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'contact/faq', component: ContactFaqPageComponent, title: 'FAQ - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'yop-ma-commune', component: YopMaCommunePageComponent, title: 'Yop, Ma Commune - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'municipalite', component: MunicipalitePageComponent, title: 'Municipalité - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'secretariat-general', component: SecretariatGeneralPageComponent, title: 'Secrétariat Général - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'conseil-municipal', component: ConseilMunicipalPageComponent, title: 'Le Conseil Municipal - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'commissions-conseil-municipal', component: CommissionsPageComponent, title: 'Commissions du Conseil Municipal - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'directions-techniques-administratives', component: DirectionsPageComponent, title: 'Directions Techniques et Administratives - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'nos-projets', component: ProjetsPageComponent, title: 'Nos Projets - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'agenda', component: AgendaPageComponent, title: 'Agenda - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'attractivite-commune', component: OpportunitesAffairesPageComponent, title: "Attractivité de la commune - Mairie de Yopougon", data: { footerVariant: 'full' } },

  { path: 'actualites', component: ActualitesPageComponent, title: 'Actualités - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'histoire', component: HistoirePageComponent, title: 'Histoire de la Commune - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'programme-complet', component: ProgrammeCompletPageComponent, title: 'Programme Complet - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'geographie', component: GeographiePageComponent, title: 'Géographie de la commune - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'economie', component: EconomiePageComponent, title: 'Économie de la commune - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'gouvernance-participative', component: GouvernanceParticipativePageComponent, title: 'Gouvernance Participative - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'emploi-recrutement', component: EmploiRecrutementPageComponent, title: 'Emploi et Recrutement - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'sport-et-culture', component: SportEtCulturePageComponent, title: 'Sport et Culture - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'tourisme-et-loisirs', component: TourismeEtLoisirsPageComponent, title: 'Tourisme et Loisirs - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'vivre-a-yopougon/sante', component: SanteVivrePageComponent, title: 'Santé à Yopougon - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'vivre-a-yopougon/education', component: EducationVivrePageComponent, title: 'Éducation à Yopougon - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'vivre-a-yopougon/transports', component: TransportsVivrePageComponent, title: 'Transports à Yopougon - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'vivre-a-yopougon/environnement', component: EnvironnementVivrePageComponent, title: 'Environnement à Yopougon - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: 'actualites/:id', component: ActualiteDetailPageComponent, title: 'Actualité - Mairie de Yopougon', data: { footerVariant: 'full' } },

  // Toute route de l'arborescence dont le HTML source n'a pas encore été converti
  // pointe vers ce composant générique, conformément à la stratégie de migration.
  { path: 'en-construction', component: PageEnConstructionComponent, title: 'Page en construction - Mairie de Yopougon', data: { footerVariant: 'full' } },

  { path: '**', redirectTo: 'en-construction' },
];
