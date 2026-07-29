import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface HeroStat {
  number: string;
  label: string;
}

interface KeyNumber {
  icon: string;
  count: string;
  label: string;
}

interface CardItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-opportunites-affaires-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './opportunites-affaires-page.component.html',
  styleUrl: './opportunites-affaires-page.component.scss',
})
export class OpportunitesAffairesPageComponent {
  readonly bannerStats: HeroStat[] = [
    { number: '1.5M+', label: 'Habitants' },
    { number: '2', label: 'Zones industrielles' },
    { number: '32', label: 'Quartiers' },
  ];

  readonly keyNumbers: KeyNumber[] = [
    { icon: 'fa-users', count: '1,57M', label: 'Habitants (RGPH 2021)' },
    { icon: 'fa-ruler-combined', count: '153 km²', label: 'Superficie communale' },
    { icon: 'fa-industry', count: '2', label: 'Zones industrielles' },
    { icon: 'fa-water', count: '1', label: 'Façade sur la lagune Ébrié' },
  ];

  readonly atouts: CardItem[] = [
    { icon: 'fa-map-marked-alt', title: 'Position stratégique', description: "Riveraine de la lagune Ébrié et voisine de la forêt classée du Banco, à proximité de l'extension prévue du Port Autonome d'Abidjan." },
    { icon: 'fa-people-group', title: 'Poids démographique', description: 'Premier bassin de population et de consommation de Côte d’Ivoire, avec une population jeune et une forte densité urbaine.' },
    { icon: 'fa-industry', title: 'Tissu industriel', description: 'Deux zones industrielles historiques accueillant unités de production, entrepôts logistiques et PME locales.' },
    { icon: 'fa-road', title: 'Connectivité urbaine', description: 'Desservie par de grands axes comme le Boulevard de la Solidarité, reliant la commune au Plateau et au reste du district.' },
    { icon: 'fa-music', title: 'Vie culturelle et nocturne', description: 'Réputée « Yop City », la commune est un haut lieu des maquis et de la scène musicale populaire ivoirienne.' },
    { icon: 'fa-building', title: 'Réserves foncières', description: "Des disponibilités foncières pour accompagner les projets d'aménagement, de logement et d'équipements publics." },
    { icon: 'fa-store', title: 'Marchés dynamiques', description: "Un réseau dense de marchés de quartier qui irrigue le commerce de proximité et l'économie informelle locale." },
    { icon: 'fa-graduation-cap', title: 'Jeunesse et savoir-faire', description: 'Une jeunesse nombreuse, formée dans les établissements scolaires et centres de formation de la commune.' },
  ];

  readonly secteurs: CardItem[] = [
    { icon: 'fa-cart-shopping', title: 'Commerce & Marchés', description: 'Modernisation des marchés de quartier et développement de nouvelles zones commerciales de proximité.' },
    { icon: 'fa-truck-ramp-box', title: 'Industrie & Logistique', description: 'Extension et modernisation des zones industrielles, entrepôts et plateformes logistiques liées au port.' },
    { icon: 'fa-city', title: 'Immobilier & BTP', description: 'Programmes de logements sociaux et résidentiels, en écho aux cités Sicogi et Sogefiha déjà implantées.' },
    { icon: 'fa-champagne-glasses', title: 'Tourisme urbain & Vie nocturne', description: 'Valorisation des maquis, restaurants et lieux culturels qui font la réputation festive de « Yop City ».' },
    { icon: 'fa-futbol', title: 'Sport, Jeunesse & Loisirs', description: "Développement d'infrastructures sportives et d'espaces de loisirs au bénéfice d'une population jeune." },
    { icon: 'fa-laptop-code', title: 'Économie numérique & Services', description: "Émergence de services numériques et d'espaces de coworking au service des entrepreneurs locaux." },
  ];

  readonly videoHighlights: string[] = [
    "Vue d'ensemble de la commune",
    'Zones industrielles et marchés',
    'Vie culturelle et nocturne',
    "Projets d'aménagement en cours",
  ];
}
