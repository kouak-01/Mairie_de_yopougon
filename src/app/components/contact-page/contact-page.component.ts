import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface InfoStripItem {
  icon: string;
  iconType: 'fas' | 'fab';
  value: string;
  label: string;
}

interface CoordCard {
  icon: string;
  iconType: 'fas' | 'fab';
  title: string;
  lines: { text: string; href?: string }[];
}

interface AccessPoint {
  image: string;
  tag: string;
  principal: boolean;
  name: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
}

interface TransportOption {
  image: string;
  icon: string;
  title: string;
  description: string;
}

interface AccessibilityFeature {
  icon: string;
  title: string;
  description: string;
}

interface GalleryImage {
  url: string;
  alt: string;
}

/**
 * Page dédiée à coordonnees-points-acces.html (site source).
 * Les 3 autres pages de la rubrique "Contacts & Accessibilité"
 * (formulaire, réseaux sociaux, FAQ) vivent désormais dans leurs propres
 * composants : contact-formulaire-page, contact-reseaux-page, contact-faq-page.
 */
@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly mapUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps?q=Mairie+de+Yopougon,+Rue+Princesse,+Abidjan&output=embed'
  );

  readonly mediaVideoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/w-kjH188yB0'
  );

  // ===== INFO STRIP =====
  readonly infoStripItems: InfoStripItem[] = [
    { icon: 'fa-phone-alt', iconType: 'fas', value: '+225 27 23 45 28 20', label: 'Standard général' },
    { icon: 'fa-envelope', iconType: 'fas', value: 'contact@yopougon.ci', label: 'Courrier électronique' },
    { icon: 'fa-clock', iconType: 'fas', value: 'Lun - Ven : 7h30 - 16h00', label: "Horaires d'ouverture" },
    { icon: 'fa-map-marker-alt', iconType: 'fas', value: 'Rue Princesse, Yopougon', label: 'Siège de la mairie' },
  ];

  // ===== COORDONNÉES =====
  readonly coordCards: CoordCard[] = [
    {
      icon: 'fa-map-marker-alt',
      iconType: 'fas',
      title: 'Adresse',
      lines: [{ text: 'Rue Princesse, Yopougon' }, { text: "06 BP 2159 Abidjan 06, Côte d'Ivoire" }],
    },
    {
      icon: 'fa-phone-alt',
      iconType: 'fas',
      title: 'Téléphone',
      lines: [
        { text: '+225 27 23 45 28 20', href: 'tel:+22527234528' },
        { text: '+225 27 23 45 16 75', href: 'tel:+22527234516' },
      ],
    },
    {
      icon: 'fa-envelope',
      iconType: 'fas',
      title: 'Email',
      lines: [{ text: 'contact@yopougon.ci', href: 'mailto:contact@yopougon.ci' }],
    },
    {
      icon: 'fa-whatsapp',
      iconType: 'fab',
      title: 'WhatsApp / Ligne verte',
      lines: [{ text: '+225 07 07 45 28 20', href: 'https://wa.me/2250707452820' }],
    },
    {
      icon: 'fa-clock',
      iconType: 'fas',
      title: "Horaires d'ouverture",
      lines: [{ text: 'Lundi - Vendredi : 7h30 - 16h00' }, { text: 'Samedi, dimanche et jours fériés : fermé' }],
    },
  ];

  // ===== POINTS D'ACCÈS =====
  readonly accessPoints: AccessPoint[] = [
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Carrefour%20Saint%20Andr%C3%A9%20Yopougon.jpg',
      tag: 'Siège',
      principal: true,
      name: 'Mairie centrale – Yopougon Centre',
      address: 'Rue Princesse, en face de la Place Figayo',
      phone: '+225 27 23 45 28 20',
      hours: 'Lun - Ven : 7h30 - 16h00',
      services: ['État civil', 'Urbanisme', 'Cabinet du Maire'],
    },
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Super%20March%C3%A9%20CASH%20IVOIRE%20SICOGI%20Yopougon.jpg',
      tag: 'Antenne',
      principal: false,
      name: 'Antenne – Yopougon Sicogi',
      address: 'Non loin du supermarché Cash Ivoire, Sicogi',
      phone: '+225 27 23 46 12 08',
      hours: 'Lun - Ven : 8h00 - 15h30',
      services: ['Guichet état civil', 'Légalisations'],
    },
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Le%20March%C3%A9%20Dominique%20OUATTARA%20de%20Yopougon%20Selmer.jpg',
      tag: 'Antenne',
      principal: false,
      name: 'Antenne – Yopougon Selmer',
      address: 'À proximité du marché Dominique Ouattara, Selmer',
      phone: '+225 27 23 47 20 15',
      hours: 'Lun - Ven : 8h00 - 15h30',
      services: ['Guichet unique', 'Recensement'],
    },
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/20240521%20-%20Station-service%20Yopougon%20Banco%20nord.jpg',
      tag: 'Point relais',
      principal: false,
      name: 'Point relais – Yopougon Banco Nord',
      address: 'Axe principal, près de la station-service, Banco Nord',
      phone: '+225 27 23 48 33 02',
      hours: 'Lun - Ven : 8h00 - 15h00',
      services: ['Information', 'Orientation usagers'],
    },
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Centre%20hospitalier%20universitaire%20de%20Yopougon.jpg',
      tag: 'Guichet',
      principal: false,
      name: 'Guichet – Zone CHU / Attié',
      address: 'Aux abords du CHU de Yopougon',
      phone: '+225 27 23 49 10 44',
      hours: 'Lun - Ven : 8h00 - 15h30',
      services: ['Actes de naissance', 'Certificats'],
    },
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Les%20immeubles%20de%20mon%20quartier%20yopougon.jpg',
      tag: 'Antenne',
      principal: false,
      name: 'Antenne – Yopougon Niangon',
      address: 'Cité résidentielle de Niangon-Nord',
      phone: '+225 27 23 50 27 19',
      hours: 'Lun - Ven : 8h00 - 15h30',
      services: ['Urbanisme', 'Permis de construire'],
    },
  ];

  // ===== TRANSPORT =====
  readonly transportOptions: TransportOption[] = [
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gbaka%20%C3%A0%20Abidjan%20en%20C%C3%B4te%20d%27Ivoire.jpg',
      icon: 'fa-bus',
      title: 'En Gbaka ou taxi communal',
      description:
        'Les lignes Adjamé - Yopougon et Bingerville - Yopougon desservent régulièrement la commune. Descendez à l\'arrêt « Mairie » ou « Place Figayo ».',
    },
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Taxi-Abidjan.JPG',
      icon: 'fa-taxi',
      title: 'En taxi compteur',
      description:
        'Les taxis orange relient les dix communes d\'Abidjan. Indiquez « Mairie de Yopougon, Rue Princesse » comme destination et négociez le prix de la course.',
    },
    {
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Les%20immeubles%20de%20mon%20quartier%20yopougon.jpg',
      icon: 'fa-car',
      title: 'En véhicule personnel',
      description:
        "Depuis l'échangeur de Yopougon, suivez le boulevard principal jusqu'à la Place Figayo puis la Rue Princesse. Un parking visiteurs est disponible sur place.",
    },
  ];

  // ===== MÉDIA / VIDÉO =====
  readonly galleryImages: GalleryImage[] = [
    { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Carrefour%20Saint%20Andr%C3%A9%20Yopougon.jpg', alt: 'Carrefour Saint André' },
    { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Super%20March%C3%A9%20CASH%20IVOIRE%20SICOGI%20Yopougon.jpg', alt: 'Quartier Sicogi' },
    { url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gbaka%20%C3%A0%20Abidjan%20en%20C%C3%B4te%20d%27Ivoire.jpg', alt: 'Transport en commun' },
  ];

  // ===== ACCESSIBILITÉ =====
  readonly accessibilityFeatures: AccessibilityFeature[] = [
    { icon: 'fa-wheelchair', title: 'Accès PMR', description: "Rampes d'accès et guichets adaptés au rez-de-chaussée du siège." },
    { icon: 'fa-parking', title: 'Stationnement réservé', description: "Places de parking dédiées à proximité immédiate de l'entrée principale." },
    { icon: 'fa-hands-helping', title: 'Accompagnement', description: "Agents d'accueil disponibles pour orienter et accompagner les usagers." },
    { icon: 'fa-language', title: 'Médiation locale', description: 'Accueil facilité en français et dans les langues locales les plus parlées.' },
  ];
}
