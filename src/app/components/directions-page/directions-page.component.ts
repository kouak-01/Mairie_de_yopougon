import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface BannerPill {
  num: string;
  label: string;
}

interface DirectionCard {
  icon: string;
  title: string;
  mission: string;
  attributions: string[];
  email: string;
}

@Component({
  selector: 'app-directions-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './directions-page.component.html',
  styleUrl: './directions-page.component.scss',
})
export class DirectionsPageComponent {
  readonly bannerPills: BannerPill[] = [
    { num: '12', label: 'Directions' },
    { num: '2', label: 'Pôles (Admin. / Technique)' },
    { num: '32', label: 'Quartiers couverts' },
  ];

  readonly administrativeDirections: DirectionCard[] = [
    {
      icon: 'fa-user-tie',
      title: 'Secrétariat Général',
      mission: "Coordonne l'ensemble des services municipaux et veille à l'exécution des décisions du Maire et du Conseil municipal.",
      attributions: ['Coordination des directions', 'Suivi des délibérations', 'Relations inter-institutionnelles'],
      email: 'sg@yopougon.ci',
    },
    {
      icon: 'fa-balance-scale',
      title: 'Direction des Affaires Administratives et Juridiques (DAAJ)',
      mission: 'Assure la sécurité juridique des actes municipaux et le suivi du contentieux.',
      attributions: ['Rédaction et contrôle des actes', 'Gestion du contentieux', 'Archives municipales'],
      email: 'daaj@yopougon.ci',
    },
    {
      icon: 'fa-users-cog',
      title: 'Direction des Ressources Humaines (DRH)',
      mission: 'Gère la carrière, la formation et le bien-être du personnel municipal.',
      attributions: ['Recrutement et carrières', 'Formation continue', 'Paie et affaires sociales du personnel'],
      email: 'drh@yopougon.ci',
    },
    {
      icon: 'fa-coins',
      title: 'Direction des Affaires Financières et du Budget (DAF)',
      mission: 'Élabore et exécute le budget communal, et supervise les recettes et dépenses.',
      attributions: ['Élaboration budgétaire', 'Recouvrement des recettes', 'Comptabilité municipale'],
      email: 'finances@yopougon.ci',
    },
    {
      icon: 'fa-id-card',
      title: "Direction de l'État Civil et des Affaires Sociales",
      mission: 'Délivre les actes d’état civil et accompagne les familles vulnérables.',
      attributions: ['Naissances, mariages, décès', "Légalisations et copies d'actes", 'Action sociale de proximité'],
      email: 'etatcivil@yopougon.ci',
    },
    {
      icon: 'fa-bullhorn',
      title: 'Direction de la Communication et des Relations Publiques',
      mission: "Valorise l'action municipale et anime les canaux d'information de la commune.",
      attributions: ['Communication institutionnelle', 'Réseaux sociaux et Radio Yopougon', 'Relations presse et protocole'],
      email: 'communication@yopougon.ci',
    },
  ];

  readonly technicalDirections: DirectionCard[] = [
    {
      icon: 'fa-city',
      title: "Direction de l'Urbanisme, de l'Habitat et du Cadre de Vie",
      mission: "Planifie l'aménagement du territoire communal et instruit les autorisations d'urbanisme.",
      attributions: ['Permis de construire et lotissements', "Plans d'aménagement urbain", "Lutte contre l'habitat anarchique"],
      email: 'urbanisme@yopougon.ci',
    },
    {
      icon: 'fa-road',
      title: 'Direction des Services Techniques et des Infrastructures',
      mission: 'Réalise et entretient la voirie, les bâtiments publics et les équipements municipaux.',
      attributions: ['Voirie et éclairage public', 'Bâtiments et équipements communaux', 'Suivi des travaux publics'],
      email: 'techniques@yopougon.ci',
    },
    {
      icon: 'fa-leaf',
      title: "Direction de l'Environnement, de l'Assainissement et du Développement Durable",
      mission: 'Assure la salubrité, la gestion des déchets et la protection du cadre de vie.',
      attributions: ['Pré-collecte et gestion des déchets', 'Assainissement et drainage', 'Espaces verts et reboisement'],
      email: 'environnement@yopougon.ci',
    },
    {
      icon: 'fa-network-wired',
      title: "Direction des Systèmes d'Information et du Numérique",
      mission: 'Modernise les outils numériques de la mairie et déploie les services en ligne aux citoyens.',
      attributions: ['Services en ligne et e-administration', 'Infrastructure informatique', 'Sécurité des données municipales'],
      email: 'numerique@yopougon.ci',
    },
    {
      icon: 'fa-file-invoice',
      title: 'Direction des Marchés Publics et des Équipements',
      mission: 'Organise et contrôle les procédures de passation des marchés publics communaux.',
      attributions: ["Appels d'offres et contrats", 'Suivi des prestataires', "Gestion du parc d'équipements"],
      email: 'marches.publics@yopougon.ci',
    },
    {
      icon: 'fa-shield-alt',
      title: 'Direction de la Sécurité et de la Police Municipale',
      mission: 'Veille au respect des règlements municipaux et à la sécurité des biens et des personnes.',
      attributions: ['Police administrative municipale', 'Prévention des risques urbains', 'Occupation du domaine public'],
      email: 'securite@yopougon.ci',
    },
  ];
}
