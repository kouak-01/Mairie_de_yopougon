import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface BannerStat {
  number: string;
  label: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface MayorItem {
  name: string;
  period: string;
  description: string;
}

interface FeaturedFact {
  number: string;
  label: string;
}

interface DemographyStat {
  icon: string;
  count: string;
  label: string;
}

interface HeritageItem {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
}

interface VideoThumb {
  image: string;
  title: string;
}

@Component({
  selector: 'app-histoire-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './histoire-page.component.html',
  styleUrl: './histoire-page.component.scss',
})
export class HistoirePageComponent {
  readonly bannerStats: BannerStat[] = [
    { number: '1980', label: 'Érection en commune' },
    { number: '153 km²', label: 'Superficie' },
    { number: '14', label: 'Villages traditionnels' },
  ];

  readonly timelineItems: TimelineItem[] = [
    { year: 'Avant 1960', title: 'Un territoire de villages', description: "Yopougon regroupe plusieurs villages ébrié et attié vivant de pêche, d'agriculture et de plantations, en périphérie de l'Abidjan colonial." },
    { year: '1970', title: "Une zone d'urbanisation nouvelle", description: "Dans le cadre du « miracle ivoirien » et du plan d'expansion équilibrée d'Abidjan, l'État désigne Yopougon comme l'une des grandes zones d'urbanisation de la capitale économique." },
    { year: '1972 - 1974', title: 'Naissance des premiers quartiers modernes', description: 'Les sociétés d’État SICOGI et SOGEFIHA construisent les premières cités de logements sociaux et économiques, posant les bases des quartiers Sicogi et Sogefiha.' },
    { year: '1979', title: 'La voie expresse Est-Ouest', description: "La réalisation de cet axe structurant relie Yopougon au reste d'Abidjan et accélère l'arrivée de nouvelles populations venues de toutes les régions du pays." },
    { year: '1980', title: 'Érection en commune de plein exercice', description: "Par la loi n°78-07 du 9 janvier 1978, organisée par la loi du 17 octobre 1980, Yopougon devient une collectivité territoriale à part entière, dotée de son propre conseil municipal." },
    { year: '1982', title: 'Création du diocèse de Yopougon', description: "Le pape Jean-Paul II érige le diocèse de Yopougon, dont le siège est établi en la cathédrale Saint-André, construite en 1979 et agrandie à partir de 2007." },
    { year: 'Années 1990-2000', title: '« Yop City » entre dans la culture populaire', description: 'Ses maquis, sa musique et son ambiance font de Yopougon une référence culturelle nationale, popularisée bien au-delà d’Abidjan, notamment à travers la bande dessinée « Aya de Yopougon ».' },
    { year: '2010-2011', title: 'Une période de crise traversée avec résilience', description: "Comme de nombreuses communes du pays, Yopougon a connu des années de tensions politiques. La commune s'est depuis résolument tournée vers la reconstruction et la cohésion sociale." },
    { year: "2023 - Aujourd'hui", title: 'Une nouvelle municipalité, un nouvel élan', description: "Le 2 septembre 2023, Adama Bictogo est élu Maire de Yopougon et engage la commune dans une nouvelle dynamique de grands travaux et de modernisation." },
  ];

  readonly mayors: MayorItem[] = [
    { name: 'Gadié Pierre', period: '1980 - 1985', description: "Premier Maire de la commune, à l'origine de la mise en place des services municipaux." },
    { name: 'Doukouré Moustapha', period: '1985 - 1990', description: 'Poursuite du développement urbain des premiers quartiers résidentiels.' },
    { name: 'Bédji Joseph', period: '1990 - 1995', description: 'Gestion municipale dans un contexte de forte croissance démographique.' },
    { name: 'Doukouré Moustapha', period: '1995 - 2000', description: 'Second mandat, consolidation des infrastructures de base.' },
    { name: 'Gbamnan Djidan', period: '2001 - 2023', description: 'Plus de vingt années à la tête de la commune, marquées par une forte expansion urbaine.' },
    { name: 'Adama Bictogo', period: 'Depuis le 2 septembre 2023', description: 'Maire actuel, engagé pour la modernisation et le désenclavement de Yopougon.' },
  ];

  readonly featuredFacts: FeaturedFact[] = [
    { number: '14', label: 'Villages traditionnels' },
    { number: 'FICGAYO', label: 'Foire annuelle' },
    { number: 'Guébia', label: 'Course de masques' },
  ];

  readonly demographyStats: DemographyStat[] = [
    { icon: 'fa-chart-line', count: '688 235', label: 'Habitants en 1998' },
    { icon: 'fa-chart-line', count: '1 071 543', label: 'Habitants en 2014' },
    { icon: 'fa-chart-line', count: '1 571 065', label: 'Habitants en 2021' },
    { icon: 'fa-map-marked-alt', count: '153 km²', label: 'Superficie communale' },
  ];

  readonly heritageItems: HeritageItem[] = [
    {
      image: 'assets/images/mairie-facade-3.jpg',
      category: 'Patrimoine religieux',
      date: 'Depuis 1982',
      title: 'Le diocèse de Yopougon',
      description: 'Érigé en 1982, le diocèse a pour siège la cathédrale Saint-André, construite en 1979 et agrandie à partir de 2007 pour accueillir toujours plus de fidèles.',
    },
    {
      image: 'assets/images/mairie-yopougon-2.jpg',
      category: 'Cités pionnières',
      date: 'Depuis 1972',
      title: 'Sicogi & Sogefiha',
      description: "Premiers grands ensembles de logements sociaux construits par l'État, ces cités emblématiques ont accueilli les premières vagues de nouveaux habitants de la commune.",
    },
    {
      image: 'assets/images/marche-yopougon.jpg',
      category: 'Vie économique',
      date: "Aujourd'hui",
      title: 'Un pôle économique et industriel',
      description: 'Deux zones industrielles, de grands marchés de quartier et un secteur informel dynamique font de Yopougon un pilier économique du Grand Abidjan.',
    },
  ];

  readonly videoThumbs: VideoThumb[] = [
    { image: 'assets/images/mairie-facade-3.jpg', title: 'Le patrimoine religieux de Yopougon' },
    { image: 'assets/images/yopougon/rue-princesse.jpg', title: 'Rue Princesse, mémoire de « Yop City »' },
    { image: 'assets/images/abidjan-skyline.jpg', title: 'Yopougon aujourd’hui, une commune en marche' },
  ];
}
