import { Component, signal, HostListener } from '@angular/core';
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

interface ScheduleDay {
  id: string;
  label: string;
}

interface ScheduleItem {
  timeStart: string;
  timeEnd: string;
  icon: string;
  title: string;
  description: string;
  live?: boolean;
}

interface InfoCard {
  icon: string;
  title: string;
  description: string;
}

interface VacanceCard {
  badge: string;
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  linkPath: string;
  linkFragment?: string;
}

interface FbStat {
  icon: string;
  target: number;
  suffix: string;
  label: string;
}

interface FbPost {
  timeAgo: string;
  text: string;
  likes: number;
  comments: number;
  shares: number;
}

@Component({
  selector: 'app-radio-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, FadeInDirective, CountUpDirective],
  templateUrl: './radio-page.component.html',
  styleUrl: './radio-page.component.scss',
})
export class RadioPageComponent {
  readonly heroStats: HeroStat[] = [
    { target: 18, suffix: 'h/24', label: 'Antenne' },
    { target: 12, suffix: '+', label: 'Émissions' },
    { target: 8, suffix: '', label: "Années d'antenne" },
  ];

  readonly scheduleDays: ScheduleDay[] = [
    { id: 'lundi', label: 'Lundi' },
    { id: 'mardi', label: 'Mardi' },
    { id: 'mercredi', label: 'Mercredi' },
    { id: 'jeudi', label: 'Jeudi' },
    { id: 'vendredi', label: 'Vendredi' },
    { id: 'samedi', label: 'Samedi' },
    { id: 'dimanche', label: 'Dimanche' },
  ];

  readonly activeDay = signal('lundi');

