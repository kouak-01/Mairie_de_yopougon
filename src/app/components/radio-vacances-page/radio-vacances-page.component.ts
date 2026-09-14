import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

interface TickerItem {
  text: string;
}

interface AboutFeature {
  icon: string;
  text: string;
}

interface NumberStat {
  icon: string;
  value: string;
  label: string;
  target?: number;
  suffix?: string;
}

interface ActiviteCard {
  image: string;
  alt: string;
  ageRange: string;
  icon: string;
  title: string;
  description: string;
  location: string;
}

interface VacVideoItem {
  poster: string;
  duration: string;
  category: string;
  title: string;
  date: string;
}

interface PhotoItem {
  image: string;
  alt: string;
  modifierClass?: string;
}

interface VacScheduleItem {
  time: string;
  title: string;
  description: string;
}

interface VacScheduleCard {
  icon: string;
  title: string;
  items: VacScheduleItem[];
}

interface SecuriteTip {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-radio-vacances-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FadeInDirective, CountUpDirective],
  templateUrl: './radio-vacances-page.component.html',
  styleUrl: './radio-vacances-page.component.scss',
})
export class RadioVacancesPageComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly tickerItems: TickerItem[] = [
    { text: 'Inscriptions ouvertes pour les colonies de vacances 2026 — places limitées' },
    { text: 'Piscine municipale gratuite pour les enfants tous les mercredis de juillet' },
    { text: 'Radio Yopougon en direct des activités chaque après-midi à 15h' },
    { text: 'Cours de vacances gratuits dans les écoles municipales dès le 20 juillet' },
    { text: 'Grande kermesse de fin de vacances le 13 septembre au stade municipal' },
    { text: 'Conseils sécurité vacances : baignade, circulation, soleil — restez prudents' },
  ];

  readonly aboutFeatures: AboutFeature[] = [
    { icon: 'fa-futbol', text: 'Activités sportives' },
    { icon: 'fa-paint-brush', text: 'Ateliers créatifs' },
    { icon: 'fa-book-reader', text: 'Cours de vacances' },
    { icon: 'fa-shield-alt', text: 'Encadrement sécurisé' },
  ];

  readonly vacActivites: ActiviteCard[] = [
    { image: 'assets/images/vacances/sport-vacances.jpg', alt: 'Activités sportives de vacances', ageRange: '6 - 17 ans', icon: 'fa-futbol', title: 'Sport & Loisirs', description: 'Tournois de football, basket-ball et jeux collectifs encadrés chaque matin dans les stades de quartier.', location: 'Stade municipal & terrains de quartier' },
    { image: 'assets/images/vacances/atelier-creatif.jpg', alt: 'Ateliers créatifs pour enfants', ageRange: '4 - 12 ans', icon: 'fa-paint-brush', title: 'Ateliers créatifs', description: 'Peinture, bricolage, contes et initiation à la musique traditionnelle pour éveiller la créativité des tout-petits.', location: 'Centre culturel de Yopougon' },
    { image: 'assets/images/vacances/cours-vacances.jpg', alt: 'Cours de vacances et soutien scolaire', ageRange: 'CP - Terminale', icon: 'fa-book-reader', title: 'Cours de vacances', description: 'Séances de soutien scolaire gratuites en français, mathématiques et sciences dans les écoles municipales.', location: 'Écoles municipales de la commune' },
    { image: 'assets/images/vacances/piscine-municipale-2.jpg', alt: 'Piscine municipale de Yopougon', ageRange: 'Tous âges', icon: 'fa-swimmer', title: 'Piscine municipale', description: 'Séances de natation surveillées et gratuites pour les enfants tous les mercredis et samedis matin.', location: 'Complexe aquatique municipal' },
    { image: 'assets/images/vacances/excursion-vacances-2.avif', alt: 'Excursion et sortie découverte', ageRange: '8 - 17 ans', icon: 'fa-bus', title: 'Excursions & Sorties', description: "Visites guidées de sites culturels d'Abidjan, sorties nature et journées détente organisées chaque quinzaine.", location: "Départs depuis l'Hôtel de ville" },
    { image: 'assets/images/vacances/colonie-vacances.jpg', alt: 'Colonie de vacances municipale', ageRange: '9 - 15 ans', icon: 'fa-campground', title: 'Colonie de vacances', description: 'Un séjour de 5 jours encadré, hors de la commune, alliant activités de plein air et vie collective.', location: 'Sur inscription — places limitées' },
  ];

  readonly vacNumberStats: NumberStat[] = [
    { icon: 'fa-child', value: '3 000+', target: 3000, suffix: '+', label: 'Enfants participants' },
    { icon: 'fa-map-marked-alt', value: '12', target: 12, label: "Sites d'activités" },
    { icon: 'fa-calendar-day', value: '60', target: 60, label: "Jours d'animation" },
    { icon: 'fa-users', value: '150', target: 150, label: 'Animateurs mobilisés' },
  ];

  // Les fichiers vidéo locaux référencés par la page source (videos/vacances/*.mp4)
  // n'existent pas dans le dépôt source : on affiche donc les vignettes (posters)
  // et leurs métadonnées, sans lecteur vidéo fonctionnel, plutôt que d'inventer un fichier.
  readonly vacVideos: VacVideoItem[] = [
    { poster: 'assets/images/vacances/sport-vacances.jpg', duration: '3:15', category: 'Sport', title: 'Tournoi inter-quartiers de vacances', date: '20 Juillet 2026' },
    { poster: 'assets/images/vacances/atelier-creatif.jpg', duration: '2:40', category: 'Atelier créatif', title: 'Nos petits artistes en atelier peinture', date: '25 Juillet 2026' },
    { poster: 'assets/images/vacances/piscine-municipale.jpg', duration: '4:02', category: 'Piscine', title: 'Une journée à la piscine municipale', date: '29 Juillet 2026' },
    { poster: 'assets/images/vacances/colonie-vacances.jpg', duration: '5:18', category: 'Colonie', title: 'Immersion dans la colonie de vacances 2026', date: '03 Août 2026' },
  ];

  readonly vacPhotos: PhotoItem[] = [
    { image: 'assets/images/vacances/vacances-1.jpg', alt: 'Enfants en activité sportive', modifierClass: 'wide tall' },
    { image: 'assets/images/vacances/vacances-2.jpg', alt: 'Atelier créatif en groupe' },
    { image: 'assets/images/vacances/vacances-3.jpg', alt: 'Séance de natation à la piscine municipale' },
    { image: 'assets/images/vacances/vacances-4.jpg', alt: 'Excursion découverte des jeunes de Yopougon', modifierClass: 'tall' },
    { image: 'assets/images/vacances/vacances-6.jpg', alt: 'Cours de vacances en école municipale' },
    { image: 'assets/images/vacances/vacances-7.jpg', alt: 'Kermesse de fin de vacances', modifierClass: 'wide' },
  ];

  readonly vacScheduleCards: VacScheduleCard[] = [
    {
      icon: 'fa-sun',
      title: 'Programme du matin',
      items: [
        { time: '7h00', title: 'Réveil Vacances', description: 'Musique, météo et infos pratiques de la commune' },
        { time: '9h00', title: 'Le Programme du Jour', description: 'Annonce des activités et sites ouverts dans la commune' },
        { time: '11h00', title: 'Conseils Sécurité Été', description: 'Baignade, circulation, soleil : les bons réflexes' },
      ],
    },
    {
      icon: 'fa-cloud-sun',
      title: "Programme de l'après-midi",
      items: [
        { time: '15h00', title: 'Yop en Vacances (en direct)', description: "Reportage en direct depuis un site d'activités" },
        { time: '17h00', title: 'Jeu-concours des vacances', description: 'Questions culture générale et cadeaux à gagner' },
        { time: '19h00', title: "Récap' de la journée", description: 'Résumé des activités et programme du lendemain' },
      ],
    },
  ];

  readonly securiteTips: SecuriteTip[] = [
    { icon: 'fa-water', title: 'Baignade surveillée', description: "Ne laissez jamais un enfant se baigner sans la présence d'un adulte ou d'un maître-nageur." },
    { icon: 'fa-sun', title: 'Protection solaire', description: 'Casquette, crème solaire et hydratation régulière pour éviter les coups de chaleur.' },
    { icon: 'fa-traffic-light', title: 'Prudence sur la route', description: 'Rappelez aux enfants les règles de circulation lors des trajets vers les sites d\'activités.' },
    { icon: 'fa-id-badge', title: 'Encadrement identifié', description: 'Tous les animateurs municipaux portent un badge officiel : vérifiez-le avant toute inscription.' },
  ];

  // ===== FORMULAIRE D'INSCRIPTION AUX ACTIVITÉS =====
  readonly inscriptionActivites = this.vacActivites.map((activite) => activite.title);

  readonly inscriptionForm = new FormGroup({
    childName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    childAge: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(3), Validators.max(18)] }),
    parentName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    parentPhone: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    activite: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true }),
  });

  readonly inscriptionSubmitted = signal(false);

  onInscriptionSubmit(): void {
    if (this.inscriptionForm.invalid) {
      this.inscriptionForm.markAllAsTouched();
      return;
    }
    this.inscriptionSubmitted.set(true);
    const resetTimeout = setTimeout(() => {
      this.inscriptionSubmitted.set(false);
      this.inscriptionForm.reset({ childName: '', childAge: null, parentName: '', parentPhone: '', activite: '', message: '' });
    }, 3000);
    this.destroyRef.onDestroy(() => clearTimeout(resetTimeout));
  }
}
