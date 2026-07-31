import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface AboutFeature {
  icon: string;
  label: string;
}

interface CardItem {
  icon: string;
  title: string;
  description: string;
}

interface AccueilInfoItem {
  icon: string;
  title: string;
  lines: string[];
}

@Component({
  selector: 'app-secretariat-general-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './secretariat-general-page.component.html',
  styleUrl: './secretariat-general-page.component.scss',
})
export class SecretariatGeneralPageComponent {
  readonly aboutFeatures: AboutFeature[] = [
    { icon: 'fa-sitemap', label: 'Coordination des services' },
    { icon: 'fa-tasks', label: 'Suivi des décisions' },
    { icon: 'fa-users-cog', label: 'Gestion des ressources humaines' },
    { icon: 'fa-lightbulb', label: 'Modernisation administrative' },
  ];

  readonly missionItems: CardItem[] = [
    { icon: 'fa-sitemap', title: 'Coordination des services', description: "Assure la cohérence et la coordination de l'ensemble des directions et services municipaux." },
    { icon: 'fa-gavel', title: 'Suivi des délibérations', description: 'Veille à la bonne exécution des décisions du Conseil municipal et des arrêtés du Maire.' },
    { icon: 'fa-folder-open', title: 'Gestion administrative', description: "Instruit, classe et archive l'ensemble des dossiers et actes administratifs de la commune." },
    { icon: 'fa-users-cog', title: 'Ressources humaines', description: 'Supervise la gestion administrative du personnel municipal en lien avec la DRH.' },
    { icon: 'fa-handshake', title: 'Relations institutionnelles', description: "Entretient les relations avec les partenaires institutionnels, l'État et les organismes de développement." },
    { icon: 'fa-calendar-check', title: 'Audiences & cérémonies', description: 'Organise les audiences du Maire ainsi que les cérémonies et événements officiels de la commune.' },
    { icon: 'fa-file-signature', title: 'Instruction des dossiers', description: 'Prépare et instruit les dossiers soumis à la signature du Maire ou à l’examen du Conseil.' },
    { icon: 'fa-shield-alt', title: 'Veille juridique', description: 'Assure une veille réglementaire pour sécuriser les actes et procédures de la Mairie.' },
  ];

  readonly directionItems: CardItem[] = [
    { icon: 'fa-file-invoice-dollar', title: 'DAAF', description: 'Direction des Affaires Administratives et Financières : budget, comptabilité et moyens généraux.' },
    { icon: 'fa-user-tie', title: 'DRH', description: 'Direction des Ressources Humaines : gestion des carrières et de la formation du personnel municipal.' },
    { icon: 'fa-id-card', title: 'État Civil & Affaires Sociales', description: 'Actes de naissance, mariage, décès et accompagnement social des populations.' },
    { icon: 'fa-road', title: 'Services Techniques', description: 'Voirie, bâtiments communaux, hygiène et cadre de vie.' },
    { icon: 'fa-bullhorn', title: 'Communication', description: 'Information municipale, relations publiques et animation des supports numériques.' },
    { icon: 'fa-laptop-code', title: "Systèmes d'Information", description: 'Modernisation, dématérialisation des démarches et sécurité numérique.' },
  ];

  readonly accueilInfoItems: AccueilInfoItem[] = [
    { icon: 'fa-clock', title: "Horaires d'ouverture", lines: ['Lundi - Vendredi : 7h30 - 16h00', 'Continu, sans interruption'] },
    { icon: 'fa-map-marker-alt', title: 'Localisation', lines: ['Hôtel de Ville, Rue Princesse', 'Yopougon, Abidjan'] },
    { icon: 'fa-phone-alt', title: 'Contact direct', lines: ['+225 27 23 45 28 20', 'contact@yopougon.ci'] },
    { icon: 'fa-file-alt', title: 'Pièces à fournir', lines: ["Selon la nature de la demande : pièce d'identité et justificatif de domicile généralement requis."] },
    { icon: 'fa-comments', title: "Langues d'accueil", lines: ['Français, et principales langues locales de la commune.'] },
    { icon: 'fa-wheelchair', title: 'Accessibilité', lines: ["Accueil rez-de-chaussée facilitant l'accès aux personnes à mobilité réduite."] },
  ];
}
