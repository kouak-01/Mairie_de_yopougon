import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface NumberStat {
  icon: string;
  count: string;
  label: string;
}

interface FeatureItem {
  icon: string;
  label: string;
}

interface InfraCard {
  image: string;
  title: string;
  description: string;
  metaIcon: string;
  meta: string;
}

interface EventCard {
  day: string;
  month: string;
  title: string;
  description: string;
  location: string;
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
}

@Component({
  selector: 'app-sport-et-culture-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './sport-et-culture-page.component.html',
  styleUrl: './sport-et-culture-page.component.scss',
})
export class SportEtCulturePageComponent {
  readonly numberStats: NumberStat[] = [
    { icon: 'fa-futbol', count: '12', label: 'Infrastructures sportives' },
    { icon: 'fa-users', count: '40+', label: 'Associations sportives et culturelles' },
    { icon: 'fa-calendar-star', count: '25', label: 'Événements organisés chaque année' },
    { icon: 'fa-child', count: '5 000+', label: 'Jeunes encadrés annuellement' },
  ];

  readonly aboutFeatures: FeatureItem[] = [
    { icon: 'fa-futbol', label: 'Stade municipal' },
    { icon: 'fa-swimmer', label: 'Piscine municipale' },
    { icon: 'fa-theater-masks', label: 'Maison de la Culture' },
    { icon: 'fa-book-open', label: 'Bibliothèque municipale' },
    { icon: 'fa-drum', label: 'Troupes traditionnelles' },
    { icon: 'fa-trophy', label: 'Tournois inter-quartiers' },
  ];

  readonly sportCards: InfraCard[] = [
    { image: 'assets/images/sport-culture/stade-municipal.jpg', title: 'Stade Municipal de Yopougon', description: "Terrain principal de football homologué, tribune couverte et piste d'athlétisme, accueillant matchs officiels et tournois de quartier.", metaIcon: 'fa-map-marker-alt', meta: 'Yopougon Sideci' },
    { image: 'assets/images/sport-culture/complexe.jpg', title: 'Complexe Omnisports', description: 'Terrains de basketball, handball et volleyball aménagés pour la pratique associative et scolaire, avec éclairage pour les soirées.', metaIcon: 'fa-map-marker-alt', meta: 'Yopougon Niangon' },
    { image: 'assets/images/sport-culture/gymnase.jpg', title: 'Gymnase Couvert', description: 'Salle polyvalente dédiée aux arts martiaux, à la gymnastique et à la musculation, ouverte aux clubs affiliés et aux écoles.', metaIcon: 'fa-map-marker-alt', meta: 'Yopougon Wassakara' },
    { image: 'assets/images/sport-culture/piscine-municipale.jpg', title: 'Piscine Municipale', description: "Bassin d'apprentissage et bassin sportif, cours de natation encadrés pour les enfants et créneaux libres pour les familles.", metaIcon: 'fa-map-marker-alt', meta: 'Yopougon Andokoi' },
    { image: 'assets/images/sport-culture/multisport.jpg', title: 'City-stades de Quartier', description: 'Terrains multisports de proximité répartis dans plusieurs quartiers pour favoriser une pratique sportive accessible à tous.', metaIcon: 'fa-map-marker-alt', meta: 'Plusieurs quartiers' },
    { image: 'assets/images/sport-culture/ecole-football.jpg', title: 'École Municipale de Football', description: 'Formation et détection des jeunes talents de 8 à 16 ans, encadrée par des éducateurs sportifs diplômés.', metaIcon: 'fa-map-marker-alt', meta: 'Stade Municipal' },
  ];

