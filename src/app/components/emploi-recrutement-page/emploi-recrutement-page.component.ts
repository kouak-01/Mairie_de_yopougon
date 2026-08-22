import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface FeatureItem {
  icon: string;
  label: string;
}

interface DispositifCard {
  icon: string;
  title: string;
  description: string;
}

interface OffreEmploi {
  title: string;
  type: string;
  location: string;
  deadline: string;
}

interface NumberStat {
  icon: string;
  count: string;
  label: string;
}

interface ProgrammeCard {
  image: string;
  alt: string;
  tag: string;
  title: string;
  description: string;
}

interface TimelineStep {
  title: string;
  description: string;
}

interface GalerieItem {
  image: string;
  alt: string;
  label: string;
}

interface EngagementCard {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  linkIcon: string;
  routerLink: string;
}

@Component({
  selector: 'app-emploi-recrutement-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './emploi-recrutement-page.component.html',
  styleUrl: './emploi-recrutement-page.component.scss',
})
export class EmploiRecrutementPageComponent {
  readonly aboutFeatures: FeatureItem[] = [
    { icon: 'fa-briefcase', label: 'Recrutements municipaux' },
    { icon: 'fa-graduation-cap', label: 'Formations qualifiantes' },
    { icon: 'fa-user-tie', label: 'Guichet emploi jeunes' },
    { icon: 'fa-seedling', label: "Appui à l'entrepreneuriat" },
  ];

  readonly dispositifCards: DispositifCard[] = [
    { icon: 'fa-building', title: 'Recrutements municipaux', description: "Consultez et postulez aux offres d'emploi et de stage publiées directement par les services de la mairie." },
    { icon: 'fa-user-tie', title: 'Guichet emploi jeunes', description: "Un point d'accueil unique pour l'orientation, le conseil et la mise en relation avec les recruteurs et les programmes de l'État." },
    { icon: 'fa-graduation-cap', title: 'Formations qualifiantes', description: "Des sessions de formation professionnelle en partenariat avec des centres agréés pour renforcer l'employabilité des candidats." },
    { icon: 'fa-seedling', title: "Appui à l'entrepreneuriat", description: 'Accompagnement, financement et suivi de projets pour les jeunes entrepreneurs et les petites entreprises locales.' },
    { icon: 'fa-venus', title: 'Emploi des femmes', description: "Programmes dédiés à l'autonomisation économique des femmes de Yopougon à travers l'emploi et l'entrepreneuriat." },
    { icon: 'fa-handshake', title: 'Partenariats entreprises', description: 'Collaboration avec les entreprises locales et industrielles pour faciliter le recrutement direct des habitants de la commune.' },
    { icon: 'fa-calendar-check', title: "Foires et salons de l'emploi", description: "Des évènements périodiques mettant en relation directe demandeurs d'emploi et recruteurs de la commune et du district." },
    { icon: 'fa-tools', title: 'Chantiers communaux (HIMO)', description: "Des chantiers à haute intensité de main-d'œuvre offrant un emploi temporaire aux jeunes lors des grands travaux communaux." },
  ];

  readonly offres: OffreEmploi[] = [
    { title: "Agent(e) d'état civil", type: 'CDD', location: 'Mairie centrale de Yopougon', deadline: 'Candidature avant le 30 août 2026' },
    { title: 'Animateur(trice) socio-culturel', type: 'Stage', location: 'Direction Jeunesse et Sports', deadline: 'Candidature avant le 15 septembre 2026' },
    { title: 'Technicien(ne) en assainissement', type: 'CDI', location: 'Direction des Services Techniques', deadline: 'Candidature avant le 10 septembre 2026' },
    { title: 'Conseiller(ère) en insertion', type: 'CDD', location: 'Guichet Emploi Jeunes', deadline: 'Candidature avant le 5 septembre 2026' },
    { title: 'Chauffeur poids lourd', type: 'CDD', location: 'Direction de la Propreté Urbaine', deadline: 'Candidature avant le 20 août 2026' },
    { title: 'Chargé(e) de communication', type: 'Stage', location: 'Cabinet du Maire', deadline: 'Candidature avant le 25 août 2026' },
  ];

  readonly numberStats: NumberStat[] = [
    { icon: 'fa-user-tie', count: '1 000+', label: 'Jeunes accompagnés par an' },
    { icon: 'fa-briefcase', count: '300+', label: 'Emplois directs créés' },
    { icon: 'fa-handshake', count: '45', label: 'Entreprises partenaires' },
    { icon: 'fa-seedling', count: '120', label: 'Projets entrepreneuriaux financés' },
  ];

