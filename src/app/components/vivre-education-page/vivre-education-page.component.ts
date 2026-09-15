import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

type EducationLevel = 'petite-enfance' | 'primaire' | 'secondaire' | 'superieur';

interface EducationItem {
  id: string;
  level: EducationLevel;
  name: string;
  type: string;
  quartier: string;
  description: string;
  image: string;
}

interface LevelTab {
  id: EducationLevel | 'tous';
  label: string;
  icon: string;
}

interface EstablishmentRow {
  name: string;
  type: string;
  quartier: string;
}

/**
 * Page « Éducation à Yopougon » (Vivre à Yopougon) : contenu original constitué à partir
 * de recherches sur les établissements réels de la commune, de la petite enfance à
 * l'enseignement supérieur (Lycée Moderne Yopougon-Andokoi, Lycée Moderne de Jeunes
 * Filles, Lycée Technique, IUPA, etc.). Les données non vérifiables (effectifs exacts,
 * adresses précises) sont volontairement laissées générales.
 */
@Component({
  selector: 'app-vivre-education-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, FadeInDirective, CountUpDirective],
  templateUrl: './vivre-education-page.component.html',
  styleUrl: './vivre-education-page.component.scss',
})
export class EducationVivrePageComponent {
  readonly levelTabs: LevelTab[] = [
    { id: 'tous', label: 'Tous les niveaux', icon: 'fa-border-all' },
    { id: 'petite-enfance', label: 'Petite enfance', icon: 'fa-child-reaching' },
    { id: 'primaire', label: 'Primaire', icon: 'fa-book' },
    { id: 'secondaire', label: 'Secondaire', icon: 'fa-graduation-cap' },
    { id: 'superieur', label: 'Supérieur & Formation pro', icon: 'fa-user-graduate' },
  ];

