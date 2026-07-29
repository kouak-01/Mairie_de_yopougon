import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface IntroStat {
  num: string;
  label: string;
}

interface TeamMember {
  name: string;
  role: string;
}

interface CommissionItem {
  icon: string;
  title: string;
  description: string;
}

interface MissionItem {
  icon: string;
  title: string;
  description: string;
}

interface SessionType {
  icon: string;
  title: string;
  description: string;
}

interface Deliberation {
  day: string;
  month: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-conseil-municipal-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './conseil-municipal-page.component.html',
  styleUrl: './conseil-municipal-page.component.scss',
})
export class ConseilMunicipalPageComponent {
  readonly introStats: IntroStat[] = [
    { num: '75', label: 'Conseillers élus' },
    { num: '08', label: 'Adjoints au Maire' },
    { num: '05', label: 'Ans de mandat' },
    { num: '2028', label: 'Fin de mandature' },
  ];

  readonly teamMembers: TeamMember[] = [
    { name: 'Yaya Doumbia', role: '1er Adjoint au Maire' },
    { name: 'Diaby Nassalatou', role: 'Adjointe au Maire' },
    { name: 'Prof. Pierre Dagbo Godé', role: 'Adjoint au Maire' },
    { name: 'Fulbert Édouard Kacou', role: 'Adjoint au Maire' },
    { name: 'Yao Kouadio Johnny', role: 'Adjoint au Maire' },
    { name: 'Koné née Coulibaly', role: 'Adjointe au Maire' },
    { name: 'Tchan Lou', role: 'Adjointe au Maire' },
    { name: 'Doumbia Brahima', role: 'Adjoint au Maire' },
  ];

  readonly commissionItems: CommissionItem[] = [
    { icon: 'fa-coins', title: 'Finances et Budget', description: "Examen du budget communal, des taxes locales et du suivi de l'exécution financière." },
    { icon: 'fa-city', title: 'Urbanisme et Cadre de vie', description: 'Suivi des lotissements, permis de construire, voirie et aménagement du territoire communal.' },
    { icon: 'fa-hand-holding-heart', title: 'Affaires Sociales', description: 'Actions en faveur des familles, personnes vulnérables, femmes et jeunes de la commune.' },
    { icon: 'fa-graduation-cap', title: 'Éducation et Jeunesse', description: 'Suivi des écoles communales, bourses, formation professionnelle et insertion des jeunes.' },
    { icon: 'fa-heartbeat', title: 'Santé et Hygiène', description: 'Suivi des centres de santé communaux, salubrité et campagnes de sensibilisation sanitaire.' },
    { icon: 'fa-shield-alt', title: 'Sécurité et Vie associative', description: 'Coordination avec les forces de sécurité de proximité et appui aux associations locales.' },
    { icon: 'fa-tree', title: 'Environnement', description: 'Gestion des déchets, espaces verts et actions de préservation du cadre écologique communal.' },
    { icon: 'fa-store', title: 'Commerce et Marchés', description: 'Gestion des marchés communaux, occupation du domaine public et appui aux commerçants.' },
    { icon: 'fa-file-signature', title: 'Affaires Générales', description: 'État civil, réglementation communale et suivi administratif des délibérations.' },
  ];

  readonly missionItems: MissionItem[] = [
    { icon: 'fa-vote-yea', title: 'Voter le budget communal', description: "Adopter et contrôler l'exécution du budget primitif et des budgets supplémentaires de la commune." },
    { icon: 'fa-gavel', title: 'Adopter les délibérations', description: "Régler par délibération l'ensemble des affaires relevant de la compétence communale." },
    { icon: 'fa-map-marked-alt', title: "Planifier l'urbanisme", description: "Définir les orientations d'aménagement, de lotissement et de développement du territoire." },
    { icon: 'fa-hands-helping', title: "Piloter l'action sociale", description: "Décider des programmes en faveur de l'éducation, la santé, la jeunesse et la solidarité." },
    { icon: 'fa-project-diagram', title: 'Valider les projets structurants', description: "Approuver les grands projets d'infrastructures et partenariats de développement local." },
    { icon: 'fa-user-shield', title: "Contrôler l'exécutif communal", description: "Exercer un contrôle démocratique sur l'action du Maire et de son administration." },
  ];

  readonly sessionTypes: SessionType[] = [
    { icon: 'fa-calendar-check', title: 'Sessions ordinaires', description: "Le Conseil municipal tient au moins une session ordinaire par trimestre, sur convocation du Maire, pour examiner le budget, les rapports d'activité et les dossiers courants de la commune." },
    { icon: 'fa-calendar-plus', title: 'Sessions extraordinaires', description: 'Elles peuvent être convoquées à la demande du Maire ou de la majorité des conseillers pour traiter d’un sujet urgent ou spécifique à l’ordre du jour.' },
    { icon: 'fa-door-open', title: 'Séances publiques', description: 'Sauf exception prévue par la loi, les séances du Conseil municipal sont ouvertes au public et à la presse, dans un souci de transparence.' },
  ];

  readonly deliberations: Deliberation[] = [
    { day: '06', month: 'Oct', title: 'Installation du Conseil municipal 2023-2028', description: 'Élection du Maire et adoption du règlement intérieur' },
    { day: '15', month: 'Jan', title: 'Adoption du budget communal annuel', description: "Vote du budget primitif et des priorités d'investissement" },
    { day: '22', month: 'Mar', title: 'Programme de voirie et assainissement', description: 'Validation des travaux prioritaires dans les quartiers' },
    { day: '10', month: 'Juin', title: 'Appui aux marchés communaux', description: 'Réhabilitation et gestion des espaces marchands' },
  ];
}
