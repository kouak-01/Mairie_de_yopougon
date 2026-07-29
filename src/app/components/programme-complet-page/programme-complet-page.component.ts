import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface TocItem {
  anchor: string;
  date: string;
  label: string;
}

interface EventInfoItem {
  icon: string;
  label: string;
  value: string;
}

interface ScheduleEntry {
  time: string;
  text: string;
}

interface ScheduleGroup {
  dayTitle?: string;
  entries: ScheduleEntry[];
}

interface EventMedia {
  main: string;
  gallery?: [string, string];
  video?: { poster: string; caption: string };
}

interface EventItem {
  id: string;
  tagIcon: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  media: EventMedia;
  infoItems: EventInfoItem[];
  scheduleTitle: string;
  scheduleGroups: ScheduleGroup[];
}

@Component({
  selector: 'app-programme-complet-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './programme-complet-page.component.html',
  styleUrl: './programme-complet-page.component.scss',
})
export class ProgrammeCompletPageComponent {
  readonly tocItems: TocItem[] = [
    { anchor: 'conseil-municipal', date: '05 août', label: 'Conseil Municipal' },
    { anchor: 'salubrite', date: '09 août', label: 'Yopougon Propre' },
    { anchor: 'festival', date: '15-17 août', label: 'Festival' },
    { anchor: 'tournoi-foot', date: '22 août', label: 'Tournoi de foot' },
    { anchor: 'vaccination', date: '28 août', label: 'Vaccination' },
    { anchor: 'rentree-scolaire', date: '03 sept', label: 'Rentrée scolaire' },
    { anchor: 'prix-eleves', date: '10 sept', label: 'Prix des élèves' },
    { anchor: 'concert-radio', date: '19 sept', label: 'Concert Radio' },
    { anchor: 'premiere-pierre', date: '25 sept', label: 'Première pierre' },
  ];