  readonly scheduleByDay: Record<string, ScheduleItem[]> = {
    lundi: [
      { timeStart: '06h00', timeEnd: '07h30', icon: 'fa-sun', title: 'Yop Matin', description: "Le réveil de Yopougon : actualité, météo et infos pratiques avec Aïssata K.", live: true },
      { timeStart: '12h00', timeEnd: '12h30', icon: 'fa-newspaper', title: 'Le Journal de Yopougon', description: "L'essentiel de l'actualité communale et nationale." },
      { timeStart: '15h00', timeEnd: '16h30', icon: 'fa-briefcase', title: 'Yop Éco', description: 'Emploi, entrepreneuriat et opportunités économiques locales.' },
      { timeStart: '19h00', timeEnd: '20h30', icon: 'fa-comments', title: 'Yop Débat', description: 'La propreté dans nos quartiers : quelles solutions citoyennes ?' },
    ],
    mardi: [
      { timeStart: '06h00', timeEnd: '07h30', icon: 'fa-sun', title: 'Yop Matin', description: 'Le réveil de Yopougon : actualité, météo et infos pratiques.' },
      { timeStart: '12h00', timeEnd: '12h30', icon: 'fa-newspaper', title: 'Le Journal de Yopougon', description: "L'essentiel de l'actualité communale et nationale." },
      { timeStart: '14h00', timeEnd: '15h30', icon: 'fa-heartbeat', title: 'Yop Santé', description: 'Prévention et conseils santé avec les centres de santé communaux.' },
      { timeStart: '18h30', timeEnd: '20h00', icon: 'fa-music', title: 'Yop Rythmes', description: 'Le meilleur de la musique ivoirienne et africaine.' },
    ],
    mercredi: [
      { timeStart: '06h00', timeEnd: '07h30', icon: 'fa-sun', title: 'Yop Matin', description: 'Le réveil de Yopougon : actualité, météo et infos pratiques.' },
      { timeStart: '12h00', timeEnd: '12h30', icon: 'fa-newspaper', title: 'Le Journal de Yopougon', description: "L'essentiel de l'actualité communale et nationale." },
      { timeStart: '15h30', timeEnd: '17h00', icon: 'fa-child', title: 'Yop Kids', description: "L'émission dédiée aux enfants : jeux, contes et éducation." },
      { timeStart: '19h00', timeEnd: '20h30', icon: 'fa-landmark', title: 'Yop Citoyen', description: 'Décisions du Conseil Municipal et vie institutionnelle expliquées.' },
    ],
    jeudi: [
      { timeStart: '06h00', timeEnd: '07h30', icon: 'fa-sun', title: 'Yop Matin', description: 'Le réveil de Yopougon : actualité, météo et infos pratiques.' },
      { timeStart: '12h00', timeEnd: '12h30', icon: 'fa-newspaper', title: 'Le Journal de Yopougon', description: "L'essentiel de l'actualité communale et nationale." },
      { timeStart: '14h30', timeEnd: '16h00', icon: 'fa-futbol', title: 'Yop Sport', description: "L'actualité sportive de la commune et de ses clubs." },
      { timeStart: '19h00', timeEnd: '20h30', icon: 'fa-people-group', title: 'Yop Associations', description: 'Coup de projecteur sur les associations et initiatives locales.' },
    ],
    vendredi: [
      { timeStart: '06h00', timeEnd: '07h30', icon: 'fa-sun', title: 'Yop Matin', description: 'Le réveil de Yopougon : actualité, météo et infos pratiques.' },
      { timeStart: '12h00', timeEnd: '12h30', icon: 'fa-newspaper', title: 'Le Journal de Yopougon', description: "L'essentiel de l'actualité communale et nationale." },
      { timeStart: '15h00', timeEnd: '16h30', icon: 'fa-mosque', title: 'Yop Spiritualité', description: 'Espace interconfessionnel dédié à la paix sociale et au vivre-ensemble.' },
      { timeStart: '20h00', timeEnd: '22h00', icon: 'fa-compact-disc', title: 'Yop Week-end Party', description: 'Lancement du week-end en musique avec les tubes du moment.' },
    ],
    samedi: [
      { timeStart: '08h00', timeEnd: '09h30', icon: 'fa-broom', title: 'Yop Propre', description: 'Salubrité, environnement et bonnes pratiques citoyennes.' },
      { timeStart: '11h00', timeEnd: '13h00', icon: 'fa-utensils', title: 'Yop Gourmand', description: 'Gastronomie locale, recettes et adresses gourmandes de la commune.' },
      { timeStart: '16h00', timeEnd: '18h00', icon: 'fa-futbol', title: 'Yop Sport Week-end', description: 'Résultats et résumés en direct des rencontres sportives locales et nationales.' },
      { timeStart: '20h00', timeEnd: '23h00', icon: 'fa-star', title: 'Yop Talents', description: 'Concours et découverte des jeunes talents artistiques de Yopougon.' },
    ],
    dimanche: [
      { timeStart: '08h00', timeEnd: '09h30', icon: 'fa-place-of-worship', title: 'Yop Foi & Valeurs', description: 'Retransmissions et messages spirituels pour bien démarrer la semaine.' },
      { timeStart: '12h30', timeEnd: '13h30', icon: 'fa-newspaper', title: 'Le Journal du Dimanche', description: "Résumé hebdomadaire de l'actualité de la commune." },
      { timeStart: '15h00', timeEnd: '17h00', icon: 'fa-house-user', title: 'Yop en Famille', description: 'Émission conviviale dédiée à la famille et à la jeunesse.' },
      { timeStart: '18h30', timeEnd: '20h00', icon: 'fa-music', title: 'Yop Ambiance', description: 'Retour en musique sur les temps forts de la semaine.' },
    ],
  };

  readonly infoCards: InfoCard[] = [
    { icon: 'fa-satellite-dish', title: 'Fréquence', description: '94.5 FM, écoutable dans toute la commune de Yopougon et ses environs.' },
    { icon: 'fa-clock', title: 'Antenne', description: 'Diffusion tous les jours de 6h00 à 00h00, 7 jours sur 7.' },
    { icon: 'fa-map-marker-alt', title: 'Studio', description: 'Immeuble de la Mairie de Yopougon, Rue Princesse, Abidjan.' },
    { icon: 'fa-phone-volume', title: 'Antenne ouverte', description: 'Participez en direct au +225 27 23 45 28 21 pendant nos émissions interactives.' },
  ];

