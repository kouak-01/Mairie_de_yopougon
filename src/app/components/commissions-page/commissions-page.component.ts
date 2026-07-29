import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface IntroTag {
  icon: string;
  label: string;
}

interface CommissionSummary {
  number: string;
  icon: string;
  title: string;
  description: string;
  missions: string[];
}

interface ProcessStep {
  num: number;
  icon: string;
  title: string;
  description: string;
}

interface StructureCard {
  icon: string;
  title: string;
  description: string;
}

interface CommissionDetail {
  icon: string;
  title: string;
  badgeIcon: string;
  badgeLabel: string;
  description: string;
  attributions: string[];
}

@Component({
  selector: 'app-commissions-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './commissions-page.component.html',
  styleUrl: './commissions-page.component.scss',
})
export class CommissionsPageComponent {
  readonly introTags: IntroTag[] = [
    { icon: 'fa-users', label: 'Conseillers désignés' },
    { icon: 'fa-file-signature', label: 'Avis consultatifs' },
    { icon: 'fa-calendar-check', label: 'Réunions préparatoires' },
    { icon: 'fa-balance-scale', label: 'Transparence' },
  ];

  readonly commissionSummaries: CommissionSummary[] = [
    {
      number: '01',
      icon: 'fa-coins',
      title: 'Commission des Affaires Générales, Financières et Économiques',
      description: "Examine le budget communal, les comptes administratifs et le suivi de l'exécution financière de la commune.",
      missions: ['Étude du budget et des taux communaux', 'Suivi des marchés publics', 'Partenariats économiques locaux'],
    },
    {
      number: '02',
      icon: 'fa-city',
      title: 'Commission de l’Urbanisme, du Logement et du Cadre de Vie',
      description: "Instruit les questions d'aménagement urbain, de voirie, d'habitat et de gestion du domaine communal.",
      missions: ['Permis de construire et lotissements', 'Voirie et éclairage public', 'Espaces verts et cadre de vie'],
    },
    {
      number: '03',
      icon: 'fa-hand-holding-heart',
      title: 'Commission des Affaires Sociales, de la Santé et de la Solidarité',
      description: "Veille à l'action sociale communale, à l'appui aux personnes vulnérables et à la santé de proximité.",
      missions: ['Aide aux personnes vulnérables', 'Centres de santé communaux', 'Appui aux personnes âgées et handicapées'],
    },
    {
      number: '04',
      icon: 'fa-graduation-cap',
      title: 'Commission de l’Éducation, de la Jeunesse, des Sports et de la Culture',
      description: "Suit les écoles municipales, l'insertion des jeunes ainsi que les activités sportives et culturelles.",
      missions: ['Écoles et cantines municipales', 'Insertion et emploi des jeunes', 'Infrastructures sportives et culturelles'],
    },
    {
      number: '05',
      icon: 'fa-shield-alt',
      title: 'Commission de la Sécurité, de l’Hygiène et de la Salubrité',
      description: 'Traite des questions de sécurité de proximité, de propreté et de gestion des déchets sur le territoire communal.',
      missions: ['Salubrité et gestion des déchets', 'Prévention et sécurité de proximité', 'Hygiène des marchés et espaces publics'],
    },
    {
      number: '06',
      icon: 'fa-seedling',
      title: 'Commission du Développement Économique Local et de l’Emploi',
      description: "Accompagne les initiatives entrepreneuriales locales et la promotion de l'emploi des Yopougonnais.",
      missions: ["Appui aux PME et à l'artisanat local", 'Gestion des marchés communaux', "Promotion de l'emploi local"],
    },
  ];

  readonly processSteps: ProcessStep[] = [
    { num: 1, icon: 'fa-inbox', title: 'Saisine du dossier', description: 'Un dossier est transmis à la commission compétente par le Maire, le Secrétariat général ou un conseiller municipal.' },
    { num: 2, icon: 'fa-comments', title: 'Instruction et auditions', description: 'La commission étudie le dossier, échange avec les directions techniques concernées et peut auditionner des experts.' },
    { num: 3, icon: 'fa-file-signature', title: 'Avis et rapport', description: "Un rapport assorti d'un avis motivé est rédigé et transmis au Conseil municipal avant la session plénière." },
    { num: 4, icon: 'fa-gavel', title: 'Délibération en séance', description: 'Le Conseil municipal, réuni en session, débat et se prononce sur la base de l’avis rendu par la commission.' },
  ];

  readonly structureCards: StructureCard[] = [
    { icon: 'fa-user-check', title: 'Un Président désigné', description: 'Chaque commission élit en son sein un président chargé d’animer les travaux et de convoquer les réunions.' },
    { icon: 'fa-users-cog', title: 'Des membres conseillers', description: 'Les commissions sont composées de conseillers municipaux répartis en fonction de leurs compétences.' },
    { icon: 'fa-clipboard-list', title: 'Un rapporteur', description: 'Un rapporteur est désigné pour présenter les conclusions et l’avis de la commission en séance plénière.' },
    { icon: 'fa-calendar-week', title: 'Réunions périodiques', description: 'Les commissions se réunissent avant chaque session du Conseil, ou à la demande de leur président.' },
  ];

