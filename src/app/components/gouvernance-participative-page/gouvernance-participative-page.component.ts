import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface FeatureItem {
  icon: string;
  label: string;
}

interface PilierCard {
  icon: string;
  title: string;
  description: string;
}

interface NumberStat {
  icon: string;
  count: string;
  label: string;
}

interface InstanceCard {
  image: string;
  alt: string;
  tag: string;
  title: string;
  description: string;
}

interface TimelineStep {
  title: string;
  description: string;
}

interface GalerieItem {
  image: string;
  alt: string;
  label: string;
}

interface EngagementCard {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  linkIcon: string;
  routerLink: string;
}

@Component({
  selector: 'app-gouvernance-participative-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './gouvernance-participative-page.component.html',
  styleUrl: './gouvernance-participative-page.component.scss',
})
export class GouvernanceParticipativePageComponent {
  readonly aboutFeatures: FeatureItem[] = [
    { icon: 'fa-users', label: 'Comités de quartier actifs' },
    { icon: 'fa-coins', label: 'Budget participatif annuel' },
    { icon: 'fa-comment-dots', label: 'Doléances en ligne' },
    { icon: 'fa-hands-helping', label: 'Partenariat société civile' },
  ];

  readonly pilierCards: PilierCard[] = [
    { icon: 'fa-users', title: 'Comités de développement de quartier', description: 'Des relais citoyens élus dans chacun des 32 quartiers pour faire remonter les besoins et suivre les projets communaux.' },
    { icon: 'fa-coins', title: 'Budget participatif communal', description: "Une part du budget d'investissement est proposée, débattue et votée chaque année par les habitants pour financer des projets de quartier." },
    { icon: 'fa-bullhorn', title: 'Consultations & assemblées de quartier', description: "Réunions publiques régulières animées par la municipalité pour informer, écouter et recueillir l'avis des populations sur les grands projets." },
    { icon: 'fa-comment-dots', title: 'Plateforme de doléances citoyennes', description: 'Un canal en ligne et physique pour signaler une difficulté, formuler une suggestion ou saisir directement les services municipaux.' },
    { icon: 'fa-child-reaching', title: 'Conseil communal des jeunes', description: "Une instance qui porte la voix de la jeunesse yopougonnaise dans les décisions relatives à l'éducation, au sport et à l'emploi des jeunes." },
    { icon: 'fa-venus', title: 'Conseil communal des femmes', description: 'Un espace dédié pour associer les femmes de Yopougon aux réflexions sur l\'entrepreneuriat, la solidarité et le cadre de vie.' },
    { icon: 'fa-shield-halved', title: 'Comités de veille citoyenne', description: 'Des groupes de proximité mobilisés sur la sécurité, la salubrité et le civisme, en lien direct avec les services techniques de la mairie.' },
    { icon: 'fa-handshake-angle', title: 'Partenariats société civile & ONG', description: 'Une collaboration continue avec les associations locales et les organisations partenaires pour renforcer la transparence et l\'inclusion.' },
  ];

  readonly numberStats: NumberStat[] = [
    { icon: 'fa-map-marked-alt', count: '32', label: "Quartiers dotés d'un comité" },
    { icon: 'fa-users', count: '500+', label: 'Relais citoyens mobilisés' },
    { icon: 'fa-comment-dots', count: '1 200+', label: 'Doléances traitées par an' },
    { icon: 'fa-coins', count: '37', label: 'Projets du plan triennal' },
  ];

  readonly videoHighlights = [
    { text: 'Projets proposés par quartier' },
    { text: 'Vote ouvert à tous les habitants' },
    { text: 'Suivi public des réalisations' },
    { text: 'Bilan annuel transparent' },
  ];

