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

interface PracticalCard {
  icon: string;
  title: string;
  description: string;
  badgeIcon: string;
  badgeLabel: string;
}

@Component({
  selector: 'app-tourisme-et-loisirs-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './tourisme-et-loisirs-page.component.html',
  styleUrl: './tourisme-et-loisirs-page.component.scss',
})
export class TourismeEtLoisirsPageComponent {
  readonly numberStats: NumberStat[] = [
    { icon: 'fa-map-marked-alt', count: '10+', label: 'Sites et lieux à découvrir' },
    { icon: 'fa-tree', count: '1', label: 'Forêt classée à proximité' },
    { icon: 'fa-utensils', count: '200+', label: 'Maquis et restaurants' },
    { icon: 'fa-water', count: '7 km', label: 'De berges le long de la lagune' },
  ];

  readonly aboutFeatures: FeatureItem[] = [
    { icon: 'fa-tree', label: 'Forêt du Banco' },
    { icon: 'fa-water', label: 'Lagune Ébrié' },
    { icon: 'fa-shopping-basket', label: 'Marché de Yopougon' },
    { icon: 'fa-music', label: 'Rue Princesse' },
    { icon: 'fa-utensils', label: 'Maquis & gastronomie' },
    { icon: 'fa-shopping-bag', label: 'Centre commercial Cosmos' },
  ];

  readonly siteCards: InfraCard[] = [
    { image: 'assets/images/tourisme-loisir/banco.jpg', title: 'Forêt Classée du Banco', description: "Poumon vert d'Abidjan aux portes de Yopougon : sentiers de randonnée, faune et flore préservées, idéal pour une sortie nature en famille.", meta: 'Limite Yopougon / Attécoubé' },
    { image: 'assets/images/tourisme-loisir/berge.jpg', title: 'Berges de la Lagune Ébrié', description: 'Promenade aménagée en bord de lagune, prisée pour les balades, la pêche et les moments de détente en fin de journée.', meta: 'Yopougon Bord-Lagune' },
    { image: 'assets/images/tourisme-loisir/marche.jpg', title: 'Marché de Yopougon (Marché Gouro)', description: "L'un des plus grands marchés d'Abidjan : produits locaux, tissus, artisanat et ambiance commerçante authentique.", meta: 'Yopougon Sicogi' },
    { image: 'assets/images/tourisme-loisir/rue-princesse.jpg', title: 'Rue Princesse', description: "Célèbre artère de la vie nocturne abidjanaise, entre maquis, concerts live et ambiance festive jusqu'au bout de la nuit.", meta: 'Yopougon Wassakara' },
    { image: 'assets/images/tourisme-loisir/cosmos-2.jpg', title: 'Centre Commercial Cosmos', description: "Espace de shopping, restauration et loisirs en famille, l'une des références commerciales de la commune.", meta: 'Yopougon Selmer' },
    { image: 'assets/images/tourisme-loisir/esplanade.jpg', title: 'Esplanade de la Mairie', description: 'Lieu de vie central de la commune, cadre des grands événements publics, cérémonies et animations populaires.', meta: 'Yopougon Centre' },
  ];

  readonly loisirCards: InfraCard[] = [
    { image: 'assets/images/tourisme-loisir/sortie-detente.jpg', title: 'Maquis et Gastronomie Locale', description: 'Attiéké-poisson, garba, alloco : Yopougon est une référence de la restauration populaire ivoirienne, à savourer entre amis.', meta: 'Dans tous les quartiers' },
    { image: 'assets/images/tourisme-loisir/espace-vert.jpg', title: 'Espaces Verts et Aires de Jeux', description: 'Jardins publics et aires de jeux aménagés pour les familles, propices aux pique-niques et sorties du week-end.', meta: 'Plusieurs quartiers' },
    { image: 'assets/images/tourisme-loisir/banco-promenade.jpg', title: 'Circuits de Promenade', description: 'Itinéraires piétons aménagés le long de la lagune et aux abords de la Forêt du Banco pour la marche et le jogging.', meta: 'Bord-Lagune / Banco' },
    { image: 'assets/images/tourisme-loisir/nautique.jpg', title: 'Activités Nautiques', description: 'Sorties en pirogue et pêche traditionnelle sur la lagune Ébrié, encadrées par les communautés riveraines.', meta: 'Lagune Ébrié' },
    { image: 'assets/images/tourisme-loisir/cinema.jpg', title: 'Cinéma et Espaces Culturels', description: 'Salles de projection et séances de ciné-plein-air pour des soirées en famille ou entre amis.', meta: 'Centre-ville et Cosmos' },
    { image: 'assets/images/tourisme-loisir/bar.jpg', title: 'Vie Nocturne', description: "Bars, night-clubs et concerts live font de Yopougon l'une des communes les plus festives d'Abidjan.", meta: 'Rue Princesse et alentours' },
  ];

