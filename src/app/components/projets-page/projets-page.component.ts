import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface BannerStat {
  number: string;
  label: string;
}

interface FilterTab {
  key: string;
  icon: string;
  label: string;
}

type ProjectStatus = 'en-cours' | 'termine' | 'planifie';

interface ProjectItem {
  image: string;
  category: string;
  filterKey: string;
  status: ProjectStatus;
  statusLabel: string;
  title: string;
  description: string;
  progress: number;
  period: string;
  location: string;
}

interface FeaturedFact {
  number: string;
  label: string;
}

interface VideoThumb {
  image: string;
  title: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-projets-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './projets-page.component.html',
  styleUrl: './projets-page.component.scss',
})
export class ProjetsPageComponent {
  readonly bannerStats: BannerStat[] = [
    { number: '18', label: 'Projets en cours' },
    { number: '32', label: 'Quartiers concernés' },
    { number: '2026-2030', label: 'Horizon du plan' },
  ];

  readonly filterTabs: FilterTab[] = [
    { key: 'all', icon: 'fa-th-large', label: 'Tous' },
    { key: 'voirie', icon: 'fa-road', label: 'Voirie & Mobilité' },
    { key: 'education', icon: 'fa-graduation-cap', label: 'Éducation' },
    { key: 'sante', icon: 'fa-heartbeat', label: 'Santé' },
    { key: 'marches', icon: 'fa-store', label: 'Marchés & Économie' },
    { key: 'environnement', icon: 'fa-leaf', label: 'Environnement' },
    { key: 'sport', icon: 'fa-futbol', label: 'Sport & Jeunesse' },
    { key: 'numerique', icon: 'fa-laptop-code', label: 'Numérique' },
  ];

  readonly projects: ProjectItem[] = [
    {
      image: 'assets/images/yopougon/construction-stand.jpg',
      category: 'Voirie & Mobilité',
      filterKey: 'voirie',
      status: 'en-cours',
      statusLabel: 'En cours',
      title: 'BRT Yopougon – Bingerville, phase Boulevard Principal',
      description: "Aménagement d'un couloir de bus à haut niveau de service sur environ 20 km, avec voies dédiées, stations modernes et billettique intégrée, pour réduire les temps de trajet entre Yopougon et le centre d'affaires.",
      progress: 45,
      period: '2024 - 2027',
      location: 'Boulevard Principal',
    },
    {
      image: 'assets/images/marche-yopougon.jpg',
      category: 'Marchés & Économie',
      filterKey: 'marches',
      status: 'en-cours',
      statusLabel: 'En cours',
      title: 'Modernisation des marchés de quartier',
      description: 'Réhabilitation progressive des marchés (hangars, canalisations, éclairage, sécurité incendie) et création de nouveaux espaces marchands pour soutenir les commerçantes et commerçants de la commune.',
      progress: 60,
      period: '2025 - 2026',
      location: 'Plusieurs quartiers',
    },
    {
      image: 'assets/images/culture-civ.jpg',
      category: 'Éducation',
      filterKey: 'education',
      status: 'en-cours',
      statusLabel: 'En cours',
      title: "Réhabilitation et construction d'écoles publiques",
      description: "Réfection de salles de classe, construction de nouveaux groupes scolaires, blocs sanitaires et cantines pour améliorer les conditions d'apprentissage dans les établissements primaires de la commune.",
      progress: 55,
      period: '2025 - 2027',
      location: '12 quartiers',
    },
    {
      image: 'assets/images/yopougon/inspection.jpg',
      category: 'Santé',
      filterKey: 'sante',
      status: 'planifie',
      statusLabel: 'Planifié',
      title: 'Extension des centres de santé communautaires',
      description: 'Construction de nouvelles unités de soins de proximité et équipement de la maternité municipale afin de rapprocher les services de santé essentiels des familles yopougonnaises.',
      progress: 20,
      period: '2026 - 2028',
      location: 'Niangon, Toits Rouges',
    },
    {
      image: 'assets/images/abidjan-vert.jpg',
      category: 'Environnement',
      filterKey: 'environnement',
      status: 'en-cours',
      statusLabel: 'En cours',
      title: 'Assainissement et espaces verts communautaires',
      description: "Curage des caniveaux, lutte contre les inondations, gestion des déchets et aménagement de jardins publics et d'aires de repos pour verdir durablement le cadre de vie.",
      progress: 38,
      period: '2025 - 2027',
      location: 'Toute la commune',
    },
    {
      image: 'assets/images/yopougon/transformation.jpg',
      category: 'Sport & Jeunesse',
      filterKey: 'sport',
      status: 'planifie',
      statusLabel: 'Planifié',
      title: 'Complexes sportifs et espaces jeunesse de proximité',
      description: "Réhabilitation des terrains de quartier et création de nouveaux plateaux sportifs multidisciplinaires pour favoriser l'insertion des jeunes par le sport et la culture.",
      progress: 15,
      period: '2026 - 2028',
      location: 'Yao Sehi, Andokoi',
    },
    {
      image: 'assets/images/yopougon/cosmos.jpg',
      category: 'Numérique',
      filterKey: 'numerique',
      status: 'termine',
      statusLabel: 'Livré',
      title: 'Maison des Jeunes et des Savoirs',
      description: "Médiathèque, salle multimédia, incubateur d'entreprises et salles de formation : un nouvel espace dédié à l'éducation numérique, à la culture et à l'entrepreneuriat des jeunes Yopougonnais.",
      progress: 100,
      period: 'Livré en 2025',
      location: 'Centre-ville',
    },
    {
      image: 'assets/images/abidjan-skyline.jpg',
      category: 'Voirie & Mobilité',
      filterKey: 'voirie',
      status: 'en-cours',
      statusLabel: 'En cours',
      title: 'Bitumage des voies secondaires et éclairage public',
      description: "Programme de réhabilitation des voies de desserte des quartiers périphériques, associé à l'extension de l'éclairage public solaire pour renforcer la sécurité de nuit.",
      progress: 50,
      period: '2024 - 2026',
      location: 'Quartiers périphériques',
    },
    {
      image: 'assets/images/mairie-yopougon-2.jpg',
      category: 'Environnement',
      filterKey: 'environnement',
      status: 'en-cours',
      statusLabel: 'En cours',
      title: "Extension du réseau d'eau potable",
      description: "Renforcement du maillage de distribution d'eau potable et raccordement de nouveaux foyers dans les zones d'extension de la commune, en lien avec les projets d'urbanisme en cours.",
      progress: 42,
      period: '2025 - 2027',
      location: "Zones d'extension",
    },
  ];

