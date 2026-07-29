import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface FilterOption {
  key: string;
  icon: string;
  label: string;
}

interface Article {
  image: string;
  category: string;
  filterKey: string;
  title: string;
  description: string;
  date: string;
}

interface AgendaItem {
  day: string;
  month: string;
  title: string;
  time: string;
}

interface VideoItem {
  poster: string;
  category: string;
  title: string;
  date: string;
  duration: string;
}

@Component({
  selector: 'app-actualites-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './actualites-page.component.html',
  styleUrl: './actualites-page.component.scss',
})
export class ActualitesPageComponent {
  readonly tickerItems: string[] = [
    'Inscription aux écoles municipales ouverte pour la rentrée 2026-2027',
    "Travaux d'assainissement dans le quartier Sicobois — Avancement à 75%",
    'Conseil municipal extraordinaire le 28 juillet 2026 à 10h',
    'Programme de vaccination gratuit au Centre de Santé de Niangon',
    'Fête de la commune : 15 août 2026 — Inscription aux stands dès maintenant',
    'Nouveau centre culturel de Yopougon inauguré — Ouverture au public le 1er août',
  ];

  readonly filterOptions: FilterOption[] = [
    { key: 'all', icon: 'fa-th-large', label: 'Toutes' },
    { key: 'developpement', icon: 'fa-hard-hat', label: 'Développement' },
    { key: 'social', icon: 'fa-hands-helping', label: 'Social' },
    { key: 'culture', icon: 'fa-masks-theater', label: 'Culture' },
    { key: 'sante', icon: 'fa-heartbeat', label: 'Santé' },
    { key: 'education', icon: 'fa-graduation-cap', label: 'Éducation' },
    { key: 'securite', icon: 'fa-shield-alt', label: 'Sécurité' },
  ];

  readonly featuredArticle: Article = {
    image: 'assets/images/actualites/1.jpg',
    category: 'developpement',
    filterKey: 'developpement',
    title: "J-20 : les chantiers s'accélèrent à Yopougon pour la fête de l'indépendance",
    description: "À vingt jours de la Fête de l'Indépendance, le Ministre des Infrastructures et de l'Entretien Routier a effectué une visite d'inspection des chantiers en cours dans la commune. Voiries, éclairage public et espaces verts font l'objet d'une remise à niveau accélérée avant les festivités du 7 août.",
    date: '15 Juillet 2026',
  };

