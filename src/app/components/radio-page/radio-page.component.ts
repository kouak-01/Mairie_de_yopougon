import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroStat {
  value: string;
  label: string;
}

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

interface FlagshipShow {
  icon: string;
  title: string;
  description: string;
}

interface HighlightItem {
  icon: string;
  text: string;
}

interface GalerieItem {
  image: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-radio-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FadeInDirective, CountUpDirective],
  templateUrl: './radio-page.component.html',
  styleUrl: './radio-page.component.scss',
})
export class RadioPageComponent {
  private readonly destroyRef = inject(DestroyRef);

  // ===== HERO =====
  readonly heroSlides: HeroSlide[] = [
    { src: 'https://images.unsplash.com/photo-1760895223972-57b1d858d77e?fm=jpg&q=80&w=1600&auto=format&fit=crop', alt: 'Enseigne lumineuse On Air' },
    { src: 'https://images.unsplash.com/photo-1627667049482-dd134b1f6366?fm=jpg&q=80&w=1600&auto=format&fit=crop', alt: 'Microphone de studio radio' },
    { src: 'https://images.unsplash.com/photo-1578125769963-ef5edfa5b0fc?fm=jpg&q=80&w=1600&auto=format&fit=crop', alt: 'Console de mixage audio' },
  ];
  readonly currentSlide = signal(0);

  readonly heroStats: HeroStat[] = [
    { value: '96.8', label: 'Fréquence FM' },
    { value: '1998', label: 'Année de création' },
    { value: '13', label: 'Communes couvertes' },
  ];

  readonly tickerItems: TickerItem[] = [
    { text: 'Radio Yopougon 96.8 FM — « La chaîne de toutes les générations »' },
    { text: 'Émission phare « Zone Interdite » — du lundi au vendredi' },
    { text: 'Radio communale installée à la Mairie centrale de Yopougon, Selmer' },
    { text: "Diffusion continue sur les 13 communes du District d'Abidjan" },
    { text: 'Plus de 27 ans au service de la population yopougonnaise' },
  ];

  readonly aboutFeatures: AboutFeature[] = [
    { icon: 'fa-broadcast-tower', text: '96.8 FM' },
    { icon: 'fa-clock', text: 'Diffusion 24h/24' },
    { icon: 'fa-map-marked-alt', text: '13 communes couvertes' },
    { icon: 'fa-users', text: 'Toutes les générations' },
  ];

  readonly numberStats: NumberStat[] = [
    { icon: 'fa-satellite-dish', value: '96.8', label: 'Fréquence FM' },
    { icon: 'fa-calendar-alt', value: '1998', target: 1998, label: 'Année de création' },
    { icon: 'fa-map', value: '13', target: 13, label: "Communes d'Abidjan" },
    { icon: 'fa-history', value: '27+', target: 27, suffix: '+', label: "Années d'existence" },
  ];

  readonly flagshipShows: FlagshipShow[] = [
    { icon: 'fa-exclamation-circle', title: 'Zone Interdite', description: "Le magazine d'actualité et de société de la station, qui aborde sans détour les sujets qui font parler la commune." },
    { icon: 'fa-laugh-beam', title: 'Rions Ensemble', description: "Une émission d'humour et de détente qui rassemble petits et grands autour de bonne humeur et de convivialité." },
    { icon: 'fa-newspaper', title: 'Au Quotidien', description: "Le rendez-vous d'informations pratiques et de proximité pour suivre la vie de tous les jours à Yopougon." },
    { icon: 'fa-trophy', title: "Fauteuil d'Or", description: 'Un espace de dialogue et de reconnaissance dédié aux figures marquantes de la commune et de ses environs.' },
    { icon: 'fa-futbol', title: 'Sport à la Loupe', description: "L'actualité sportive locale et nationale décryptée, avec un focus sur les talents et clubs de la commune." },
    { icon: 'fa-music', title: 'Musique & Générations', description: "Une programmation musicale variée qui traverse les époques, pour accompagner toutes les générations d'auditeurs." },
  ];

  readonly videoHighlights: HighlightItem[] = [
    { icon: 'fa-check-circle', text: 'Reportages de proximité' },
    { icon: 'fa-check-circle', text: 'Émissions en direct' },
    { icon: 'fa-check-circle', text: 'Événements de la Mairie' },
    { icon: 'fa-check-circle', text: 'Portraits de Yopougonnais' },
  ];

  readonly galerieItems: GalerieItem[] = [
    { image: 'https://images.unsplash.com/photo-1767474365536-ef81bfa24c8a?fm=jpg&q=80&w=1000&auto=format&fit=crop', alt: "Studio d'enregistrement", label: "Studio d'enregistrement" },
    { image: 'https://images.unsplash.com/photo-1578125769963-ef5edfa5b0fc?fm=jpg&q=80&w=1000&auto=format&fit=crop', alt: 'Régie son', label: 'Régie son' },
    { image: 'https://images.unsplash.com/photo-1627667049482-dd134b1f6366?fm=jpg&q=80&w=1000&auto=format&fit=crop', alt: "Micro à l'antenne", label: "Micro à l'antenne" },
    { image: 'https://images.unsplash.com/photo-1760895223972-57b1d858d77e?fm=jpg&q=80&w=1000&auto=format&fit=crop', alt: 'Signal à l\'antenne, On Air', label: 'En direct (On Air)' },
  ];

  readonly contactSubjects = [
    'Suggestion de programme',
    'Participer à une émission',
    'Partenariat / publicité',
    'Réclamation',
    'Autre',
  ];

  readonly contactForm = new FormGroup({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    phone: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    subject: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  readonly formSubmitted = signal(false);

  constructor() {
    const interval = setInterval(() => {
      this.currentSlide.update((i) => (i + 1) % this.heroSlides.length);
    }, 5000);
    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  onContactSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.formSubmitted.set(true);
    const resetTimeout = setTimeout(() => {
      this.formSubmitted.set(false);
      this.contactForm.reset({ fullName: '', phone: '', email: '', subject: '', message: '' });
    }, 3000);
    this.destroyRef.onDestroy(() => clearTimeout(resetTimeout));
  }
}
