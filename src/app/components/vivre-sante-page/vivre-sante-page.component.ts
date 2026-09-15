import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

type HealthCategory = 'hopital' | 'communautaire' | 'clinique' | 'pharmacie';

interface HealthFacility {
  id: string;
  category: HealthCategory;
  name: string;
  quartier: string;
  description: string;
  tags: string[];
  image: string;
}

interface CategoryTab {
  id: HealthCategory | 'tous';
  label: string;
  icon: string;
}

interface UsefulNumber {
  service: string;
  numero: string;
  usage: string;
}

interface QuartierCoverage {
  quartier: string;
  offre: string;
}

/**
 * Page « Santé à Yopougon » (Vivre à Yopougon) : contenu original constitué à partir
 * de recherches sur les structures sanitaires réelles de la commune (CHU de Yopougon,
 * FSUCOM, cliniques privées autorisées, système national de pharmacie de garde).
 * Aucune donnée de contact précise non vérifiée n'est inventée : lorsque l'information
 * exacte n'a pas pu être confirmée, le contenu reste volontairement général.
 */
@Component({
  selector: 'app-vivre-sante-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, FadeInDirective, CountUpDirective],
  templateUrl: './vivre-sante-page.component.html',
  styleUrl: './vivre-sante-page.component.scss',
})
export class SanteVivrePageComponent {
  readonly categoryTabs: CategoryTab[] = [
    { id: 'tous', label: 'Toutes les structures', icon: 'fa-border-all' },
    { id: 'hopital', label: 'Hôpital & CHU', icon: 'fa-hospital' },
    { id: 'communautaire', label: 'Centres communautaires', icon: 'fa-house-medical' },
    { id: 'clinique', label: 'Cliniques privées', icon: 'fa-briefcase-medical' },
    { id: 'pharmacie', label: 'Pharmacies', icon: 'fa-prescription-bottle-medical' },
  ];