  readonly events: EventItem[] = [
    {
      id: 'conseil-municipal',
      tagIcon: 'fa-landmark',
      tag: 'Conseil Municipal',
      date: 'Mercredi 5 août 2026',
      title: 'Session ordinaire du Conseil Municipal',
      description: "Le Conseil Municipal se réunit en session ordinaire pour examiner et voter les délibérations du 3ème trimestre 2026. Cette séance publique permettra aux conseillers municipaux de statuer sur le budget rectificatif, les projets d'investissement communaux et plusieurs dossiers d'urbanisme. La population est invitée à suivre les débats depuis la tribune du public.",
      media: { main: 'assets/images/mairie-facade-2.jpg', video: { poster: 'assets/images/mairie-facade-2.jpg', caption: "Extrait vidéo d'une précédente session du Conseil Municipal" } },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: '09h00 - 12h00' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Salle des délibérations, Hôtel de Ville' },
        { icon: 'fa-ticket-alt', label: 'Accès', value: 'Entrée libre, places limitées' },
        { icon: 'fa-phone-alt', label: 'Contact', value: 'Secrétariat Général — 27 23 45 28 20' },
      ],
      scheduleTitle: 'Déroulé de la séance',
      scheduleGroups: [
        {
          entries: [
            { time: '09h00', text: "Ouverture de la séance et adoption de l'ordre du jour" },
            { time: '09h30', text: 'Présentation du budget rectificatif 2026' },
            { time: '10h30', text: "Examen des dossiers d'urbanisme et de voirie" },
            { time: '11h30', text: 'Questions diverses et clôture de la séance' },
          ],
        },
      ],
    },
    {
      id: 'salubrite',
      tagIcon: 'fa-broom',
      tag: 'Santé & Solidarité',
      date: 'Dimanche 9 août 2026',
      title: 'Journée communautaire « Yopougon Propre »',
      description: "Dans le cadre de sa politique de salubrité urbaine, la Mairie organise une grande opération de nettoyage et de sensibilisation à l'hygiène dans les quartiers de Wassakara et Sicogi. Habitants, associations de jeunesse et agents municipaux se mobilisent ensemble pour le curage des caniveaux, le ramassage des déchets et une campagne de sensibilisation porte-à-porte.",
      media: { main: 'assets/images/yopougon/sensibilisation.jpg', gallery: ['assets/images/yopougon/sensibilisation.jpg', 'assets/images/yopougon/inspection.jpg'] },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: '07h00 - 11h00' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Quartier Wassakara (point de départ : place publique)' },
        { icon: 'fa-ticket-alt', label: 'Accès', value: 'Ouvert à tous les volontaires' },
        { icon: 'fa-tshirt', label: 'À prévoir', value: 'Tenue adaptée, gants fournis sur place' },
      ],
      scheduleTitle: 'Programme de la matinée',
      scheduleGroups: [
        {
          entries: [
            { time: '07h00', text: 'Accueil des volontaires et répartition des équipes' },
            { time: '07h30', text: 'Nettoyage des caniveaux et voies principales' },
            { time: '09h30', text: "Sensibilisation porte-à-porte sur l'hygiène" },
            { time: '10h45', text: 'Collation offerte et clôture de la journée' },
          ],
        },
      ],
    },
    {
      id: 'festival',
      tagIcon: 'fa-masks-theater',
      tag: 'Culture & Festivités',
      date: 'Du 15 au 17 août 2026',
      title: 'Festival « Yopougon en Fête »',
      description: "Rendez-vous phare de la vie communale, le festival « Yopougon en Fête » propose trois jours de concerts, de spectacles de danse, d'expositions artisanales et d'animations pour toute la famille sur l'esplanade de la mairie. L'édition 2026 mettra à l'honneur les artistes et artisans locaux, avec un village gastronomique et un espace dédié aux enfants.",
      media: { main: 'assets/images/yopougon/agora.jpeg', video: { poster: 'assets/images/yopougon/agora.jpeg', caption: "Résumé de l'édition 2025 du festival" } },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: 'Dès 16h00 chaque jour' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Esplanade de la Mairie' },
        { icon: 'fa-ticket-alt', label: 'Accès', value: 'Entrée gratuite pour tous' },
        { icon: 'fa-utensils', label: 'Sur place', value: 'Village gastronomique et artisanal' },
      ],
      scheduleTitle: 'Programme des 3 jours',
      scheduleGroups: [
        {
          dayTitle: 'Vendredi 15 août — Ouverture',
          entries: [
            { time: '16h00', text: "Cérémonie d'ouverture officielle" },
            { time: '18h00', text: 'Défilé des troupes traditionnelles' },
            { time: '20h00', text: "Concert d'ouverture" },
          ],
        },
        {
          dayTitle: 'Samedi 16 août — Culture & artisanat',
          entries: [
            { time: '16h00', text: 'Ouverture du village artisanal et gastronomique' },
            { time: '18h30', text: 'Spectacle de danses traditionnelles' },
            { time: '21h00', text: 'Soirée musicale avec artistes locaux' },
          ],
        },
        {
          dayTitle: 'Dimanche 17 août — Clôture familiale',
          entries: [
            { time: '16h00', text: 'Animations et jeux pour enfants' },
            { time: '19h00', text: 'Remise de prix du concours artisanal' },
            { time: '20h30', text: 'Grand concert de clôture' },
          ],
        },
      ],
    },
    {
      id: 'tournoi-foot',
      tagIcon: 'fa-futbol',
      tag: 'Sport',
      date: 'Samedi 22 août 2026',
      title: 'Tournoi de football inter-quartiers',
      description: 'La grande finale du tournoi communal de football réunit les meilleures équipes des quartiers de Yopougon au stade municipal. Cette compétition, portée par la direction des sports de la mairie, vise à promouvoir la pratique sportive chez les jeunes et à renforcer la cohésion entre les quartiers. La cérémonie de remise des trophées clôturera la journée.',
      media: { main: 'assets/images/abidjan-panorama.jpg', gallery: ['assets/images/abidjan-panorama.jpg', 'assets/images/abidjan-vert.jpg'] },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: '14h00 - 18h00' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Stade municipal de Yopougon' },
        { icon: 'fa-ticket-alt', label: 'Accès', value: 'Entrée libre, gradins ouverts au public' },
        { icon: 'fa-trophy', label: 'Format', value: 'Demi-finales puis finale' },
      ],
      scheduleTitle: 'Déroulé de la journée',
      scheduleGroups: [
        {
          entries: [
            { time: '14h00', text: 'Première demi-finale' },
            { time: '15h30', text: 'Seconde demi-finale' },
            { time: '16h30', text: 'Grande finale' },
            { time: '17h45', text: 'Remise des trophées et clôture' },
          ],
        },
      ],
    },
    {
      id: 'vaccination',
      tagIcon: 'fa-syringe',
      tag: 'Santé & Solidarité',
      date: 'Vendredi 28 août 2026',
      title: 'Journée de vaccination gratuite',
      description: 'En partenariat avec le district sanitaire, la Mairie organise une campagne de vaccination et de dépistage gratuit ouverte à toute la population. Cette action de santé publique permettra également des consultations médicales de base et des conseils de prévention dispensés par des professionnels de santé.',
      media: { main: 'assets/images/yopougon/inspection.jpg', gallery: ['assets/images/yopougon/inspection.jpg', 'assets/images/culture-civ.jpg'] },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: '08h00 - 16h00' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Centre de santé communal' },
        { icon: 'fa-ticket-alt', label: 'Accès', value: "Gratuit, pièce d'identité recommandée" },
        { icon: 'fa-user-md', label: 'Partenaire', value: 'District sanitaire de Yopougon' },
      ],
      scheduleTitle: 'Programme de la journée',
      scheduleGroups: [
        {
          entries: [
            { time: '08h00', text: 'Ouverture des inscriptions et accueil' },
            { time: '08h30', text: 'Séances de vaccination et dépistage' },
            { time: '12h00', text: "Pause déjeuner de l'équipe médicale" },
            { time: '13h00', text: "Reprise des consultations jusqu'à 16h00" },
          ],
        },
      ],
    },
    {
      id: 'rentree-scolaire',
      tagIcon: 'fa-graduation-cap',
      tag: 'Éducation',
      date: 'Jeudi 3 septembre 2026',
      title: 'Rentrée scolaire : distribution de kits scolaires',
      description: 'À l’occasion de la rentrée 2026-2027, la Mairie de Yopougon offre des kits scolaires complets aux enfants des familles vulnérables de la commune. Cette action sociale, menée avec le service des affaires sociales, vise à faciliter l’accès à l’éducation pour tous les enfants de Yopougon.',
      media: { main: 'assets/images/culture-civ.jpg', gallery: ['assets/images/culture-civ.jpg', 'assets/images/mairie-yopougon.jpg'] },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: '09h00 - 13h00' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Cour de la Mairie' },
        { icon: 'fa-ticket-alt', label: 'Éligibilité', value: 'Familles préalablement inscrites' },
        { icon: 'fa-hands-helping', label: 'Organisateur', value: 'Service des Affaires Sociales' },
      ],
      scheduleTitle: 'Programme de la matinée',
      scheduleGroups: [
        {
          entries: [
            { time: '09h00', text: 'Accueil des familles et vérification des listes' },
            { time: '09h30', text: 'Mot de bienvenue des autorités municipales' },
            { time: '10h00', text: 'Distribution des kits scolaires' },
            { time: '12h30', text: 'Clôture de la cérémonie' },
          ],
        },
      ],
    },
    {
      id: 'prix-eleves',
      tagIcon: 'fa-award',
      tag: 'Éducation',
      date: 'Jeudi 10 septembre 2026',
      title: 'Remise de prix aux meilleurs élèves',
      description: "La municipalité honore chaque année l'excellence scolaire en récompensant les meilleurs élèves des établissements de la commune au titre de l'année scolaire écoulée. Bourses d'excellence, diplômes et lots seront remis aux lauréats en présence de leurs familles et des chefs d'établissements.",
      media: { main: 'assets/images/culture-civ.jpg', gallery: ['assets/images/culture-civ.jpg', 'assets/images/mairie-yopougon-2.jpg'] },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: '15h00 - 18h00' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Salle des fêtes de la Mairie' },
        { icon: 'fa-ticket-alt', label: 'Accès', value: 'Sur invitation des établissements' },
        { icon: 'fa-gift', label: 'Récompenses', value: 'Bourses, diplômes et lots' },
      ],
      scheduleTitle: 'Déroulé de la cérémonie',
      scheduleGroups: [
        {
          entries: [
            { time: '15h00', text: 'Accueil des lauréats et des familles' },
            { time: '15h30', text: "Discours du Maire et des chefs d'établissements" },
            { time: '16h00', text: "Remise des diplômes et bourses d'excellence" },
            { time: '17h30', text: 'Cocktail de clôture' },
          ],
        },
      ],
    },
    {
      id: 'concert-radio',
      tagIcon: 'fa-music',
      tag: 'Culture & Festivités',
      date: 'Samedi 19 septembre 2026',
      title: 'Concert live « Radio Yopougon »',
      description: 'La Radio Yopougon organise une soirée musicale en plein air animée par des artistes locaux emblématiques. Ce concert gratuit, ouvert à tous, se veut une vitrine des talents musicaux de la commune, dans une ambiance conviviale et festive sur la Place de la Paix.',
      media: { main: 'assets/images/yopougon/ambiance-bar.jpg', video: { poster: 'assets/images/yopougon/ambiance-bar.jpg', caption: "Aftermovie d'un précédent concert de la Radio Yopougon" } },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: '18h00 - 22h00' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Place de la Paix' },
        { icon: 'fa-ticket-alt', label: 'Accès', value: 'Entrée gratuite' },
        { icon: 'fa-broadcast-tower', label: 'Organisateur', value: 'Radio Yopougon' },
      ],
      scheduleTitle: 'Programme de la soirée',
      scheduleGroups: [
        {
          entries: [
            { time: '18h00', text: 'Ouverture des portes et animation DJ' },
            { time: '19h00', text: 'Première partie : jeunes talents locaux' },
            { time: '20h30', text: 'Plateau principal avec artistes invités' },
            { time: '22h00', text: 'Clôture de la soirée' },
          ],
        },
      ],
    },
    {
      id: 'premiere-pierre',
      tagIcon: 'fa-hard-hat',
      tag: 'Cérémonie officielle',
      date: 'Vendredi 25 septembre 2026',
      title: 'Pose de première pierre du nouveau marché',
      description: 'Cérémonie officielle marquant le lancement des travaux de construction du nouveau marché de Yopougon, un projet structurant destiné à moderniser les infrastructures commerciales de la commune et améliorer les conditions de travail des commerçants locaux.',
      media: { main: 'assets/images/yopougon/construction-stand.jpg', gallery: ['assets/images/yopougon/construction-stand.jpg', 'assets/images/mairie-yopougon-2.jpg'] },
      infoItems: [
        { icon: 'fa-clock', label: 'Horaire', value: '10h00 - 12h00' },
        { icon: 'fa-map-marker-alt', label: 'Lieu', value: 'Site du Marché de Yopougon' },
        { icon: 'fa-ticket-alt', label: 'Accès', value: 'Cérémonie officielle, public bienvenu' },
        { icon: 'fa-building', label: 'Projet', value: 'Nouveau marché communal 2026' },
      ],
      scheduleTitle: 'Déroulé de la cérémonie',
      scheduleGroups: [
        {
          entries: [
            { time: '10h00', text: 'Accueil des autorités et des commerçants' },
            { time: '10h30', text: 'Présentation du projet architectural' },
            { time: '11h00', text: 'Cérémonie officielle de pose de la première pierre' },
            { time: '11h45', text: 'Discours de clôture du Maire' },
          ],
        },
      ],
    },
  ];
}