  readonly featuredFacts: FeaturedFact[] = [
    { number: '1,4 km', label: "Longueur de l'ouvrage" },
    { number: '8 voies', label: 'Capacité de circulation' },
    { number: '2024', label: 'Mise en service' },
  ];

  readonly videoThumbs: VideoThumb[] = [
    { image: 'assets/images/yopougon/construction-stand.jpg', title: 'Chantiers de voirie : où en sommes-nous ?' },
    { image: 'assets/images/marche-yopougon.jpg', title: 'Nos marchés se modernisent' },
    { image: 'assets/images/culture-civ.jpg', title: 'Des écoles rénovées pour nos enfants' },
  ];

  readonly timelineItems: TimelineItem[] = [
    { year: '2024', title: 'Mise en service du 4ᵉ pont', description: 'Ouverture à la circulation et au péage du pont reliant Yopougon au Plateau, à Attécoubé et à Adjamé.' },
    { year: '2024 - 2026', title: 'Lancement du BRT Yopougon - Bingerville', description: 'Démarrage des travaux du couloir de bus à haut niveau de service sur le Boulevard Principal.' },
    { year: '2025 - 2026', title: 'Modernisation des marchés et écoles', description: 'Réhabilitation des principaux marchés de quartier et des groupes scolaires publics prioritaires.' },
    { year: '2027', title: "Extension du réseau d'eau et d'assainissement", description: "Raccordement de nouveaux foyers et renforcement des ouvrages de lutte contre les inondations." },
    { year: '2028 - 2030', title: 'Yopougon, commune connectée', description: 'Déploiement des espaces sportifs de quartier et des services municipaux 100% numériques.' },
  ];

  readonly activeFilter = signal('all');

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? this.projects : this.projects.filter((p) => p.filterKey === filter);
  });

  setFilter(key: string): void {
    this.activeFilter.set(key);
  }
}
