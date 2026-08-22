import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface NumberStat {
  icon: string;
  count: string;
  label: string;
}

interface LimiteCard {
  compass: string;
  title: string;
  description: string;
}

interface HighlightItem {
  icon: string;
  text: string;
}

interface GalerieItem {
  image: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-geographie-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './geographie-page.component.html',
  styleUrl: './geographie-page.component.scss',
})
export class GeographiePageComponent {
  readonly numberStats: NumberStat[] = [
    { icon: 'fa-ruler-combined', count: '153 km²', label: 'Superficie' },
    { icon: 'fa-users', count: '1,57 M', label: 'Habitants (RGPH 2021)' },
    { icon: 'fa-map-marked', count: '08', label: 'Quartiers principaux' },
    { icon: 'fa-water', count: '32', label: 'Sous-quartiers' },
  ];

  readonly limiteCards: LimiteCard[] = [
    { compass: 'N', title: 'Au Nord', description: "Communes d'Abobo et d'Anyama" },
    { compass: 'S', title: 'Au Sud', description: 'Lagune Ébrié' },
    { compass: 'E', title: "À l'Est", description: "Commune d'Attécoubé" },
    { compass: 'O', title: "À l'Ouest", description: 'Commune de Songon' },
  ];

  readonly quartiers: string[] = ['Kouté', 'Sideci', 'Sicogi', 'Niangon', 'Sagbé', 'Andokoi', 'Selmer', 'Wassakara'];

  readonly videoHighlights: HighlightItem[] = [
    { icon: 'fa-water', text: 'Façade lagunaire' },
    { icon: 'fa-road', text: 'Autoroute du Nord' },
    { icon: 'fa-industry', text: 'Zones industrielles' },
    { icon: 'fa-city', text: 'Tissu urbain dense' },
  ];

  readonly galerieItems: GalerieItem[] = [
    { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Abidjan_des_Lagune.jpg', alt: "La lagune Ébrié vue d'Abidjan", label: 'Lagune Ébrié' },
    { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Quartier_Yopougon_BAE.jpg', alt: 'Quartier de Yopougon', label: 'Quartier résidentiel' },
    { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lagune_Abidjan_3492.jpg', alt: 'Pirogue sur la lagune', label: 'Activités lagunaires' },
    { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pont_%C3%A0_p%C3%A9age_de_Yopougon_%C3%A0_Adjam%C3%A9.jpg', alt: 'Pont à péage reliant Yopougon à Adjamé', label: 'Pont à péage Yopougon-Adjamé' },
  ];
}
