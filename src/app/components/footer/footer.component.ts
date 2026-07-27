import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  link: string;
  fragment?: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // 'full' = pied de page institutionnel complet (utilisé par la plupart des pages).
  // 'simple' = version allégée (copyright uniquement), utilisée par la page Le Maire
  // dans le site source (footer.simple-footer).
  readonly variant = input<'full' | 'simple'>('full');

  readonly currentYear = new Date().getFullYear();

  readonly quickLinks: FooterLink[] = [
    { label: 'Accueil', link: '/' },
    { label: 'Services municipaux', link: '/', fragment: 'demande' },
    { label: 'État civil', link: '/', fragment: 'demande' },
    { label: 'Urbanisme', link: '/en-construction' },
    { label: 'Actualités', link: '/', fragment: 'actualites' },
    { label: 'Marchés publics', link: '/en-construction' },
  ];

  readonly infoLinks: FooterLink[] = [
    { label: 'Le Maire', link: '/maire' },
    { label: 'Conseil municipal', link: '/en-construction' },
    { label: 'Budget communal', link: '/en-construction' },
    { label: 'Délibérations', link: '/en-construction' },
    { label: 'Organigramme', link: '/en-construction' },
    { label: 'Historique', link: '/en-construction' },
  ];

  readonly bottomLinks: FooterLink[] = [
    { label: 'Mentions légales', link: '/en-construction' },
    { label: 'Politique de confidentialité', link: '/en-construction' },
    { label: 'Plan du site', link: '/en-construction' },
  ];
}
