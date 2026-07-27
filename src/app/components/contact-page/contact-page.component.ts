import { Component, signal, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface CoordCard {
  icon: string;
  title: string;
  lines: { text: string; href?: string }[];
}

interface SocialCard {
  icon: string;
  iconType: 'fab' | 'fas';
  color: string;
  title: string;
  description: string;
  followLabel: string;
}

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ButtonModule, FadeInDirective],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly sanitizer = inject(DomSanitizer);

  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123!2d-4.0825!3d5.3489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjAnNTYuMCJOIDTCsDAwJzQyLjAiVw!5e0!3m2!1sfr!2sci!4v1234567890'
  );

  readonly coordCards: CoordCard[] = [
    { icon: 'fa-map-marker-alt', title: 'Adresse', lines: [{ text: 'Rue Princesse, Yopougon' }, { text: "Abidjan, Côte d'Ivoire" }] },
    { icon: 'fa-phone-alt', title: 'Téléphone', lines: [{ text: '+225 27 23 45 28 20', href: 'tel:+22527234528' }, { text: '+225 27 23 45 16 75', href: 'tel:+22527234516' }] },
    { icon: 'fa-envelope', title: 'Email', lines: [{ text: 'contact@yopougon.ci', href: 'mailto:contact@yopougon.ci' }] },
    { icon: 'fa-clock', title: "Horaires d'ouverture", lines: [{ text: 'Lundi - Vendredi : 7h30 - 16h00' }, { text: 'Samedi : 8h00 - 12h00' }] },
  ];

  readonly responseHighlights = [
    { icon: 'fa-bolt', title: 'Réponse rapide', description: 'Sous 48h ouvrées en moyenne' },
    { icon: 'fa-user-shield', title: 'Message confidentiel', description: 'Vos informations restent protégées' },
    { icon: 'fa-people-carry', title: 'Équipe dédiée', description: 'Un interlocuteur pour chaque demande' },
  ];

  readonly socialCards: SocialCard[] = [
    { icon: 'fa-facebook-f', iconType: 'fab', color: '#1877F2', title: 'Facebook', description: 'Actualités et événements de la commune', followLabel: 'Suivre' },
    { icon: 'fa-twitter', iconType: 'fab', color: '#1DA1F2', title: 'Twitter / X', description: 'Communiqués et alertes en direct', followLabel: 'Suivre' },
    { icon: 'fa-instagram', iconType: 'fab', color: '#E1306C', title: 'Instagram', description: 'Yopougon en images et en coulisses', followLabel: 'Suivre' },
    { icon: 'fa-youtube', iconType: 'fab', color: '#FF0000', title: 'YouTube', description: 'Reportages et vidéos officielles', followLabel: "S'abonner" },
  ];

  readonly faqItems: FaqItem[] = [
    {
      id: 'etat-civil',
      number: '01',
      question: 'Comment obtenir un acte de naissance ou de mariage ?',
      answer:
        "Vous pouvez déposer votre demande directement en ligne via la rubrique « Demande en Ligne » ou vous présenter au guichet État Civil de la mairie muni d'une pièce d'identité. Le délai moyen de délivrance est de 48 à 72 heures.",
    },
    {
      id: 'horaires',
      number: '02',
      question: "Quels sont les horaires d'ouverture de la mairie ?",
      answer:
        'La mairie est ouverte du lundi au vendredi de 7h30 à 16h00, et le samedi de 8h00 à 12h00 pour certains services d\'état civil.',
    },
    {
      id: 'permis',
      number: '03',
      question: 'Comment déposer un permis de construire ?',
      answer:
        'Le dossier de permis de construire se dépose au service Urbanisme de la mairie, accompagné du plan de situation, du plan de masse et des pièces justificatives de propriété. Un accusé de dépôt vous sera remis immédiatement.',
    },
    {
      id: 'suivi',
      number: '04',
      question: "Puis-je suivre l'avancement de ma demande en ligne ?",
      answer:
        'Oui. Chaque demande effectuée via nos services en ligne génère un numéro de suivi qui vous permet de consulter l\'état d\'avancement de votre dossier à tout moment.',
    },
    {
      id: 'signalement',
      number: '05',
      question: 'Comment signaler un problème dans mon quartier ?',
      answer:
        "Utilisez le formulaire de contact ci-dessus en sélectionnant l'objet « Réclamation », ou contactez-nous directement par téléphone. Votre signalement sera transmis à la direction technique concernée.",
    },
  ];

  readonly openFaqId = signal<string | null>(null);

  toggleFaq(id: string): void {
    this.openFaqId.update((current) => (current === id ? null : id));
  }

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