  readonly commissionDetails: CommissionDetail[] = [
    {
      icon: 'fa-coins',
      title: 'Commission des Finances et du Budget',
      badgeIcon: 'fa-star',
      badgeLabel: 'Commission clé',
      description: 'Elle examine l’ensemble des questions budgétaires et financières de la commune avant leur passage en séance plénière.',
      attributions: ['Étude du budget primitif et des budgets rectificatifs', "Suivi de l'exécution budgétaire annuelle", 'Analyse de la fiscalité locale et des recettes', 'Contrôle des marchés publics communaux'],
    },
    {
      icon: 'fa-city',
      title: "Commission de l'Urbanisme et du Cadre de vie",
      badgeIcon: 'fa-drafting-compass',
      badgeLabel: 'Aménagement',
      description: "Elle instruit les dossiers relatifs à l'organisation spatiale et à l'aménagement du territoire communal.",
      attributions: ['Suivi des lotissements et permis de construire', "Programmes de voirie et d'assainissement", 'Aménagement des espaces publics', 'Gestion du domaine communal'],
    },
    {
      icon: 'fa-hand-holding-heart',
      title: 'Commission des Affaires Sociales',
      badgeIcon: 'fa-people-carry-box',
      badgeLabel: 'Solidarité',
      description: 'Elle porte les actions communales en direction des familles et des populations vulnérables.',
      attributions: ['Appui aux personnes vulnérables et aux familles', 'Programmes en faveur des femmes et des jeunes', 'Suivi des centres sociaux communaux', "Actions de solidarité et d'insertion"],
    },
    {
      icon: 'fa-graduation-cap',
      title: "Commission de l'Éducation et de la Jeunesse",
      badgeIcon: 'fa-book-open',
      badgeLabel: 'Avenir',
      description: "Elle veille au développement de l'offre éducative et à l'épanouissement de la jeunesse yopougonnaise.",
      attributions: ['Suivi des écoles et infrastructures scolaires communales', "Programmes de bourses et d'appui scolaire", 'Formation professionnelle et insertion des jeunes', 'Soutien aux activités sportives et culturelles'],
    },
    {
      icon: 'fa-heartbeat',
      title: "Commission de la Santé et de l'Hygiène",
      badgeIcon: 'fa-notes-medical',
      badgeLabel: 'Prévention',
      description: 'Elle accompagne les actions de santé publique et de salubrité au niveau communal.',
      attributions: ['Suivi des centres de santé communaux', 'Campagnes de sensibilisation sanitaire', 'Salubrité et hygiène publique', 'Appui aux actions de prévention communautaire'],
    },
    {
      icon: 'fa-shield-alt',
      title: 'Commission de la Sécurité et de la Vie Associative',
      badgeIcon: 'fa-people-group',
      badgeLabel: 'Proximité',
      description: 'Elle assure le lien entre le Conseil municipal, les forces de sécurité de proximité et le tissu associatif local.',
      attributions: ['Coordination avec les forces de sécurité de proximité', 'Appui aux associations et comités de quartier', 'Prévention de la délinquance juvénile', 'Gestion des espaces de vie associative'],
    },
    {
      icon: 'fa-tree',
      title: "Commission de l'Environnement",
      badgeIcon: 'fa-leaf',
      badgeLabel: 'Cadre écologique',
      description: 'Elle veille à la préservation du cadre de vie et à la gestion durable des ressources communales.',
      attributions: ['Gestion des déchets et propreté urbaine', "Entretien et création d'espaces verts", "Sensibilisation à la protection de l'environnement", 'Suivi des zones à risque environnemental'],
    },
    {
      icon: 'fa-store',
      title: 'Commission du Commerce et des Marchés',
      badgeIcon: 'fa-cash-register',
      badgeLabel: 'Économie locale',
      description: 'Elle accompagne le développement du commerce local et la bonne gestion des marchés communaux.',
      attributions: ['Gestion et réhabilitation des marchés communaux', 'Occupation du domaine public marchand', 'Appui aux commerçants et artisans locaux', 'Régulation du commerce informel'],
    },
    {
      icon: 'fa-file-signature',
      title: 'Commission des Affaires Générales',
      badgeIcon: 'fa-scale-balanced',
      badgeLabel: 'Administration',
      description: 'Elle traite des questions administratives, juridiques et réglementaires transversales de la commune.',
      attributions: ["Suivi de l'état civil et des actes administratifs", 'Élaboration de la réglementation communale', 'Suivi administratif des délibérations', 'Relations avec les institutions et partenaires'],
    },
  ];
}