  readonly cultureCards: InfraCard[] = [
    { image: 'assets/images/sport-culture/maison-savoirs-culture.jpg', title: 'Maison de la Culture', description: "Espace de spectacles, d'expositions et de résidences artistiques ouvert aux troupes, artistes et associations culturelles locales.", metaIcon: 'fa-map-marker-alt', meta: 'Yopougon Centre' },
    { image: 'assets/images/sport-culture/bibliotheque.jpg', title: 'Bibliothèque Municipale', description: "Espace de lecture, salles d'étude et ateliers d'écriture pour les scolaires, étudiants et passionnés de littérature.", metaIcon: 'fa-map-marker-alt', meta: 'Yopougon Ficgayo' },
    { image: 'assets/images/sport-culture/festival-city-fete.jpg', title: 'Festival « Yop City en Fête »', description: 'Grand rendez-vous culturel annuel mêlant musique urbaine, danses traditionnelles et arts de rue dans les rues de la commune.', metaIcon: 'fa-calendar', meta: 'Chaque année en septembre' },
    { image: 'assets/images/sport-culture/percussion.jpg', title: 'Troupes de Danse et Percussions', description: 'Soutien aux troupes traditionnelles qui perpétuent les danses et rythmes ancestraux lors des cérémonies et festivités communales.', metaIcon: 'fa-users', meta: 'Plus de 15 troupes actives' },
    { image: 'assets/images/sport-culture/artisanat.jpg', title: "Artisanat et Métiers d'Art", description: 'Promotion des artisans locaux (sculpture, couture, bijouterie) à travers des salons et marchés d\'exposition-vente.', metaIcon: 'fa-map-marker-alt', meta: 'Marché artisanal de Yopougon' },
    { image: 'assets/images/sport-culture/cine-plein-air.jpg', title: 'Ciné-Plein-Air', description: "Projections gratuites en plein air les week-ends, mettant à l'honneur le cinéma ivoirien et africain.", metaIcon: 'fa-map-marker-alt', meta: 'Esplanade de la Mairie' },
  ];

  readonly eventCards: EventCard[] = [
    { day: '12', month: 'Sept.', title: 'Tournoi inter-quartiers de football', description: 'Compétition amicale réunissant les équipes des différents quartiers de la commune.', location: 'Stade Municipal de Yopougon' },
    { day: '20', month: 'Sept.', title: 'Festival « Yop City en Fête »', description: 'Musique, danse et arts de rue pour une grande fête populaire dans toute la commune.', location: 'Esplanade de la Mairie' },
    { day: '05', month: 'Oct.', title: 'Journée du Sport Scolaire', description: "Compétitions inter-écoles autour de l'athlétisme, du football et du basketball.", location: 'Complexe Omnisports' },
    { day: '18', month: 'Oct.', title: 'Nuit de la Percussion Traditionnelle', description: 'Soirée dédiée aux troupes de danse et de percussion de la commune.', location: 'Maison de la Culture' },
    { day: '02', month: 'Nov.', title: 'Tournoi de Basketball Féminin', description: 'Compétition dédiée à la promotion du sport féminin dans la commune.', location: 'Complexe Omnisports' },
    { day: '15', month: 'Nov.', title: "Salon de l'Artisanat Local", description: 'Exposition-vente valorisant le savoir-faire des artisans yopougonnais.', location: 'Marché Artisanal' },
  ];

  readonly galerieItems: GalerieItem[] = [
    { image: 'assets/images/sport-culture/match.jpg', alt: 'Match au Stade Municipal', label: 'Match au Stade Municipal' },
    { image: 'assets/images/sport-culture/basketball.jpg', alt: 'Entraînement de basketball', label: 'Entraînement de basketball' },
    { image: 'assets/images/sport-culture/festival-city.jpg', alt: 'Troupe de danse traditionnelle', label: 'Troupe de danse traditionnelle' },
    { image: 'assets/images/sport-culture/yop-en-fete.jpg', alt: 'Festival Yop City en Fête', label: 'Festival Yop City en Fête' },
    { image: 'assets/images/sport-culture/seance-bibliotheque.jpg', alt: 'Séance à la bibliothèque', label: 'Séance à la bibliothèque' },
    { image: 'assets/images/sport-culture/cours-natation.jpg', alt: 'Cours de natation', label: 'Cours de natation' },
    { image: 'assets/images/sport-culture/exposition-artisanat.jpg', alt: "Exposition d'artisanat local", label: "Exposition d'artisanat local" },
  ];

  readonly engagementCards: EngagementCard[] = [
    { icon: 'fa-futbol', title: 'Rejoindre un Club Sportif', description: "Inscrivez-vous ou inscrivez votre enfant dans l'un des clubs et écoles sportives municipales." },
    { icon: 'fa-theater-masks', title: 'Atelier Culturel', description: 'Découvrez les ateliers de danse, percussion et artisanat proposés par la Maison de la Culture.' },
    { icon: 'fa-calendar-check', title: 'Réserver une Infrastructure', description: 'Louez un terrain, une salle ou un espace pour vos événements sportifs et culturels.' },
  ];
}
