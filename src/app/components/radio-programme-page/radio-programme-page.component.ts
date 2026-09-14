import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface ScheduleCell {
  colspan: number;
  weekend?: boolean;
  empty?: boolean;
  name?: string;
  host?: string;
}

interface ScheduleRow {
  time: string;
  cells: ScheduleCell[];
}

interface ScheduleNote {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-radio-programme-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './radio-programme-page.component.html',
  styleUrl: './radio-programme-page.component.scss',
})
export class RadioProgrammePageComponent {
  // ===== GRILLE DES PROGRAMMES (Lundi -> Vendredi, Samedi, Dimanche) =====
  readonly scheduleColumns = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

  readonly scheduleRows: ScheduleRow[] = [
    {
      time: '06H - 07H',
      cells: [
        { colspan: 5, name: 'Matin Magique', host: 'Tony Gbaziké' },
        { colspan: 1, weekend: true, name: 'Flux musical' },
        { colspan: 1, weekend: true, name: 'Paroles de Vie', host: 'Espace des Églises' },
      ],
    },
    {
      time: '07H - 08H',
      cells: [
        { colspan: 5, empty: true },
        { colspan: 2, weekend: true, empty: true },
      ],
    },
    {
      time: '08H - 09H',
      cells: [
        { colspan: 5, empty: true },
        { colspan: 2, weekend: true, name: 'Partenaires' },
      ],
    },
    {
      time: '09H - 10H',
      cells: [
        { colspan: 5, name: 'Un Tout Autre Quotidien', host: 'Jalbar' },
        { colspan: 1, weekend: true, name: 'Saturday Morning', host: 'Jaguar' },
        { colspan: 1, weekend: true, name: 'Mercure' },
      ],
    },
    {
      time: '10H - 11H',
      cells: [
        { colspan: 5, empty: true },
        { colspan: 2, weekend: true, name: 'Rions Ensemble', host: 'Koloko Germain' },
      ],
    },
    {
      time: '11H - 12H',
      cells: [
        { colspan: 5, empty: true },
        { colspan: 2, weekend: true, empty: true },
      ],
    },
    {
      time: '12H - 13H',
      cells: [
        { colspan: 5, name: 'Journal + Communiqués + Musique' },
        { colspan: 2, weekend: true, name: 'Journal + Communiqués + Musique' },
      ],
    },
    {
      time: '13H - 14H',
      cells: [
        { colspan: 5, empty: true },
        { colspan: 2, weekend: true, name: 'Rions Ensemble', host: 'Koloko Germain' },
      ],
    },
    {
      time: '14H - 15H',
      cells: [
        { colspan: 5, name: 'Playlist' },
        { colspan: 1, weekend: true, name: 'Allô Mairie' },
        { colspan: 1, weekend: true, name: "Si Yop m'était conté" },
      ],
    },
    {
      time: '15H - 16H',
      cells: [
        { colspan: 1, name: 'Langue de chez nous', host: 'Baoulé' },
        { colspan: 1, name: 'Langue de chez nous', host: 'Bété' },
        { colspan: 1, name: 'Le Parlement des Enfants', host: 'Charly Continental' },
        { colspan: 1, name: 'Création', host: 'Émission publique' },
        { colspan: 1, name: 'Reggae Time', host: 'Bassamouka' },
        { colspan: 1, weekend: true, name: 'Expression Jeunes', host: 'A. Kaboré' },
        { colspan: 1, weekend: true, name: 'Les Rendez-vous de la Rédaction / Droit', host: 'en 15 min' },
      ],
    },
    {
      time: '16H - 17H',
      cells: [
        { colspan: 1, name: "Fauteuil d'Or", host: 'Charly' },
        { colspan: 1, name: 'Rythmes et Traditions', host: 'C.C. Culturel — Roxell/Diaby' },
        { colspan: 1, name: 'Start au Mic', host: 'KS de Sirana' },
        { colspan: 1, name: 'Musique Tour' },
        { colspan: 1, empty: true },
        { colspan: 1, weekend: true, name: 'Kiff ta Radio', host: 'Roxell Dazir' },
        { colspan: 1, weekend: true, name: 'Salut la Compagnie', host: 'Ekra Jean de Dieu' },
      ],
    },
    {
      time: '17H - 18H',
      cells: [
        { colspan: 1, name: 'La Mairie à votre Service' },
        { colspan: 1, name: "Femme d'ici et d'ailleurs" },
        { colspan: 1, name: 'Social Plus', host: 'Argument : Sam D.' },
        { colspan: 1, name: 'Santé' },
        { colspan: 1, name: 'Takbir' },
        { colspan: 1, weekend: true, name: 'Allô Mairie' },
        { colspan: 1, weekend: true, name: 'Salut la Compagnie', host: 'Ekra Jean de Dieu' },
      ],
    },
    {
      time: '18H - 19H',
      cells: [
        { colspan: 5, name: 'Journal + Communiqués + Musique', host: 'puis Flux musical' },
        { colspan: 1, weekend: true, name: 'Journal + Comm. + Musique', host: 'puis Dédicaces Week-end' },
        { colspan: 1, weekend: true, name: 'Journal + Comm. + Musique', host: 'puis Playlist' },
      ],
    },
    {
      time: '19H - 20H',
      cells: [
        { colspan: 1, name: 'Yop Connexion', host: 'Doug Sanguard' },
        { colspan: 1, name: 'Sport à la Loupe', host: 'R. Gaga' },
        { colspan: 1, name: 'Rythme des Caraïbes', host: 'Pinto/Philippe' },
        { colspan: 1, name: 'English VOA' },
        { colspan: 1, name: 'Sport à la Loupe', host: 'Sam Diomandé' },
        { colspan: 1, weekend: true, name: 'Zouglou Vibration', host: 'Romy Héro' },
        { colspan: 1, weekend: true, name: 'Cantique' },
      ],
    },
    {
      time: '20H - 21H',
      cells: [
        { colspan: 5, name: 'Contes' },
        { colspan: 1, weekend: true, name: 'Yop Night Club', host: "Espace des DJ's de Yopougon" },
        { colspan: 1, weekend: true, name: 'Au Bon Vieux Temps' },
      ],
    },
    {
      time: '21H - 22H',
      cells: [
        { colspan: 5, name: "À l'École de la Vie" },
        { colspan: 1, weekend: true, name: 'Playlist' },
        { colspan: 1, weekend: true, empty: true },
      ],
    },
    {
      time: '22H - 23H',
      cells: [
        { colspan: 5, name: "Au Seuil de l'Irréel" },
        { colspan: 1, weekend: true, name: "Femme d'ici et d'ailleurs" },
        { colspan: 1, weekend: true, empty: true },
      ],
    },
    {
      time: '23H - 24H',
      cells: [
        { colspan: 5, name: 'Contes' },
        { colspan: 1, weekend: true, name: "Si Yop m'était conté" },
        { colspan: 1, weekend: true, name: 'Santé' },
      ],
    },
    {
      time: '24H - 01H',
      cells: [
        { colspan: 1, name: 'Playlist' },
        { colspan: 1, name: 'Playlist' },
        { colspan: 1, name: 'Playlist' },
        { colspan: 1, name: 'Playlist' },
        { colspan: 1, name: 'Takbir Mix' },
        { colspan: 1, weekend: true, name: 'Mix' },
        { colspan: 1, weekend: true, name: 'Playlist' },
      ],
    },
    {
      time: '01H - 06H',
      cells: [
        { colspan: 5, name: 'Nuit — programmation automatisée' },
        { colspan: 2, weekend: true, name: 'Nuit — programmation automatisée' },
      ],
    },
  ];

  readonly scheduleNotes: ScheduleNote[] = [
    { icon: 'fa-newspaper', title: 'Journaux', description: 'Journal parlé complet à 12H et 18H, du lundi au dimanche.' },
    { icon: 'fa-bolt', title: 'Flashs infos', description: "Flashs d'information à 8H, 10H et 14H." },
    { icon: 'fa-language', title: 'Langues locales', description: '« Langue de chez nous » met aussi à l\'honneur, en rotation, le Gouro, le Sénoufo, le Malinké et le Guéré.' },
  ];
}