  readonly instanceCards: InstanceCard[] = [
    { image: 'assets/images/gouvernance/comite-quartier.jpg', alt: "Réunion d'un comité de quartier", tag: 'Proximité', title: 'Comités de développement de quartier', description: 'Composés d\'habitants volontaires, ils se réunissent chaque mois pour faire le point sur les priorités du quartier et interpeller la mairie sur les urgences locales.' },
    { image: 'assets/images/gouvernance/conseil-communal-jeune.jpg', alt: 'Session du conseil communal des jeunes', tag: 'Jeunesse', title: 'Conseil communal des jeunes', description: "Élus par leurs pairs, les conseillers-jeunes portent des projets concrets en matière de formation, d'insertion professionnelle, de sport et de culture." },
    { image: 'assets/images/gouvernance/conseil-communal-femmes.jpg', alt: 'Rencontre du conseil communal des femmes', tag: 'Solidarité', title: 'Conseil communal des femmes', description: "Un cadre d'échange pour accompagner l'entrepreneuriat féminin, la protection sociale et la participation des femmes aux instances de décision." },
    { image: 'assets/images/gouvernance/veille-citoyenne.jpg', alt: 'Comité de veille citoyenne en patrouille', tag: 'Sécurité & civisme', title: 'Comités de veille citoyenne', description: 'En lien avec les forces de sécurité et les services techniques, ces comités veillent à la salubrité, à la sécurité de proximité et au respect du bien commun.' },
  ];

  readonly timelineSteps: TimelineStep[] = [
    { title: 'Rejoignez le comité de votre quartier', description: 'Contactez le référent de votre quartier ou la Direction en charge de la vie associative pour intégrer le comité de développement local.' },
    { title: 'Déposez une doléance ou une idée de projet', description: 'Utilisez la plateforme en ligne ou le formulaire disponible en mairie pour signaler un besoin ou proposer un projet pour le budget participatif.' },
    { title: 'Participez aux assemblées de quartier', description: 'Assistez aux réunions publiques organisées régulièrement pour débattre des projets et poser vos questions aux élus et aux services techniques.' },
    { title: 'Votez et suivez la réalisation des projets', description: 'Prenez part au vote du budget participatif puis suivez, en toute transparence, l\'avancement des projets financés dans votre quartier.' },
  ];

  readonly galerieItems: GalerieItem[] = [
    { image: 'assets/images/gouvernance/assemblee-quartier.jpg', alt: 'Assemblée publique de quartier', label: 'Assemblée de quartier' },
    { image: 'assets/images/gouvernance/vote-citoyen.avif', alt: 'Vote du budget participatif', label: 'Vote citoyen' },
    { image: 'assets/images/gouvernance/conseil-communal-jeune.jpg', alt: 'Rencontre du conseil des jeunes', label: 'Conseil des jeunes' },
    { image: 'assets/images/gouvernance/veille-citoyenne.jpg', alt: 'Comité de veille citoyenne sur le terrain', label: 'Veille citoyenne' },
    { image: 'assets/images/gouvernance/conseil-communal-femmes.jpg', alt: 'Atelier avec le conseil des femmes', label: 'Conseil des femmes' },
    { image: 'assets/images/gouvernance/restitution.jpg', alt: "Restitution d'un projet participatif", label: 'Restitution de projet' },
    { image: 'assets/images/gouvernance/societe-civile.png', alt: 'Signature d\'un partenariat avec une ONG locale', label: 'Partenariat société civile' },
  ];

  readonly engagementCards: EngagementCard[] = [
    { icon: 'fa-comment-dots', title: 'Déposer une doléance', description: 'Signalez un problème ou une suggestion directement aux services de la mairie.', linkLabel: 'Contacter la mairie', linkIcon: 'fa-paper-plane', routerLink: '/contact' },
    { icon: 'fa-users', title: 'Rejoindre un comité', description: 'Devenez relais citoyen dans votre quartier et participez aux décisions locales.', linkLabel: "S'informer", linkIcon: 'fa-user-plus', routerLink: '/contact' },
    { icon: 'fa-sitemap', title: 'Découvrir la municipalité', description: 'En savoir plus sur le conseil municipal et l\'organisation de votre mairie.', linkLabel: 'Explorer', linkIcon: 'fa-arrow-right', routerLink: '/conseil-municipal' },
  ];
}
