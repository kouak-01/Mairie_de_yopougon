import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

interface TransportPoint {
  icon: string;
  text: string;
}

interface TransportCategory {
  id: string;
  label: string;
  icon: string;
  tagline: string;
  paragraphs: string[];
  points: TransportPoint[];
  illustration: string;
  illustrationAlt: string;
}

interface SotraLine {
  ligne: string;
  depart: string;
  arrivee: string;
}

interface StationCard {
  icon: string;
  name: string;
  quartier: string;
  description: string;
}

interface ProjectFact {
  icon: string;
  text: string;
}

interface ProjectCard {
  icon: string;
  title: string;
  tag: string;
  description: string;
  facts: ProjectFact[];
}

interface BannerStat {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
}

/**
 * Page "Transports" de la rubrique Vivre à Yopougon : réseau SOTRA, transport
 * informel (gbaka, wôrô-wôrô) et grands projets de mobilité (BRT, métro
 * d'Abidjan) qui concernent directement la commune.
 */
@Component({
  selector: 'app-vivre-transports-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, FadeInDirective, CountUpDirective],
  templateUrl: './vivre-transports-page.component.html',
  styleUrl: './vivre-transports-page.component.scss',
})
export class TransportsVivrePageComponent {
  readonly bannerStats: BannerStat[] = [
    { icon: 'fa-bus', value: 7, label: 'lignes SOTRA recensées vers Yopougon' },
    { icon: 'fa-route', value: 153, suffix: ' km²', label: "de territoire, la commune la plus étendue d'Abidjan" },
    { icon: 'fa-gauge-high', value: 65, suffix: ' %', label: "d'avancement du métro d'Abidjan (janvier 2026)" },
    { icon: 'fa-stopwatch', value: 45, suffix: ' min', label: 'visées entre Yopougon et Bingerville via le futur BRT' },
  ];

  readonly transportCategories: TransportCategory[] = [
    {
      id: 'sotra',
      label: 'Bus SOTRA',
      icon: 'fa-bus',
      tagline: 'Le réseau institutionnel',
      paragraphs: [
        "La SOTRA (Société des Transports Abidjanais) est l'opérateur historique du transport public collectif dans le Grand Abidjan. Son réseau de bus dessert Yopougon par plusieurs lignes qui relient les grands quartiers de la commune — Kouté, Niangon, Sideci, Cité Verte, la Zone Industrielle — aux gares terminales du Plateau, d'Adjamé (Gare Nord) et de Treichville (Gare Sud), ainsi qu'à la commune voisine d'Abobo.",
        "Le ticket s'achète à bord ou aux guichets des gares SOTRA, à tarif fixe quel que soit le trajet effectué sur la ligne. Le réseau évoluant régulièrement — de nouvelles lignes sont créées à mesure que la ville s'étend — mieux vaut toujours confirmer l'itinéraire affiché à l'arrêt ou sur sotra.ci avant un trajet important.",
      ],
      points: [
        { icon: 'fa-ticket', text: 'Tarif fixe à bord, indépendant de la distance parcourue sur la ligne' },
        { icon: 'fa-map-signs', text: "Itinéraires affichés aux points d'arrêt et consultables sur sotra.ci" },
        { icon: 'fa-building', text: 'Connexions directes vers Gare Sud, Gare Nord et le Plateau' },
      ],
      illustration: "https://commons.wikimedia.org/wiki/Special:FilePath/Un_bus_en_circulation_de_la_SOTRA_a_Abidjan.jpg",
      illustrationAlt: 'Bus SOTRA de la ligne 81 en circulation dans le Grand Abidjan',
    },
    {
      id: 'gbaka',
      label: 'Gbaka',
      icon: 'fa-van-shuttle',
      tagline: 'Le minibus du quotidien',
      paragraphs: [
        "Le gbaka est un minibus privé de 18 à 22 places (Mercedes, Isuzu, Mazda...) qui complète le réseau SOTRA sur des itinéraires semi-fixes, souvent plus denses et plus fréquents. À Yopougon comme ailleurs à Abidjan, on l'arrête et on le quitte à la volée : un « apprenti » posté à la porte coulissante annonce la destination et fait descendre les passagers en cours de route.",
        "Le tarif se paie en espèces auprès de l'apprenti, à la course. Les gbaka sont regroupés par des syndicats de transporteurs qui organisent le stationnement dans des gares informelles, en général proches des grands carrefours et des marchés de la commune.",
      ],
      points: [
        { icon: 'fa-users', text: '18 à 22 places, embarquement et arrêt à la demande' },
        { icon: 'fa-hand', text: 'On hèle le véhicule sur la voie : pas de station fixe obligatoire' },
        { icon: 'fa-money-bill-wave', text: "Paiement en espèces à l'apprenti, tarif fixé par trajet" },
      ],
      illustration: "https://commons.wikimedia.org/wiki/Special:FilePath/Gbaka_%C3%A0_Abidjan_en_C%C3%B4te_d'Ivoire.jpg",
      illustrationAlt: "Gbaka en circulation à Abidjan, avec l'apprenti posté à la porte",
    },
    {
      id: 'taxi',
      label: 'Wôrô-wôrô',
      icon: 'fa-taxi',
      tagline: 'Le taxi communal partagé',
      paragraphs: [
        "Le wôrô-wôrô est un taxi partagé, généralement 4 à 6 places, qui circule sur un itinéraire fixe à l'intérieur d'une même commune — d'où son autre nom de « taxi communal ». Il se distingue du taxi compteur, réservable pour une course individuelle n'importe où dans le Grand Abidjan et généralement plus onéreux.",
        "À Yopougon, des stations de wôrô-wôrô se sont formées autour des grands carrefours et marchés de la commune — par exemple à Sicogi, à l'angle du CEG William Ponty. Le tarif par passager est fixe sur un trajet donné et se négocie rarement une fois la place prise.",
      ],
      points: [
        { icon: 'fa-route', text: 'Itinéraire fixe à l\'intérieur de la commune, tarif fixe par passager' },
        { icon: 'fa-map-marker-alt', text: 'Stations informelles proches des marchés et des grands carrefours' },
        { icon: 'fa-taxi', text: 'À distinguer du taxi compteur, réservable pour une course individuelle' },
      ],
      illustration: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taxi-Abidjan.JPG',
      illustrationAlt: 'Taxi à Abidjan',
    },
  ];