  readonly facilities: HealthFacility[] = [
    {
      id: 'chu-yopougon',
      category: 'hopital',
      name: 'CHU de Yopougon',
      quartier: 'Axe principal de Yopougon',
      description:
        "Centre Hospitalier Universitaire ouvert en 1990, c'est l'un des plus grands hôpitaux publics de Côte d'Ivoire et un centre de formation pour les futurs médecins, pharmaciens, chirurgiens-dentistes et personnels paramédicaux. Fermé fin 2019 pour une importante réhabilitation, il rouvre progressivement ses services depuis 2024.",
      tags: ['Urgences', 'Bloc mère-enfant', 'Chirurgie', 'Imagerie', 'Formation universitaire'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'fsucom-wassakara',
      category: 'communautaire',
      name: 'FSUCOM de Yopougon-Wassakara',
      quartier: 'Wassakara',
      description:
        "Formation Sanitaire Urbaine Communautaire de référence dans le district sanitaire de Yopougon-Est, connue pour son activité de maternité particulièrement soutenue (plusieurs milliers de naissances par an) en plus des consultations générales et de la vaccination.",
      tags: ['Maternité', 'Consultations', 'Vaccination'],
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'fsucom-andokoi',
      category: 'communautaire',
      name: 'FSUCOM de Yopougon-Andokoi',
      quartier: 'Andokoi',
      description:
        "Centre de santé communautaire situé dans la zone ouest de la commune, à proximité du Lycée Moderne d'Andokoi. Il assure les soins de santé primaires (consultations, suivi mère-enfant, petite chirurgie) au plus près des populations du secteur.",
      tags: ['Soins primaires', 'Suivi mère-enfant'],
      image: 'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'centres-quartier',
      category: 'communautaire',
      name: 'Centres de santé de quartier',
      quartier: 'Sicogi, Niangon, Selmer, Toits Rouges…',
      description:
        "Au-delà des deux grands FSUCOM, plusieurs autres structures sanitaires de proximité (centres de santé, dispensaires, cases de santé) sont réparties dans les grands quartiers de la commune afin de rapprocher les premiers soins des familles.",
      tags: ['Premiers soins', 'Proximité'],
      image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'cmgc',
      category: 'clinique',
      name: 'Clinique Médicale le Grand Centre (CMGC)',
      quartier: 'Yopougon',
      description:
        "Établissement de santé privé autorisé, présenté comme la première clinique certifiée ISO 9001 d'Afrique de l'Ouest. Elle propose des consultations générales et plusieurs spécialités médicales avec un plateau technique moderne.",
      tags: ['Consultations', 'Spécialités', 'Certification ISO 9001'],
      image: 'https://images.unsplash.com/photo-1587351021355-a479a299d2f9?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'flamboyants',
      category: 'clinique',
      name: 'Clinique Médicale Les Flamboyants',
      quartier: 'Sogéfia / Solici',
      description:
        'Structure de soins privée autorisée desservant le secteur de Sogéfia-Solici, proposant consultations et soins courants aux populations environnantes.',
      tags: ['Soins courants'],
      image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'saint-michel',
      category: 'clinique',
      name: 'Clinique Saint Michel Archange',
      quartier: 'Maroc',
      description:
        'Établissement de santé privé implanté dans le quartier Maroc, contribuant à l\'offre de soins de proximité dans ce secteur de la commune.',
      tags: ['Soins courants'],
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'promethee',
      category: 'clinique',
      name: 'Groupe Médical Prométhée',
      quartier: 'Yopougon',
      description:
        'Groupe médical privé autorisé à Yopougon, proposant un ensemble de consultations et de services médicaux à la population de la commune.',
      tags: ['Groupe médical'],
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'notre-dame-lourdes',
      category: 'clinique',
      name: 'Clinique Médicale Notre Dame de Lourdes',
      quartier: 'Yopougon',
      description:
        "Clinique privée autorisée qui complète le maillage des établissements de santé conventionnés de la commune.",
      tags: ['Soins courants'],
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'pharmacie-afia',
      category: 'pharmacie',
      name: 'Pharmacie Afia',
      quartier: 'Millionnaire',
      description:
        "Officine bien connue du quartier Millionnaire, utilisée comme point de repère de proximité (notamment par le Lycée Moderne de Jeunes Filles de Yopougon, qui lui fait face).",
      tags: ['Officine de quartier'],
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'pharmacies-reseau',
      category: 'pharmacie',
      name: 'Réseau des officines de Yopougon',
      quartier: 'Toute la commune',
      description:
        "Des dizaines de pharmacies privées, affiliées à l'Union Nationale des Pharmaciens Privés de Côte d'Ivoire (UNPPCI), sont réparties dans les quartiers de la commune et participent au roulement national des pharmacies de garde.",
      tags: ['Garde obligatoire', 'UNPPCI'],
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
  ];

  readonly activeCategory = signal<HealthCategory | 'tous'>('tous');

  readonly filteredFacilities = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'tous') return this.facilities;
    return this.facilities.filter((f) => f.category === cat);
  });

  selectCategory(id: HealthCategory | 'tous'): void {
    this.activeCategory.set(id);
  }

  readonly usefulNumbers: UsefulNumber[] = [
    { service: 'SAMU (urgences médicales)', numero: '185', usage: 'Malaise grave, accident, urgence vitale' },
    { service: 'Sapeurs-pompiers', numero: '180', usage: 'Incendie, accident, secours et évacuation' },
    { service: 'Police secours', numero: '111 / 170', usage: "Sécurité, agression, atteinte à l'ordre public" },
    { service: 'Ligne verte — établissements sanitaires', numero: '143', usage: "Signaler une anomalie dans une structure de santé (numéro du Ministère de la Santé)" },
  ];

  readonly quartierCoverage: QuartierCoverage[] = [
    { quartier: 'Sicogi, Niangon, Selmer', offre: 'Centres de santé et pharmacies de quartier desservant les zones résidentielles denses.' },
    { quartier: 'Wassakara, Andokoi', offre: 'FSUCOM de référence (maternité, consultations, vaccination, soins primaires).' },
    { quartier: 'Toits Rouges, Gesco, Sideci', offre: 'Structures de santé de proximité et pharmacies desservant les secteurs d\'habitat et d\'activité.' },
    { quartier: 'Kouté, Ficgayo, Maroc, Banco', offre: 'Cliniques privées et cabinets médicaux complétant l\'offre publique de proximité.' },
  ];
}