  readonly videoHighlights = [
    { text: 'Orientation personnalisée' },
    { text: 'Formations qualifiantes' },
    { text: 'Mise en relation avec les recruteurs' },
    { text: 'Suivi post-insertion' },
  ];

  readonly programmeCards: ProgrammeCard[] = [
    { image: 'assets/images/emploi/foire-emploi.jpg', alt: "Foire de l'emploi à Yopougon", tag: 'Événement', title: "Foire de l'emploi de Yopougon", description: "Un rendez-vous annuel qui rassemble entreprises, recruteurs et demandeurs d'emploi de la commune autour d'entretiens directs et de sessions de coaching." },
    { image: 'assets/images/emploi/formation-metier.jpg', alt: 'Session de formation professionnelle', tag: 'Formation', title: 'Formations aux métiers porteurs', description: 'Des cycles de formation courte en partenariat avec des centres agréés dans les métiers du numérique, du BTP, de l\'artisanat et des services.' },
    { image: 'assets/images/emploi/entrepreneuriat-jeune.jpg', alt: 'Jeunes entrepreneurs financés par la mairie', tag: 'Entrepreneuriat', title: 'Financement de projets de jeunes', description: 'Un accompagnement technique et financier pour aider les jeunes porteurs de projets à créer leur propre activité génératrice de revenus.' },
    { image: 'assets/images/emploi/himo-chantier.jpg', alt: "Chantier communal à haute intensité de main d'oeuvre", tag: 'Chantiers HIMO', title: "Chantiers communaux à haute intensité de main-d'œuvre", description: "Des emplois temporaires proposés aux jeunes lors des travaux d'aménagement et d'assainissement financés par la commune." },
  ];

  readonly timelineSteps: TimelineStep[] = [
    { title: 'Consultez les offres disponibles', description: "Parcourez les offres d'emploi et de stage publiées sur cette page ou affichées au guichet emploi jeunes de la mairie." },
    { title: 'Préparez votre dossier de candidature', description: "CV, lettre de motivation, diplômes et pièce d'identité : réunissez les pièces exigées pour chaque offre avant de postuler." },
    { title: 'Déposez votre candidature', description: 'Envoyez votre dossier en ligne via le formulaire de contact ou déposez-le directement au guichet emploi jeunes de la mairie.' },
    { title: "Passez l'entretien et suivez votre dossier", description: 'Les candidats présélectionnés sont contactés pour un entretien. Un conseiller vous accompagne jusqu\'à la prise de poste.' },
  ];

  readonly galerieItems: GalerieItem[] = [
    { image: 'assets/images/emploi/foire-emploi.jpg', alt: "Foire de l'emploi à Yopougon", label: "Foire de l'emploi" },
    { image: 'assets/images/emploi/guichet-emploi.jpg', alt: 'Entretien de recrutement au guichet emploi', label: 'Guichet emploi jeunes' },
    { image: 'assets/images/emploi/formation-metier.jpg', alt: 'Session de formation professionnelle', label: 'Formation qualifiante' },
    { image: 'assets/images/emploi/entrepreneuriat-femmes.jpg', alt: 'Jeune entrepreneure accompagnée par la mairie', label: 'Entrepreneuriat des femmes' },
    { image: 'assets/images/emploi/himo-chantier-2.jpg', alt: 'Chantier communal HIMO', label: 'Chantier HIMO' },
    { image: 'assets/images/emploi/entrepreneuriat-jeune.jpg', alt: 'Remise de diplômes de fin de formation', label: 'Remise de diplômes' },
    { image: 'assets/images/emploi/partenariat-entreprise.jpg', alt: "Signature d'un partenariat avec une entreprise", label: 'Partenariat entreprise' },
  ];

  readonly engagementCards: EngagementCard[] = [
    { icon: 'fa-file-circle-plus', title: 'Déposer une candidature', description: 'Envoyez votre CV et votre lettre de motivation pour une offre en cours.', linkLabel: 'Contacter la mairie', linkIcon: 'fa-paper-plane', routerLink: '/contact' },
    { icon: 'fa-user-tie', title: "S'inscrire au guichet emploi jeunes", description: "Bénéficiez d'un accompagnement personnalisé vers l'emploi ou la formation.", linkLabel: "S'informer", linkIcon: 'fa-user-plus', routerLink: '/contact' },
    { icon: 'fa-handshake', title: 'Devenir entreprise partenaire', description: 'Proposez vos offres de recrutement aux talents de la commune de Yopougon.', linkLabel: 'Nous contacter', linkIcon: 'fa-arrow-right', routerLink: '/contact' },
  ];
}