  readonly items: EducationItem[] = [
    {
      id: 'creches',
      level: 'petite-enfance',
      name: 'Crèches et garderies de quartier',
      type: 'Public / privé',
      quartier: 'Plusieurs quartiers',
      description:
        "Des structures d'accueil pour la petite enfance (crèches et garderies), municipales et privées, accompagnent les familles de la commune avant l'entrée en maternelle. L'offre est principalement portée par des établissements privés implantés dans les quartiers résidentiels.",
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'institut-lkm',
      level: 'petite-enfance',
      name: 'Institut LKM de Yopougon',
      type: 'Privé',
      quartier: 'Yopougon',
      description:
        "Groupe scolaire privé qui couvre plusieurs niveaux, de la maternelle à l'enseignement supérieur, offrant ainsi un parcours continu au sein du même établissement.",
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'epp',
      level: 'primaire',
      name: 'Écoles primaires publiques (EPP)',
      type: 'Public',
      quartier: 'Tous les grands quartiers',
      description:
        "Plusieurs dizaines d'écoles primaires publiques (EPP) sont réparties dans les quartiers de la commune, accueillant chaque année un grand nombre d'élèves du CP1 au CM2 sous la tutelle de la direction régionale de l'éducation nationale.",
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'saint-exupery',
      level: 'primaire',
      name: 'Groupe scolaire Antoine de Saint-Exupéry',
      type: 'Privé',
      quartier: 'Yopougon',
      description: "École primaire privée faisant partie de l'offre d'enseignement primaire privé de la commune.",
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'offoumou-primaire',
      level: 'primaire',
      name: 'Groupe scolaire Offoumou',
      type: 'Privé',
      quartier: 'Yopougon',
      description: "Établissement privé de niveau primaire, rattaché au même groupe que l'Institut Offoumou d'enseignement supérieur.",
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'lycee-andokoi',
      level: 'secondaire',
      name: 'Lycée Moderne Yopougon-Andokoi',
      type: 'Public',
      quartier: 'Andokoi',
      description:
        "Premier établissement secondaire public de la commune, il a accueilli ses premiers élèves en 1977, avant la création des autres grands lycées publics de Yopougon.",
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'lycee-jeunes-filles',
      level: 'secondaire',
      name: 'Lycée Moderne de Jeunes Filles de Yopougon',
      type: 'Public',
      quartier: 'Banco',
      description:
        "D'abord collège mixte hébergé dans les locaux du Lycée Technique jusqu'en 1996, il est reconstruit au quartier Banco et inauguré comme collège de jeunes filles en 1999, avant d'être élevé au rang de lycée en 2008.",
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'lycee-technique',
      level: 'secondaire',
      name: 'Lycée Technique de Yopougon',
      type: 'Public',
      quartier: 'Siporex',
      description:
        "Implanté au quartier Siporex, à proximité de la gare de Dabou, il forme les élèves et apprentis affectés par l'État dans les filières techniques et technologiques.",
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'lycee-pro-sectoriel',
      level: 'secondaire',
      name: 'Lycée Professionnel Sectoriel de Yopougon',
      type: 'Public',
      quartier: 'Yopougon',
      description:
        "Établi sur environ 4 hectares avec une capacité de 390 apprenants, il a ouvert ses portes lors de l'année scolaire 2020-2021 pour renforcer l'offre d'enseignement technique et professionnel de la commune.",
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'lycee-pro-commercial',
      level: 'secondaire',
      name: 'Lycée Professionnel Commercial de Yopougon',
      type: 'Public',
      quartier: 'Yopougon',
      description: "Établissement public spécialisé dans les filières commerciales et de gestion, complétant l'offre d'enseignement technique de la commune.",
      image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'lycee-pierre-gadie',
      level: 'secondaire',
      name: 'Lycée Municipal Pierre Gadié de Yopougon',
      type: 'Public (municipal)',
      quartier: 'Yopougon',
      description: "Lycée public à gestion municipale, illustrant l'implication directe de la commune dans l'offre d'enseignement secondaire.",
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'college-moderne',
      level: 'secondaire',
      name: 'Collège Moderne de Yopougon',
      type: 'Public',
      quartier: 'Yopougon',
      description: 'Collège public assurant le premier cycle du secondaire pour de nombreux élèves de la commune.',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'college-newton',
      level: 'secondaire',
      name: 'Collège Newton de Yopougon',
      type: 'Public',
      quartier: 'Yopougon',
      description: "Collège public participant au maillage des établissements de premier cycle de la commune.",
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'college-phalenes',
      level: 'secondaire',
      name: 'Collège « Les Phalènes » de Yopougon',
      type: 'Public',
      quartier: 'Yopougon',
      description: 'Collège public complétant l\'offre de premier cycle secondaire disponible dans la commune.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'iupa',
      level: 'superieur',
      name: "Institut Universitaire Polytechnique d'Abidjan (IUPA) — Campus Yopougon",
      type: 'Privé, agréé',
      quartier: 'Yopougon',
      description:
        "Établissement d'enseignement supérieur privé agréé par le Ministère de l'Enseignement Supérieur, préparant aux diplômes de BTS, licence professionnelle et master professionnel.",
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'gecos',
      level: 'superieur',
      name: 'GECOS Formation',
      type: 'Privé, agréé',
      quartier: 'Yopougon',
      description: 'Établissement supérieur et professionnel privé proposant des cursus homologués de BTS, licence et master.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'academie-elites',
      level: 'superieur',
      name: 'Académie Élites',
      type: 'Privé',
      quartier: 'Quartier Résidentiel',
      description: 'Centre de formation qualifiante et professionnelle proposant des programmes de perfectionnement et des certificats spécialisés.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 'iesto',
      level: 'superieur',
      name: "Institut Offoumou d'Enseignement Supérieur (IESTO)",
      type: 'Privé',
      quartier: 'Yopougon',
      description: "Institut d'enseignement supérieur privé rattaché au groupe scolaire Offoumou, prolongeant le parcours éducatif jusqu'au niveau universitaire.",
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    },
  ];

  readonly activeLevel = signal<EducationLevel | 'tous'>('tous');

  readonly filteredItems = computed(() => {
    const level = this.activeLevel();
    if (level === 'tous') return this.items;
    return this.items.filter((i) => i.level === level);
  });

  selectLevel(id: EducationLevel | 'tous'): void {
    this.activeLevel.set(id);
  }

  readonly secondaryTable: EstablishmentRow[] = this.items
    .filter((i) => i.level === 'secondaire')
    .map((i) => ({ name: i.name, type: i.type, quartier: i.quartier }));
}
