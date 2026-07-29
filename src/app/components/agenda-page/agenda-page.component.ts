import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface FilterOption {
  key: string;
  label: string;
}

interface AgendaEvent {
  image: string;
  day: string;
  month: string;
  category: string;
  filterKey: string;
  title: string;
  description: string;
  time: string;
  location: string;
}

interface CalendarDay {
  day: number | null;
  hasEvent: boolean;
}

interface VideoItem {
  poster: string;
  title: string;
  tag: string;
  tagIcon: string;
}

@Component({
  selector: 'app-agenda-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './agenda-page.component.html',
  styleUrl: './agenda-page.component.scss',
})
export class AgendaPageComponent {
  readonly filterOptions: FilterOption[] = [
    { key: 'tous', label: 'Tous les événements' },
    { key: 'conseil', label: 'Conseil Municipal' },
    { key: 'culture', label: 'Culture & Festivités' },
    { key: 'sport', label: 'Sport' },
    { key: 'sante', label: 'Santé & Solidarité' },
    { key: 'education', label: 'Éducation' },
    { key: 'ceremonie', label: 'Cérémonies officielles' },
  ];

  readonly events: AgendaEvent[] = [
    {
      image: 'assets/images/mairie-facade-2.jpg',
      day: '05',
      month: 'Août',
      category: 'Conseil Municipal',
      filterKey: 'conseil',
      title: 'Session ordinaire du Conseil Municipal',
      description: 'Examen et vote des délibérations du 3ème trimestre 2026 en présence des conseillers municipaux.',
      time: '09h00 - 12h00',
      location: 'Salle des délibérations',
    },
    {
      image: 'assets/images/yopougon/sensibilisation.jpg',
      day: '09',
      month: 'Août',
      category: 'Santé & Solidarité',
      filterKey: 'sante',
      title: 'Journée communautaire « Yopougon Propre »',
      description: "Opération de salubrité et de sensibilisation à l'hygiène dans les quartiers de Wassakara et Sicogi.",
      time: '07h00 - 11h00',
      location: 'Quartier Wassakara',
    },
    {
      image: 'assets/images/yopougon/agora.jpeg',
      day: '15',
      month: 'Août',
      category: 'Culture',
      filterKey: 'culture',
      title: 'Festival « Yopougon en Fête »',
      description: 'Concerts, artisanat local et animations familiales pendant trois jours sur l’esplanade de la mairie.',
      time: 'Dès 16h00',
      location: 'Esplanade de la Mairie',
    },
    {
      image: 'assets/images/abidjan-panorama.jpg',
      day: '22',
      month: 'Août',
      category: 'Sport',
      filterKey: 'sport',
      title: 'Tournoi de football inter-quartiers',
      description: 'Finale du tournoi communal de football réunissant les meilleures équipes des quartiers de Yopougon.',
      time: '14h00 - 18h00',
      location: 'Stade municipal',
    },
    {
      image: 'assets/images/yopougon/inspection.jpg',
      day: '28',
      month: 'Août',
      category: 'Santé & Solidarité',
      filterKey: 'sante',
      title: 'Journée de vaccination gratuite',
      description: 'Campagne de vaccination et de dépistage gratuit ouverte à toute la population, en partenariat avec le district sanitaire.',
      time: '08h00 - 16h00',
      location: 'Centre de santé communal',
    },
    {
      image: 'assets/images/culture-civ.jpg',
      day: '03',
      month: 'Sept',
      category: 'Éducation',
      filterKey: 'education',
      title: 'Rentrée scolaire : distribution de kits',
      description: 'Remise gratuite de kits scolaires aux enfants des familles vulnérables de la commune pour la rentrée 2026-2027.',
      time: '09h00 - 13h00',
      location: 'Cour de la Mairie',
    },
    {
      image: 'assets/images/culture-civ.jpg',
      day: '10',
      month: 'Sept',
      category: 'Éducation',
      filterKey: 'education',
      title: 'Remise de prix aux meilleurs élèves',
      description: "La municipalité récompense les meilleurs élèves de la commune au titre de l'année scolaire écoulée.",
      time: '15h00 - 18h00',
      location: 'Salle des fêtes',
    },
    {
      image: 'assets/images/yopougon/ambiance-bar.jpg',
      day: '19',
      month: 'Sept',
      category: 'Culture',
      filterKey: 'culture',
      title: 'Concert live « Radio Yopougon »',
      description: 'Soirée musicale animée par des artistes locaux, organisée par la Radio Yopougon en plein air.',
      time: '18h00 - 22h00',
      location: 'Place de la Paix',
    },
    {
      image: 'assets/images/yopougon/construction-stand.jpg',
      day: '25',
      month: 'Sept',
      category: 'Cérémonie',
      filterKey: 'ceremonie',
      title: 'Pose de première pierre du nouveau marché',
      description: 'Cérémonie officielle marquant le lancement des travaux de construction du nouveau marché de Yopougon.',
      time: '10h00 - 12h00',
      location: 'Site du Marché de Yopougon',
    },
  ];

  readonly videos: VideoItem[] = [
    { poster: 'assets/images/yopougon/agora.jpeg', title: 'Résumé du Festival « Yopougon en Fête » 2025', tag: 'Édition précédente', tagIcon: 'fa-calendar' },
    { poster: 'assets/images/mairie-facade-2.jpg', title: 'Session du Conseil Municipal — temps forts', tag: 'Vie institutionnelle', tagIcon: 'fa-landmark' },
    { poster: 'assets/images/yopougon/sensibilisation.jpg', title: 'Journée « Yopougon Propre » avec les habitants', tag: 'Action communautaire', tagIcon: 'fa-hands-helping' },
  ];

  private readonly eventDays = new Set([5, 9, 15, 16, 17, 22, 28]);

  readonly calendarDays: CalendarDay[] = [
    ...Array.from({ length: 5 }, (): CalendarDay => ({ day: null, hasEvent: false })),
    ...Array.from({ length: 31 }, (_, i): CalendarDay => ({ day: i + 1, hasEvent: this.eventDays.has(i + 1) })),
  ];

  readonly activeFilter = signal('tous');

  readonly filteredEvents = computed(() => {
    const filter = this.activeFilter();
    return filter === 'tous' ? this.events : this.events.filter((e) => e.filterKey === filter);
  });

  setFilter(key: string): void {
    this.activeFilter.set(key);
  }
}