  readonly articles: Article[] = [
    {
      image: 'assets/images/actualites/2.jpg',
      category: 'Mobilisation',
      filterKey: 'social',
      title: "Fête de l'Indépendance 2026 : le Député-Maire mobilise la presse",
      description: "À quelques semaines de la célébration de la 66ᵉ Fête de l'Indépendance qui se tiendra cette année à Yopougon, le Député-Maire a rencontré les professionnels des médias pour organiser la couverture de l'événement.",
      date: '08 Juillet 2026',
    },
    {
      image: 'assets/images/actualites/3.jpg',
      category: 'Inspection',
      filterKey: 'developpement',
      title: 'Visite de terrain du premier adjoint au maire',
      description: 'Le premier adjoint au maire s’est rendu à Siporex, Cosmos, Ficgayo et Selmer Tanti Mago pour constater l’avancée des travaux d’assainissement et de voirie dans ces quartiers.',
      date: '01 Juillet 2026',
    },
    {
      image: 'assets/images/actualites/1.jpg',
      category: 'Éducation',
      filterKey: 'education',
      title: 'Rentrée scolaire 2026-2027 : les inscriptions sont ouvertes',
      description: "La Mairie de Yopougon annonce l'ouverture des inscriptions dans les écoles municipales pour la prochaine année scolaire. Les familles peuvent déposer leur dossier dans les centres dédiés dès à présent.",
      date: '22 Juin 2026',
    },
    {
      image: 'assets/images/actualites/2.jpg',
      category: 'Santé',
      filterKey: 'sante',
      title: 'Campagne de vaccination gratuite au Centre de Santé de Niangon',
      description: "Dans le cadre de sa politique de santé publique, la commune organise une campagne de vaccination gratuite ouverte à tous les habitants, enfants comme adultes, jusqu'à la fin du mois.",
      date: '15 Juin 2026',
    },
    {
      image: 'assets/images/actualites/3.jpg',
      category: 'Culture',
      filterKey: 'culture',
      title: 'Le nouveau centre culturel de Yopougon inauguré',
      description: 'Un espace moderne dédié aux arts, à la musique et aux traditions locales ouvre ses portes au public dès le 1er août. Il accueillera notamment des ateliers pour les jeunes talents de la commune.',
      date: '05 Juin 2026',
    },
    {
      image: 'assets/images/actualites/1.jpg',
      category: 'Sécurité',
      filterKey: 'securite',
      title: 'Renforcement du dispositif de sécurité de proximité',
      description: "La municipalité, en lien avec les forces de l'ordre, annonce le déploiement de nouveaux points d'éclairage public et de patrouilles de proximité dans les quartiers les plus sensibles.",
      date: '28 Mai 2026',
    },
    {
      image: 'assets/images/actualites/2.jpg',
      category: 'Développement',
      filterKey: 'developpement',
      title: 'Réhabilitation du grand marché de Yopougon : les travaux avancent',
      description: 'Le chantier de rénovation du marché central se poursuit avec la réfection des allées, des sanitaires et des espaces de stockage, pour un environnement plus sain pour les commerçants et les clients.',
      date: '20 Mai 2026',
    },
    {
      image: 'assets/images/actualites/3.jpg',
      category: 'Salubrité',
      filterKey: 'social',
      title: 'Grande journée de salubrité : les habitants répondent présents',
      description: 'Plusieurs centaines de volontaires se sont mobilisés aux côtés des équipes municipales pour une opération de nettoyage des rues, caniveaux et espaces publics dans huit quartiers de la commune.',
      date: '12 Mai 2026',
    },
  ];

  readonly agendaItems: AgendaItem[] = [
    { day: '28', month: 'Juil.', title: 'Conseil municipal extraordinaire', time: '10h00 — Hôtel de ville' },
    { day: '01', month: 'Août', title: 'Ouverture du centre culturel', time: '09h00 — Quartier Sicobois' },
    { day: '07', month: 'Août', title: "Fête de l'Indépendance", time: 'Journée — Grande esplanade' },
    { day: '15', month: 'Août', title: 'Fête de la commune', time: 'Journée — Stade municipal' },
  ];

  readonly tags: string[] = ['Développement', 'Social', 'Culture', 'Santé', 'Éducation', 'Sécurité', 'Salubrité'];

  readonly socialImages: string[] = [
    'assets/images/actualites/2.jpg',
    'assets/images/actualites/3.jpg',
    'assets/images/actualites/1.jpg',
    'assets/images/actualites/2.jpg',
    'assets/images/actualites/3.jpg',
    'assets/images/actualites/1.jpg',
  ];

  readonly videos: VideoItem[] = [
    { poster: 'assets/images/actualites/1.jpg', category: 'Journal municipal', title: 'Journal Municipal — Édition de Juillet 2026', date: '20 Juillet 2026', duration: '3:42' },
    { poster: 'assets/images/actualites/3.jpg', category: 'Reportage', title: 'Visite des chantiers du quartier Sicobois', date: '13 Juillet 2026', duration: '2:15' },
    { poster: 'assets/images/actualites/2.jpg', category: 'Événement', title: 'Inauguration du nouveau centre culturel', date: '05 Juin 2026', duration: '4:08' },
    { poster: 'assets/images/actualites/1.jpg', category: 'Mobilisation', title: 'Grande journée de salubrité communale', date: '12 Mai 2026', duration: '2:50' },
  ];

  readonly activeFilter = signal('all');

  readonly filteredArticles = computed(() => {
    const filter = this.activeFilter();
    return filter === 'all' ? this.articles : this.articles.filter((a) => a.filterKey === filter);
  });

  readonly showFeatured = computed(() => this.activeFilter() === 'all' || this.activeFilter() === this.featuredArticle.filterKey);

  setFilter(key: string): void {
    this.activeFilter.set(key);
  }
}
