import { Component, signal, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

interface HeroStat {
  target: number;
  suffix: string;
  label: string;
}

interface HubIcon {
  icon: string;
  title: string;
}

interface QuickNavItem {
  id: string;
  label: string;
  icon: string;
}

interface BentoCard {
  id: string;
  icon: string;
  overline: string;
  title: string;
  description: string;
  link: string;
  featured?: boolean;
  spanTwo?: boolean;
}

@Component({
  selector: 'app-yop-ma-commune-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, FadeInDirective, CountUpDirective],
  templateUrl: './yop-ma-commune-page.component.html',
  styleUrl: './yop-ma-commune-page.component.scss',
})
export class YopMaCommunePageComponent implements AfterViewInit, OnDestroy {
  readonly heroStats: HeroStat[] = [
    { target: 1571065, suffix: '', label: 'Habitants' },
    { target: 153, suffix: ' km²', label: 'Superficie' },
    { target: 32, suffix: '', label: 'Quartiers' },
    { target: 8, suffix: '', label: 'Arrondissements' },
  ];

  readonly hubIcons: HubIcon[] = [
    { icon: 'fa-scroll', title: 'Histoire' },
    { icon: 'fa-landmark', title: 'Histoire politique' },
    { icon: 'fa-map', title: 'Géographie' },
    { icon: 'fa-people-group', title: 'Gouvernance participative' },
    { icon: 'fa-chart-line', title: 'Économie' },
    { icon: 'fa-briefcase', title: 'Emplois' },
    { icon: 'fa-futbol', title: 'Sport et culture' },
    { icon: 'fa-umbrella-beach', title: 'Tourisme et loisirs' },
  ];

  readonly quickNavItems: QuickNavItem[] = [
    { id: 'histoire', label: 'Histoire', icon: 'fa-scroll' },
    { id: 'histoire-politique', label: 'Histoire politique', icon: 'fa-landmark' },
    { id: 'geographie', label: 'Géographie', icon: 'fa-map' },
    { id: 'gouvernance-participative', label: 'Gouvernance participative', icon: 'fa-people-group' },
    { id: 'economie', label: 'Économie', icon: 'fa-chart-line' },
    { id: 'emplois', label: 'Emplois', icon: 'fa-briefcase' },
    { id: 'sport-culture', label: 'Sport et culture', icon: 'fa-futbol' },
    { id: 'tourisme-loisirs', label: 'Tourisme et loisirs', icon: 'fa-umbrella-beach' },
  ];

  readonly bentoCards: BentoCard[] = [
    {
      id: 'histoire',
      icon: 'fa-scroll',
      overline: 'Nos racines',
      title: 'Histoire',
      description:
        "Des premiers villages Ébrié aux grandes vagues de peuplement du XXᵉ siècle, découvrez comment Yopougon est devenue la plus grande commune de Côte d'Ivoire, forte de son identité plurielle et de sa mémoire collective transmise de génération en génération.",
      link: '/histoire',
      featured: true,
      spanTwo: true,
    },
    {
      id: 'histoire-politique',
      icon: 'fa-landmark',
      overline: 'Vie institutionnelle',
      title: 'Histoire politique',
      description:
        "Retracez l'évolution administrative de la commune, les grandes municipalités qui se sont succédé et les réformes qui ont façonné la gouvernance locale de Yopougon.",
      link: '/histoire',
    },
    {
      id: 'geographie',
      icon: 'fa-map',
      overline: 'Territoire',
      title: 'Géographie',
      description:
        'Relief, lagune, climat et découpage en 32 quartiers répartis sur 8 arrondissements : explorez la configuration géographique unique de Yop City.',
      link: '/geographie',
    },
    {
      id: 'gouvernance-participative',
      icon: 'fa-people-group',
      overline: 'Citoyenneté',
      title: 'Gouvernance participative',
      description:
        'Comités de quartiers, budgets participatifs et concertations publiques : découvrez comment les Yopougonnais prennent part aux décisions de leur commune.',
      link: '/gouvernance-participative',
    },
    {
      id: 'economie',
      icon: 'fa-chart-line',
      overline: 'Développement',
      title: 'Économie',
      description:
        "Commerce, industrie, marchés et artisanat : Yopougon est un pôle économique majeur du District d'Abidjan. Panorama des filières qui font vivre la commune.",
      link: '/economie',
    },
    {
      id: 'emplois',
      icon: 'fa-briefcase',
      overline: 'Insertion professionnelle',
      title: 'Emplois',
      description:
        "Offres d'emploi, dispositifs d'insertion et accompagnement à l'entrepreneuriat : la mairie soutient l'emploi local, en particulier pour les jeunes et les femmes.",
      link: '/emploi-recrutement',
    },
    {
      id: 'sport-culture',
      icon: 'fa-futbol',
      overline: 'Vie communautaire',
      title: 'Sport et culture',
      description:
        'Clubs sportifs, festivals, troupes artistiques et infrastructures culturelles : Yopougon vibre au rythme de ses talents et de ses événements populaires.',
      link: '/sport-et-culture',
    },
  ];

  readonly activeSection = signal('histoire');

  private spyObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = this.quickNavItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);

    this.spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      { rootMargin: '-160px 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((section) => this.spyObserver?.observe(section));
  }

  ngOnDestroy(): void {
    this.spyObserver?.disconnect();
  }
}
