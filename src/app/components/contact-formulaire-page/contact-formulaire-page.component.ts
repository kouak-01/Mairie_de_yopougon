import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { signal } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface QuickCard {
  icon: string;
  title: string;
  lines: { text: string; href?: string }[];
}

interface ContactItem {
  icon: string;
  title: string;
  lines: { text: string; href?: string }[];
}

interface DirectoryEntry {
  icon: string;
  title: string;
  links: { label: string; href?: string; routerLink?: string; fragment?: string }[];
}

interface AccessPoint {
  icon: string;
  title: string;
  description: string;
}

/**
 * Page dédiée à formulaire-contact.html (site source) :
 * cartes rapides, formulaire de contact, répertoire des services,
 * plan d'accès, vidéo de présentation et bandeau réseaux sociaux.
 */
@Component({
  selector: 'app-contact-formulaire-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FadeInDirective],
  templateUrl: './contact-formulaire-page.component.html',
  styleUrl: './contact-formulaire-page.component.scss',
})
export class ContactFormulairePageComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly sanitizer = inject(DomSanitizer);

  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    "https://www.google.com/maps?q=Mairie+de+Yopougon,+Abidjan,+Côte+d'Ivoire&output=embed"
  );

  readonly videoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/hlNHpg6ngMo'
  );

  // ===== QUICK CONTACT CARDS =====
  readonly quickCards: QuickCard[] = [
    { icon: 'fa-map-marker-alt', title: 'Adresse', lines: [{ text: 'Rue Princesse, Yopougon' }, { text: "Abidjan, Côte d'Ivoire" }] },
    {
      icon: 'fa-phone-alt',
      title: 'Téléphone',
      lines: [
        { text: '+225 27 23 45 28 20', href: 'tel:+22527234528' },
        { text: '+225 27 23 45 16 75', href: 'tel:+22527234516' },
      ],
    },
    { icon: 'fa-envelope', title: 'Email', lines: [{ text: 'contact@yopougon.ci', href: 'mailto:contact@yopougon.ci' }] },
    { icon: 'fa-clock', title: 'Horaires', lines: [{ text: 'Lun - Ven : 7h30 - 16h00' }, { text: 'Samedi : 8h00 - 12h00' }] },
  ];

  // ===== CONTACT INFO (colonne de gauche) =====
  readonly contactItems: ContactItem[] = [
    { icon: 'fa-map-marker-alt', title: 'Adresse', lines: [{ text: 'Rue Princesse, Yopougon' }, { text: "Abidjan, Côte d'Ivoire" }] },
    {
      icon: 'fa-phone-alt',
      title: 'Téléphone',
      lines: [
        { text: '+225 27 23 45 28 20', href: 'tel:+22527234528' },
        { text: '+225 27 23 45 16 75', href: 'tel:+22527234516' },
      ],
    },
    { icon: 'fa-envelope', title: 'Email', lines: [{ text: 'contact@yopougon.ci', href: 'mailto:contact@yopougon.ci' }] },
    { icon: 'fa-clock', title: "Horaires d'ouverture", lines: [{ text: 'Lundi - Vendredi : 7h30 - 16h00' }, { text: 'Samedi : 8h00 - 12h00' }] },
  ];

  // ===== FORMULAIRE DE CONTACT =====
  readonly contactServices = [
    'Cabinet du Maire',
    'Secrétariat Général',
    'État civil',
    'Urbanisme',
    'Service Financier',
    'Service Socioculturel',
    'Service Technique',
    'Autre',
  ];

  readonly contactSubjects = [
    "Demande d'information",
    'Réclamation',
    'Suggestion',
    'Rendez-vous',
    'Autre',
  ];

  readonly contactForm = new FormGroup({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    phone: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    service: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    subject: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    consent: new FormControl(false, { nonNullable: true, validators: [Validators.requiredTrue] }),
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
      this.contactForm.reset({ fullName: '', phone: '', email: '', service: '', subject: '', message: '', consent: false });
    }, 3000);
    this.destroyRef.onDestroy(() => clearTimeout(resetTimeout));
  }

  // ===== RÉPERTOIRE DES SERVICES =====
  readonly directoryEntries: DirectoryEntry[] = [
    { icon: 'fa-headset', title: 'Standard général', links: [{ label: '+225 27 23 45 28 20', href: 'tel:+22527234528' }, { label: '+225 27 23 45 16 75', href: 'tel:+22527234516' }] },
    { icon: 'fa-user-tie', title: 'Cabinet du Maire', links: [{ label: '+225 27 23 45 65 00', href: 'tel:+22527234565' }] },
    { icon: 'fa-sitemap', title: 'Secrétariat Général', links: [{ label: '+225 27 23 45 20 17', href: 'tel:+22527234520' }] },
    { icon: 'fa-coins', title: 'Service Financier', links: [{ label: '+225 27 23 50 12 21', href: 'tel:+22527235012' }] },
    { icon: 'fa-people-group', title: 'Service Socioculturel', links: [{ label: '+225 27 23 52 20 66', href: 'tel:+22527235220' }] },
    { icon: 'fa-drafting-compass', title: 'Service Technique', links: [{ label: '+225 27 23 50 32 19', href: 'tel:+22527235032' }] },
    { icon: 'fa-radio', title: 'Radio Yopougon', links: [{ label: 'Voir la page dédiée', routerLink: '/radio' }] },
    { icon: 'fa-file-signature', title: 'État civil', links: [{ label: 'Consulter la FAQ', routerLink: '/contact/faq' }] },
    { icon: 'fa-envelope-open-text', title: 'Email général', links: [{ label: 'contact@yopougon.ci', href: 'mailto:contact@yopougon.ci' }] },
  ];

  // ===== MAP + ACCESS =====
  readonly accessPoints: AccessPoint[] = [
    { icon: 'fa-car', title: 'En voiture', description: 'Accès direct depuis le boulevard principal, parking visiteurs disponible sur place.' },
    { icon: 'fa-bus', title: 'En transport en commun', description: 'Lignes de bus SOTRA et gbaka desservant Yopougon Rue Princesse, arrêt à proximité immédiate de la mairie.' },
    { icon: 'fa-wheelchair', title: 'Accessibilité', description: 'Rampes d\'accès et personnel d\'accueil disponible pour orienter les personnes à mobilité réduite.' },
  ];
}