  readonly eventCards: EventCard[] = [
    { day: '08', month: 'Sept.', title: 'Festival Gastronomique des Maquis', description: 'Dégustations et concours culinaires autour des spécialités emblématiques de la commune.', location: 'Esplanade de la Mairie' },
    { day: '21', month: 'Sept.', title: 'Balade Découverte de la Forêt du Banco', description: 'Randonnée guidée en famille à travers la forêt classée, ouverte à tous les âges.', location: 'Forêt du Banco' },
    { day: '10', month: 'Oct.', title: 'Journée de la Propreté et des Espaces Verts', description: "Grande opération citoyenne d'embellissement des berges et espaces publics de la commune.", location: 'Berges de la Lagune' },
    { day: '25', month: 'Oct.', title: 'Nuit de Yopougon', description: 'Grande soirée festive avec concerts live sur la Rue Princesse et ses environs.', location: 'Rue Princesse' },
    { day: '08', month: 'Nov.', title: "Marché des Saveurs et de l'Artisanat", description: "Exposition-vente de produits locaux, artisanat et spécialités culinaires de la commune.", location: 'Marché de Yopougon' },
    { day: '22', month: 'Nov.', title: 'Sortie Découverte en Pirogue', description: 'Balade nautique organisée sur la lagune Ébrié à la rencontre des communautés riveraines.', location: 'Lagune Ébrié' },
  ];

  readonly galerieItems: GalerieItem[] = [
    { image: 'assets/images/tourisme-loisir/banco-promenade.jpg', alt: 'Forêt Classée du Banco', label: 'Forêt Classée du Banco' },
    { image: 'assets/images/tourisme-loisir/berge-lagune.jpg', alt: 'Berges de la Lagune Ébrié', label: 'Berges de la Lagune Ébrié' },
    { image: 'assets/images/tourisme-loisir/marche-yop.jpeg', alt: 'Marché de Yopougon', label: 'Marché de Yopougon' },
    { image: 'assets/images/tourisme-loisir/rue-princesse.jpg', alt: 'Ambiance Rue Princesse', label: 'Ambiance Rue Princesse' },
    { image: 'assets/images/tourisme-loisir/ambiance-maquis.jpg', alt: 'Ambiance dans les maquis', label: 'Ambiance dans les maquis' },
    { image: 'assets/images/tourisme-loisir/cosmos-2.jpg', alt: 'Centre commercial Cosmos', label: 'Centre commercial Cosmos' },
    { image: 'assets/images/tourisme-loisir/pirogue.jpg', alt: 'Sortie en pirogue sur la lagune', label: 'Sortie en pirogue sur la lagune' },
  ];

  readonly practicalCards: PracticalCard[] = [
    { icon: 'fa-bus', title: 'Se Déplacer', description: "Yopougon est accessible en bus, taxi ou véhicule personnel via l'autoroute du Nord et plusieurs axes reliant le centre d'Abidjan.", badgeIcon: 'fa-clock', badgeLabel: '20-30 min du Plateau' },
    { icon: 'fa-utensils', title: 'Où se Restaurer', description: 'Des maquis populaires aux restaurants du centre commercial Cosmos, toutes les envies culinaires trouvent leur bonheur.', badgeIcon: 'fa-leaf', badgeLabel: 'Cuisine locale' },
    { icon: 'fa-shield-alt', title: 'Sécurité et Bons Plans', description: 'La police municipale veille sur les sites touristiques et festifs. Privilégiez les sorties accompagnées en soirée sur la Rue Princesse.', badgeIcon: 'fa-info-circle', badgeLabel: 'Renseignez-vous à la mairie' },
  ];
}