  readonly activeCategoryId = signal(this.transportCategories[0].id);

  readonly activeCategory = computed(
    () => this.transportCategories.find((category) => category.id === this.activeCategoryId()) ?? this.transportCategories[0]
  );

  selectCategory(id: string): void {
    this.activeCategoryId.set(id);
  }

  readonly sotraLines: SotraLine[] = [
    { ligne: '27', depart: 'Gare Sud (Treichville)', arrivee: 'Yopougon Niangon Sud' },
    { ligne: '30', depart: 'Gare Sud (Treichville)', arrivee: 'Yopougon Kouté' },
    { ligne: '37', depart: 'Yopougon Camp Militaire', arrivee: 'Gare Sud (Treichville)' },
    { ligne: '43', depart: 'Gare Nord (Adjamé)', arrivee: 'Yopougon Kouté' },
    { ligne: '44', depart: 'Abobo Doumé', arrivee: 'Yopougon Cité Verte' },
    { ligne: '46', depart: 'Cité Administrative (Plateau)', arrivee: 'Yopougon Sideci' },
    { ligne: '77', depart: 'Zone Industrielle (Yopougon)', arrivee: "Abobo Gendarmerie (via N'Dotré)" },
  ];

  readonly stationCards: StationCard[] = [
    {
      icon: 'fa-map-pin',
      name: 'Yopougon-Sicogi',
      quartier: 'Sicogi',
      description: "Station de wôrô-wôrô repérée à l'angle du CEG William Ponty, point de correspondance vers plusieurs quartiers de la commune.",
    },
    {
      icon: 'fa-map-pin',
      name: 'Yopougon-Siporex',
      quartier: 'Siporex',
      description: 'Gare de gbaka proche de la pharmacie de Siporex, avec des liaisons régulières vers Gesco et les communes voisines.',
    },
    {
      icon: 'fa-map-pin',
      name: 'Yopougon-Gesco',
      quartier: 'Gesco',
      description: "Carrefour multimodal reliant Adjamé-Agban et la Zone Industrielle ; plusieurs lignes de gbaka et de bus SOTRA y ont leur terminus.",
    },
  ];

  readonly projectCards: ProjectCard[] = [
    {
      icon: 'fa-route',
      title: 'BRT Yopougon-Bingerville',
      tag: 'Chantier lancé en 2024',
      description:
        "Officiellement lancé le 10 juillet 2024, le Bus Rapid Transit (BRT) reliera Yopougon à Bingerville en traversant Adjamé et Cocody, en deux sections : Yopougon–Adjamé, puis Adjamé–Cocody–Bingerville. Objectif affiché par les autorités : parcourir les deux extrémités de la ligne en 45 minutes.",
      facts: [
        { icon: 'fa-coins', text: 'Budget estimé entre 197,5 et 242 milliards FCFA selon les phases, financé notamment par la Banque mondiale et l\'AFD' },
        { icon: 'fa-users', text: "Capacité visée : 400 000 à 500 000 usagers par jour sur l'ensemble du réseau BRT" },
        { icon: 'fa-briefcase', text: 'Environ 500 emplois directs annoncés pendant la phase de construction' },
      ],
    },
    {
      icon: 'fa-train-subway',
      title: "Métro d'Abidjan — Ligne 1",
      tag: 'Livraison visée fin 2028',
      description:
        "La Ligne 1 du métro d'Abidjan ne traverse pas le cœur de Yopougon, mais la commune héberge une pièce clé du projet : le dépôt de Sagbé, l'un de ses quartiers, où sont installés les équipements d'électrification de la ligne. Celle-ci reliera à terme Anyama à Port-Bouët via Abobo, Adjamé, le Plateau et Treichville.",
      facts: [
        { icon: 'fa-gauge-high', text: "Chantier exécuté à 65 % en janvier 2026, selon le ministère des Transports" },
        { icon: 'fa-train', text: '18 stations et 21 ponts-rails prévus sur l\'ensemble de la ligne' },
        { icon: 'fa-calendar', text: 'Livraison de la Ligne 1 annoncée pour la fin de l\'année 2028' },
      ],
    },
  ];
}
