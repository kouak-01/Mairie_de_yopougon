import {
  Component,
  signal,
  computed,
  HostListener,
  ElementRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavItem } from '../../models/nav-item.model';

const MOBILE_BREAKPOINT = 900;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly scrolled = signal(false);
  readonly mobileNavOpen = signal(false);
  readonly openL1Id = signal<string | null>(null);
  readonly openL2Id = signal<string | null>(null);
  readonly isMobileView = signal(this.checkMobile());

  readonly hamburgerExpanded = computed(() => this.mobileNavOpen());

  readonly navItems: NavItem[] = [
    {
      id: 'ma-mairie',
      label: 'Ma Mairie',
      children: [
        {
          id: 'le-maire',
          label: 'Le Maire',
          icon: 'fa-user-tie',
          children: [
            { id: 'mot-du-maire', label: 'Mot du Maire', link: '/maire', fragment: 'maire' },
            { id: 'biographie', label: 'Biographie', link: '/maire', fragment: 'biographie' },
          ],
        },
        {
          id: 'organisation',
          label: 'Organisation politique et administrative',
          icon: 'fa-sitemap',
          children: [
            { id: 'secretariat-general', label: 'Secrétariat Général', link: '/secretariat-general' },
            { id: 'municipalite', label: 'La Municipalité', link: '/municipalite' },
            { id: 'conseil-municipal', label: 'Le Conseil Municipal', link: '/conseil-municipal' },
            { id: 'commissions', label: 'Commissions du Conseil Municipal', link: '/commissions-conseil-municipal' },
            { id: 'directions', label: 'Directions Techniques et Administratives', link: '/directions-techniques-administratives' },
          ],
        },
        {
          id: 'actualites-commune',
          label: 'Actualités de la commune',
          icon: 'fa-newspaper',
          children: [
            { id: 'actualites', label: 'Actualités', link: '/actualites' },
            { id: 'videotheque', label: 'Vidéothèque', link: '/actualites', fragment: 'videotheque' },
            { id: 'opportunites', label: "Opportunités d'affaires", link: '/attractivite-commune' },
            { id: 'agenda', label: 'Agenda', link: '/agenda' },
          ],
        },
        { id: 'nos-projets', label: 'Nos Projets', icon: 'fa-diagram-project', link: '/nos-projets' },
      ],
    },
    { id: 'services-en-ligne', label: 'Services en ligne', externalLink: 'https://guichet.yopougon.ci/#/connexion' },
    {
      id: 'radio-yopougon',
      label: 'Radio Yopougon',
      children: [
        { id: 'radio-info', label: 'Informations générales', icon: 'fa-circle-info', link: '/radio', fragment: 'info' },
        { id: 'radio-programme', label: 'Programme de la radio', icon: 'fa-list', link: '/radio', fragment: 'programme' },
        { id: 'radio-vacances', label: 'Spécial vacances', icon: 'fa-umbrella-beach', link: '/radio', fragment: 'vacances' },
        { id: 'radio-facebook', label: 'Facebook', icon: 'fa-facebook', iconType: 'fab', link: '/radio', fragment: 'facebook' },
      ],
    },
    {
      id: 'yop-ma-commune',
      label: 'Yop, Ma Commune',
      children: [
        { id: 'histoire', label: 'Histoire', icon: 'fa-scroll', link: '/histoire' },
        { id: 'histoire-politique', label: 'Histoire politique', icon: 'fa-landmark', link: '/histoire', fragment: 'maires' },
        { id: 'geographie', label: 'Géographie', icon: 'fa-map', link: '/geographie' },
        { id: 'gouvernance', label: 'Gouvernance participative', icon: 'fa-people-group', link: '/gouvernance-participative' },
        { id: 'economie', label: 'Économie', icon: 'fa-chart-line', link: '/economie' },
        { id: 'emplois', label: 'Emplois', icon: 'fa-briefcase', link: '/emploi-recrutement' },
        { id: 'sport-culture', label: 'Sport et culture', icon: 'fa-futbol', link: '/sport-et-culture' },
        { id: 'tourisme', label: 'Tourisme et loisirs', icon: 'fa-umbrella-beach', link: '/tourisme-et-loisirs' },
      ],
    },
    {
      id: 'contacts',
      label: 'Contacts',
      children: [
        { id: 'coordonnees', label: "Coordonnées et plans d'accès", icon: 'fa-map-marker-alt', link: '/contact', fragment: 'coordonnees' },
        { id: 'formulaire', label: 'Formulaire de contact', icon: 'fa-envelope-open-text', link: '/contact', fragment: 'formulaire' },
        { id: 'reseaux', label: 'Réseaux sociaux', icon: 'fa-share-nodes', link: '/contact', fragment: 'reseaux' },
        { id: 'faq', label: 'FAQ', icon: 'fa-circle-question', link: '/contact', fragment: 'faq' },
      ],
    },
    { id: 'demarches', label: 'Démarches en ligne', externalLink: 'https://guichet.yopougon.ci/#/connexion', cta: true },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    const mobile = this.checkMobile();
    this.isMobileView.set(mobile);
    if (!mobile) {
      this.closeMobileNav();
    }
  }

  private checkMobile(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeAllDropdowns();
    }
  }

  toggleMobileNav(): void {
    this.mobileNavOpen.update((open) => !open);
    document.body.style.overflow = this.mobileNavOpen() ? 'hidden' : '';
    if (!this.mobileNavOpen()) {
      this.closeAllDropdowns();
    }
  }

  closeMobileNav(): void {
    this.mobileNavOpen.set(false);
    document.body.style.overflow = '';
    this.closeAllDropdowns();
  }

  isL1Open(item: NavItem): boolean {
    return this.openL1Id() === item.id;
  }

  toggleL1(item: NavItem, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = this.isL1Open(item);
    this.openL2Id.set(null);
    this.openL1Id.set(isOpen ? null : item.id);
  }

  onL1MouseEnter(item: NavItem): void {
    if (!this.isMobileView()) {
      this.openL2Id.set(null);
      this.openL1Id.set(item.id);
    }
  }

  onL1MouseLeave(): void {
    if (!this.isMobileView()) {
      this.openL1Id.set(null);
      this.openL2Id.set(null);
    }
  }

  isL2Open(item: NavItem): boolean {
    return this.openL2Id() === item.id;
  }

  toggleL2(item: NavItem, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = this.isL2Open(item);
    this.openL2Id.set(isOpen ? null : item.id);
  }

  onL2MouseEnter(item: NavItem): void {
    if (!this.isMobileView() && item.children?.length) {
      this.openL2Id.set(item.id);
    }
  }

  private closeAllDropdowns(): void {
    this.openL1Id.set(null);
    this.openL2Id.set(null);
  }

  onLeafLinkClick(): void {
    if (this.isMobileView()) {
      this.closeMobileNav();
    } else {
      this.closeAllDropdowns();
    }
  }
}
