import { Component, signal, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroStat {
  number: string;
  label: string;
}

interface TickerItem {
  text: string;
}

interface NewsArticle {
  id: string;
  image: string;
  alt: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

interface DemandeCard {
  icon: string;
  title: string;
  description: string;
}

interface NumberStat {
  icon: string;
  count: string;
  label: string;
}

interface ContactMethod {
  icon: string;
  title: string;
  lines: { text: string; href?: string }[];
}

@Component({
  selector: 'app-accueil-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ButtonModule, TagModule, FadeInDirective],
  templateUrl: './accueil-page.component.html',
  styleUrl: './accueil-page.component.scss',
})
export class AccueilPageComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly heroSlides: HeroSlide[] = [
    { src: 'assets/images/mairie-facadeè-1.jpg', alt: "Panorama d'Abidjan" },
    { src: 'assets/images/mairie-facade-2.jpg', alt: "Vue aérienne d'Abidjan" },
    { src: 'assets/images/mairie-facade-3.jpg', alt: 'Abidjan verdure' },
  ];
  readonly currentSlide = signal(0);

  readonly heroStats: HeroStat[] = [
    { number: '1.5M+', label: 'Habitants' },
    { number: '153 km²', label: 'Superficie' },
    { number: '32', label: 'Quartiers' },
  ];

  readonly tickerItems: TickerItem[] = [
    { text: 'Inscription aux écoles municipales ouverte pour la rentrée 2026-2027' },
    { text: "Travaux d'assainissement dans le quartier Sicobois — Avancement à 75%" },
    { text: 'Conseil municipal extraordinaire le 28 juillet 2026 à 10h' },
    { text: 'Programme de vaccination gratuit au Centre de Santé de Niangon' },
    { text: 'Fête de la commune : 15 août 2026 — Inscription aux stands dès maintenant' },
    { text: 'Nouveau centre culturel de Yopougon inauguré — Ouverture au public le 1er août' },
  ];

  readonly newsArticles: NewsArticle[] = [
    {
      id: 'chantiers-independance-2026',
      image: 'assets/images/actualites/1.jpg',
      alt: 'Nouvelle mairie centrale',
      category: 'Développement',
      date: '15 Juillet 2026',
      title: "J-20 : les chantiers s'accélèrent à Yopougon pour la fête de l'indépendance",
      excerpt:
        "À vingt jours de la Fête de l'Indépendance, le Ministre des Infrastructures et de l'Entretien Routier, M. Hien Yacouba Sié, a effectué une visite d'inspection des chantiers.",
    },
    {
      id: 'fete-independance-mobilisation-presse',
      image: 'assets/images/actualites/2.jpg',
      alt: 'Marché rénové',
      category: 'Mobilisation',
      date: '08 Juillet 2026',
      title: "Fête de l'Indépendance 2026 : le Député-Maire Adama Bictogo mobilise la presse",
      excerpt:
        "À quelques semaines de la célébration de la 66ᵉ Fête de l'Indépendance qui se tiendra cette année à Yopougon, le Député-Maire Adama Bictogo a rencontré la presse.",
    },
    {
      id: 'visite-terrain-premier-adjoint',
      image: 'assets/images/actualites/3.jpg',
      alt: 'Événement culturel',
      category: 'Inspection',
      date: '01 Juillet 2026',
      title: 'Visite de terrain du premier adjoint au Maire',
      excerpt:
        "Ce lundi 13 juillet 2026, le premier adjoint au maire de la commune M. Yaya Doumbia-Officiel s'est rendu à Siporex, Cosmos, Ficgayo et Selmer Tanti Mago pour voir de plus près l'avancée des travaux.",
    },
  ];

  readonly demandeCards: DemandeCard[] = [
    { icon: 'fa-file-alt', title: 'État Civil', description: "Demandez vos certificats de naissance, mariage, décès et autres documents d'état civil en ligne." },
    { icon: 'fa-book', title: 'Soutien Scolaire', description: 'Accédez aux programmes de soutien scolaire et inscrivez-vous aux cours et formations disponibles.' },
    { icon: 'fa-ring', title: 'Mariage', description: 'Déposez votre dossier de mariage et suivez votre demande en ligne facilement.' },
  ];

  readonly numberStats: NumberStat[] = [
    { icon: 'fa-users', count: '1 571 065', label: 'Habitants recensés' },
    { icon: 'fa-map-marker-alt', count: '32', label: 'Quartiers' },
    { icon: 'fa-building', count: '8', label: 'Arrondissements' },
    { icon: 'fa-home', count: '14', label: 'Villages historiques' },
  ];

  readonly contactMethods: ContactMethod[] = [
    { icon: 'fa-map-marker-alt', title: 'Adresse', lines: [{ text: 'Rue Princesse, Yopougon' }, { text: "Abidjan, Côte d'Ivoire" }] },
    { icon: 'fa-phone-alt', title: 'Téléphone', lines: [{ text: '+225 27 23 45 28 20', href: 'tel:+22527234528' }, { text: '+225 27 23 45 16 75', href: 'tel:+22527234516' }] },
    { icon: 'fa-envelope', title: 'Email', lines: [{ text: 'contact@yopougon.ci', href: 'mailto:contact@yopougon.ci' }] },
    { icon: 'fa-clock', title: "Horaires d'ouverture", lines: [{ text: 'Lundi - Vendredi : 7h30 - 16h00' }, { text: 'Samedi : 8h00 - 12h00' }] },
  ];

  readonly contactSubjects = [
    "Demande d'information",
    'État civil',
    'Urbanisme',
    'Réclamation',
    'Suggestion',
    'Autre',
  ];

  readonly contactForm = new FormGroup({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
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
      this.contactForm.reset({ fullName: '', email: '', subject: '', message: '' });
    }, 3000);
    this.destroyRef.onDestroy(() => clearTimeout(resetTimeout));
  }
}
