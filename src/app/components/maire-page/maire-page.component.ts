import { Component, signal, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface HeroStat {
  number: string;
  label: string;
}

interface BioHighlight {
  icon: string;
  title: string;
  description: string;
}

interface ParcoursItem {
  icon: string;
  title: string;
  period: string;
  description: string;
}

interface AchievementItem {
  icon: string;
  title: string;
  description: string;
}

interface ContactMethod {
  icon: string;
  title: string;
  lines: { text: string; href?: string }[];
}

@Component({
  selector: 'app-maire-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ButtonModule, FadeInDirective],
  templateUrl: './maire-page.component.html',
  styleUrl: './maire-page.component.scss',
})
export class MairePageComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly heroStats: HeroStat[] = [
    { number: '30+', label: "Années d'expérience" },
    { number: '100+', label: 'Projets réalisés' },
  ];

  readonly bioParagraphs: string[] = [
    "Né le 14 décembre 1962 à Agboville, Adama Bictogo est un homme d'État, entrepreneur et visionnaire ivoirien de renommée internationale.",
    "Titulaire d'un DEUG II en économie appliquée de l'Université de Créteil Paris XII et d'un Master en stratégie et administration d'entreprise de l'Institut Supérieur de Gestion de Paris, il combine une solide formation académique avec une expérience pratique exceptionnelle.",
    "Fondateur et PDG du groupe SNEDAI, un conglomérat panafricain multi-sectoriel spécialisé dans les technologies, le BTP, l'immobilier, l'énergie et le transport, Adama Bictogo a bâti un empire entrepreneurial comptant plus de 1000 employés répartis dans 14 filiales en Côte d'Ivoire et en Afrique de l'Ouest.",
    "Au-delà de ses succès commerciaux, il s'est distingué par son engagement politique et son dévouement au service public. Commandeur dans l'ordre national de Côte d'Ivoire (2014) et récipiendaire du prix de meilleur homme d'affaires et homme politique (2016), il incarne les valeurs de transparence, d'efficacité et d'intégrité.",
  ];

  readonly bioHighlights: BioHighlight[] = [
    { icon: 'fa-graduation-cap', title: "Formation d'Excellence", description: 'Diplômé des institutions prestigieuses de Paris et de France' },
    { icon: 'fa-building', title: 'Entrepreneur Visionnaire', description: 'Fondateur du groupe SNEDAI, leader panafricain multi-sectoriel' },
    { icon: 'fa-handshake', title: 'Négociateur Réputé', description: "Artisan de la paix et de la réconciliation en Côte d'Ivoire" },
    { icon: 'fa-city', title: 'Maire de Yopougon', description: "Élu avec 93,22% des voix pour servir 1,5 million d'habitants" },
  ];

  readonly parcoursItems: ParcoursItem[] = [
    {
      icon: 'fa-briefcase',
      title: 'Secteur Privé (1990-2007)',
      period: 'Directeur & PDG',
      description:
        "Débute sa carrière comme Directeur des départements de distribution à la SCOA, puis fonde et dirige la SDPA. Consultant du groupe Bolloré et PDG de I.S.D. Holding Afrique, il accumule une expertise diversifiée en gestion d'entreprise et stratégie commerciale.",
    },
    {
      icon: 'fa-industry',
      title: 'Fondateur du Groupe SNEDAI (2007)',
      period: 'PDG & Visionnaire',
      description:
        "Crée la Société Nationale d'Édition de Documents Administratifs et d'Identification, spécialisée en biométrie. Transforme l'entreprise en conglomérat multi-sectoriel opérant dans les technologies, le BTP, l'énergie et le transport, avec plus de 1000 employés.",
    },
    {
      icon: 'fa-handshake',
      title: 'Conseiller Spécial (2005-2008)',
      period: 'Diplomate & Négociateur',
      description:
        "Conseiller Spécial du Ministre d'État, puis à la Primature en charge de la diplomatie et des relations internationales. Joue un rôle crucial dans les négociations de paix et la résolution des conflits politiques en Côte d'Ivoire.",
    },
    {
      icon: 'fa-landmark',
      title: "Ministre & Homme d'État (2011-2023)",
      period: 'Ministre & Président',
      description:
        "Ministre de l'Intégration Africaine (2011-2012), Député d'Agboville depuis 2011, Vice-Président puis Président de l'Assemblée Nationale (2022-2026). Élu Maire de Yopougon en 2023 avec un mandat de développement inclusif.",
    },
    {
      icon: 'fa-city',
      title: 'Maire de Yopougon (2023-2028)',
      period: 'Élu avec 93,22% des voix',
      description:
        "Élu Maire de Yopougon le 2 septembre 2023, il s'engage à transformer la plus grande commune de Côte d'Ivoire. Ses priorités : infrastructure, éducation, santé, emploi et développement durable pour les 1,5 million d'habitants.",
    },
    {
      icon: 'fa-trophy',
      title: 'Distinctions & Reconnaissances',
      period: 'Honneurs Nationaux',
      description:
        "Commandeur dans l'ordre national de Côte d'Ivoire (2014). Prix de meilleur homme d'affaires et homme politique (2016). Reconnu pour son engagement envers le développement économique et social de la Côte d'Ivoire.",
    },
  ];

  readonly achievementItems: AchievementItem[] = [
    {
      icon: 'fa-building',
      title: 'Infrastructure & Développement',
      description:
        'Lancement de projets de construction de 120 logements pour les familles démunies, rénovation des espaces publics, modernisation des infrastructures municipales et amélioration de la qualité de vie.',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Éducation & Formation',
      description:
        "Expansion des écoles municipales, programmes de soutien scolaire gratuit, bourses pour étudiants méritants et initiatives de formation professionnelle pour l'insertion des jeunes.",
    },
    {
      icon: 'fa-leaf',
      title: 'Environnement & Hygiène',
      description:
        'Opérations massives de curage des caniveaux, programmes de nettoyage communautaire, gestion des déchets et initiatives de développement durable pour une Yopougon plus propre et verte.',
    },
    {
      icon: 'fa-heartbeat',
      title: 'Santé & Bien-être',
      description:
        'Programmes de vaccination gratuite, amélioration des centres de santé, initiatives de prévention sanitaire et accès aux soins de qualité pour tous les Yopougonnais.',
    },
    {
      icon: 'fa-briefcase',
      title: 'Emploi & Économie',
      description:
        "Création d'emplois locaux, soutien aux petites et moyennes entreprises, promotion de l'entrepreneuriat et développement économique inclusif pour la prospérité commune.",
    },
    {
      icon: 'fa-handshake',
      title: 'Paix & Réconciliation',
      description:
        "Initiatives de dialogue communautaire, promotion de la cohésion sociale, médiation dans les conflits et construction d'une Yopougon unie et solidaire.",
    },
  ];

  readonly visionQuote =
    "Ensemble, construisons un Yopougon moderne, inclusif et prospère, à la hauteur des ambitions de sa population dynamique. Notre vision est celle d'une commune éducatrice et créative, au service de la cohésion sociale.";

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