  readonly vacancesCards: VacanceCard[] = [
    { badge: 'Enfants', icon: 'fa-child-reaching', title: 'Yop Kids Vacances', description: "Contes, jeux radiophoniques et ateliers d'éveil pour occuper les enfants tous les matins à 9h00.", linkLabel: "S'inscrire", linkPath: '/', linkFragment: 'contact' },
    { badge: 'Concours', icon: 'fa-trophy', title: 'Jeu Concours "Vacances à Yop City"', description: 'Testez vos connaissances sur votre commune et gagnez de nombreux lots chaque semaine, en direct à l\'antenne.', linkLabel: 'Participer', linkPath: '/', linkFragment: 'contact' },
    { badge: "Camp d'été", icon: 'fa-campground', title: 'Colonie Radio Junior', description: 'Nos jeunes reporters en herbe s\'initient au métier de journaliste radio dans nos studios, du lundi au vendredi.', linkLabel: 'Découvrir', linkPath: '/', linkFragment: 'contact' },
    { badge: 'Musique', icon: 'fa-headphones-alt', title: 'Yop Vacances Party', description: 'Chaque après-midi, deux heures de musique non-stop pour accompagner les vacances de toute la famille.', linkLabel: 'Voir les horaires', linkPath: '/radio', linkFragment: 'programme' },
    { badge: 'Découverte', icon: 'fa-map-location-dot', title: 'Yop Balade', description: 'Reportages sonores à la découverte des sites, activités et loisirs à faire en famille dans la commune.', linkLabel: 'En savoir plus', linkPath: '/', linkFragment: 'contact' },
    { badge: 'Solidarité', icon: 'fa-hand-holding-heart', title: 'Yop Cœur Vacances', description: 'Actions solidaires et dons de fournitures scolaires pour préparer sereinement la rentrée 2026-2027.', linkLabel: 'Participer', linkPath: '/', linkFragment: 'contact' },
  ];

  readonly fbStats: FbStat[] = [
    { icon: 'fa-facebook', target: 48500, suffix: '+', label: 'Abonnés' },
    { icon: 'fa-thumbs-up', target: 45200, suffix: '+', label: "Mentions J'aime" },
    { icon: 'fa-eye', target: 120000, suffix: '+', label: 'Vues moyennes / mois' },
    { icon: 'fa-comments', target: 3800, suffix: '+', label: 'Interactions / semaine' },
  ];

  readonly fbPosts: FbPost[] = [
    { timeAgo: 'Il y a 2 jours', text: '📢 Le programme spécial vacances 2026 est disponible ! Retrouvez tous les horaires de Yop Kids Vacances et de la Colonie Radio Junior sur notre page.', likes: 512, comments: 84, shares: 63 },
    { timeAgo: 'Il y a 5 jours', text: '🎙️ Ce soir dans Yop Débat : la propreté dans nos quartiers. Appelez-nous en direct au 27 23 45 28 21 pour partager votre avis !', likes: 389, comments: 57, shares: 41 },
    { timeAgo: 'Il y a 1 semaine', text: '🏆 Bravo à tous les participants du jeu concours "Vacances à Yop City" ! Les gagnants de la semaine seront annoncés ce vendredi dans Yop Matin.', likes: 674, comments: 112, shares: 95 },
  ];

  readonly isPlaying = signal(false);
  readonly miniPlayerVisible = signal(false);

  setActiveDay(dayId: string): void {
    this.activeDay.set(dayId);
  }

  onHeroPlay(): void {
    this.isPlaying.set(true);
    this.miniPlayerVisible.set(true);
  }

  toggleMiniPlayer(): void {
    this.isPlaying.update((playing) => !playing);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.miniPlayerVisible.set(window.scrollY > 400);
  }
}
