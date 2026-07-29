import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface AboutFeature {
  icon: string;
  label: string;
}

interface NumberStat {
  icon: string;
  count: string;
  label: string;
}

interface AdjointItem {
  icon: string;
  title: string;
  description: string;
}

interface CommissionItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-municipalite-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './municipalite-page.component.html',
  styleUrl: './municipalite-page.component.scss',
})
export class MunicipalitePageComponent {
  readonly aboutFeatures: AboutFeature[] = [
    { icon: 'fa-landmark', label: 'Conseil municipal élu' },
    { icon: 'fa-user-tie', label: 'Maire & 8 adjoints' },
    { icon: 'fa-calendar-alt', label: 'Mandat de 5 ans' },
    { icon: 'fa-people-carry', label: 'Gouvernance participative' },
  ];

  readonly numberStats: NumberStat[] = [
    { icon: 'fa-users', count: '75', label: 'Conseillers municipaux' },
    { icon: 'fa-user-tie', count: '8', label: 'Adjoints au Maire' },
    { icon: 'fa-map', count: '32', label: 'Quartiers représentés' },
    { icon: 'fa-calendar-check', count: '5 ans', label: 'Durée du mandat' },
  ];

  readonly adjointItems: AdjointItem[] = [
    { icon: 'fa-hand-holding-heart', title: 'Affaires sociales', description: 'Solidarité, action sociale et accompagnement des populations vulnérables.' },
    { icon: 'fa-coins', title: 'Finances & Budget', description: 'Élaboration et exécution du budget communal.' },
    { icon: 'fa-city', title: 'Urbanisme & Habitat', description: 'Planification urbaine, permis de construire et cadre de vie.' },
    { icon: 'fa-futbol', title: 'Jeunesse & Sports', description: 'Insertion des jeunes, animation sportive et culturelle.' },
    { icon: 'fa-leaf', title: 'Environnement & Salubrité', description: 'Assainissement, gestion des déchets et cadre de vie durable.' },
    { icon: 'fa-shield-alt', title: 'Sécurité & Hygiène', description: 'Prévention, sécurité publique et hygiène communale.' },
    { icon: 'fa-graduation-cap', title: 'Éducation & Santé', description: 'Appui aux établissements scolaires et sanitaires de proximité.' },
    { icon: 'fa-theater-masks', title: 'Culture & Vie associative', description: 'Promotion culturelle et soutien aux associations locales.' },
  ];

  readonly commissionItems: CommissionItem[] = [
    { icon: 'fa-file-invoice-dollar', title: 'Commission des Finances', description: 'Examine le budget, les comptes administratifs et la fiscalité locale.' },
    { icon: 'fa-drafting-compass', title: "Commission de l'Urbanisme", description: "Étudie les projets d'aménagement, de voirie et d'habitat." },
    { icon: 'fa-hands-helping', title: 'Commission des Affaires Sociales', description: 'Traite les questions de solidarité, de santé et d’action sociale.' },
    { icon: 'fa-book-reader', title: 'Commission Éducation & Culture', description: 'Suit les questions scolaires, sportives et culturelles.' },
    { icon: 'fa-recycle', title: 'Commission Environnement', description: 'Veille à la salubrité, à l’assainissement et au cadre de vie.' },
    { icon: 'fa-balance-scale', title: 'Commission Juridique', description: 'Examine la légalité des actes et délibérations du Conseil.' },
  ];
}
