import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface InfoStripItem {
  icon: string;
  iconType: 'fas' | 'fab';
  value: string;
  label: string;
}

interface ReseauCard {
  icon: string;
  iconType: 'fab' | 'fas';
  colorClass: string;
  title: string;
  handle: string;
  description: string;
  statIcon: string;
  statLabel: string;
  action: { label: string; href?: string; anchor?: string; disabled?: boolean };
}

interface CharteItem {
  positive: boolean;
  title: string;
  text: string;
}

interface VideoGalleryItem {
  type: 'youtube' | 'local';
  url?: SafeResourceUrl;
  src?: string;
  title: string;
  caption: string;
}

interface GalleryImage {
  url: string;
  alt: string;
}

/**
 * Page dédiée à reseaux-sociaux.html (site source) : nos réseaux, fil
 * Facebook + charte de la communauté, vidéothèque propre à la page et
 * bandeau hashtag / appel à rejoindre la conversation.
 */
@Component({
  selector: 'app-contact-reseaux-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './contact-reseaux-page.component.html',
  styleUrl: './contact-reseaux-page.component.scss',
})
export class ContactReseauxPageComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly feedUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMairieyop%2F&tabs=timeline&width=500&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true'
  );

  // ===== INFO STRIP =====
  readonly infoStripItems: InfoStripItem[] = [
    { icon: 'fa-facebook-f', iconType: 'fab', value: '~79 000 abonnés', label: 'Page Facebook officielle' },
    { icon: 'fa-hashtag', iconType: 'fas', value: '#Yopougon #YopCity', label: 'Nos mots-clics' },
    { icon: 'fa-bullhorn', iconType: 'fas', value: 'Actualités & vidéos', label: 'Publiées chaque semaine' },
    { icon: 'fa-comments', iconType: 'fas', value: 'Réponses sous 48h', label: 'Sur nos messageries' },
  ];

  // ===== NOS RESEAUX =====
  readonly reseauCards: ReseauCard[] = [
    {
      icon: 'fa-facebook-f',
      iconType: 'fab',
      colorClass: 'facebook',
      title: 'Facebook',
      handle: 'Mairie de Yopougon',
      description: "Notre principale plateforme : comptes rendus du Conseil municipal, actualités de la commune et vidéos d'événements.",
      statIcon: 'fa-users',
      statLabel: 'Environ 79 000 abonnés',
      action: { label: 'Suivre la page', href: 'https://www.facebook.com/Mairieyop/' },
    },
    {
      icon: 'fa-twitter',
      iconType: 'fab',
      colorClass: 'twitter',
      title: 'X (Twitter)',
      handle: '@mairieyop',
      description: 'Suivez en temps réel les annonces officielles, communiqués et prises de position de la municipalité.',
      statIcon: 'fa-bolt',
      statLabel: "Fil d'actualité en direct",
      action: { label: 'Suivre le compte', href: 'https://twitter.com/mairieyop' },
    },
    {
      icon: 'fa-youtube',
      iconType: 'fab',
      colorClass: 'youtube',
      title: 'YouTube',
      handle: 'Vidéothèque de la commune',
      description: 'Retrouvez les reportages, cérémonies officielles et visites de quartiers en vidéo.',
      statIcon: 'fa-video',
      statLabel: 'Nouvelles vidéos régulières',
      action: { label: 'Voir les vidéos', anchor: 'videotheque' },
    },
    {
      icon: 'fa-instagram',
      iconType: 'fab',
      colorClass: 'instagram',
      title: 'Instagram',
      handle: 'Bientôt disponible',
      description: 'Un compte dédié aux photos et moments forts de la vie communale est en cours de déploiement.',
      statIcon: 'fa-hourglass-half',
      statLabel: 'Lancement prochain',
      action: { label: 'Bientôt disponible', disabled: true },
    },
    {
      icon: 'fa-tiktok',
      iconType: 'fab',
      colorClass: 'tiktok',
      title: 'TikTok',
      handle: 'Bientôt disponible',
      description: 'Formats courts et dynamiques pour toucher la jeunesse yopougonnaise, en préparation.',
      statIcon: 'fa-hourglass-half',
      statLabel: 'Lancement prochain',
      action: { label: 'Bientôt disponible', disabled: true },
    },
    {
      icon: 'fa-whatsapp',
      iconType: 'fab',
      colorClass: 'whatsapp',
      title: 'WhatsApp',
      handle: 'Ligne verte municipale',
      description: 'Un canal direct pour vos questions rapides, signalements et prises de rendez-vous.',
      statIcon: 'fa-phone-alt',
      statLabel: '+225 07 07 45 28 20',
      action: { label: 'Envoyer un message', href: 'https://wa.me/2250707452820' },
    },
  ];

  // ===== CHARTE DE LA COMMUNAUTÉ =====
  readonly charteItems: CharteItem[] = [
    { positive: true, title: 'Restez courtois', text: "échangez dans le respect, comme dans nos locaux d'accueil." },
    { positive: true, title: 'Signalez précisément', text: 'indiquez le quartier et la nature de votre demande pour un traitement rapide.' },
    { positive: true, title: 'Privilégiez nos canaux officiels', text: 'les démarches administratives se font via le formulaire de contact ou nos guichets.' },
    { positive: false, title: 'Évitez les données sensibles', text: "ne partagez jamais vos identifiants ou pièces d'état civil en commentaire public." },
    { positive: false, title: 'Pas de propos injurieux', text: 'les commentaires irrespectueux ou diffamatoires sont modérés.' },
  ];

  // ===== VIDEOTHEQUE =====
  readonly videoGalleryItems: VideoGalleryItem[] = [
    {
      type: 'youtube',
      url: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/w-kjH188yB0'),
      title: 'Découverte de la commune de Yopougon',
      caption: 'Présentation générale de « Yop City »',
    },
    {
      type: 'local',
      src: 'assets/videos/presentation.mp4',
      title: 'Le quartier Ananeraie à Yopougon',
      caption: 'Les quartiers calmes et reposants de la commune',
    },
  ];

  readonly miniPhotoStrip: GalleryImage[] = [
    { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Carrefour%20Saint%20Andr%C3%A9%20Yopougon.jpg', alt: 'Carrefour Saint André' },
    { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gbaka%20%C3%A0%20Abidjan%20en%20C%C3%B4te%20d%27Ivoire.jpg', alt: 'Transport en commun à Yopougon' },
    { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Super%20March%C3%A9%20CASH%20IVOIRE%20SICOGI%20Yopougon.jpg', alt: 'Quartier Sicogi' },
    { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Les%20immeubles%20de%20mon%20quartier%20yopougon.jpg', alt: 'Immeubles à Yopougon' },
  ];
}
