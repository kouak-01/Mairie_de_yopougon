import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

interface EnvPoint {
  icon: string;
  text: string;
}

interface EnvCategory {
  id: string;
  label: string;
  icon: string;
  tagline: string;
  paragraphs: string[];
  points: EnvPoint[];
  illustration: string;
  illustrationAlt: string;
}

interface CollecteRow {
  zone: string;
  frequence: string;
  mode: string;
}

interface BannerStat {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
}

/**
 * Page "Environnement" de la rubrique Vivre à Yopougon : collecte des
 * déchets, espaces verts (Plan Vert, V23) et zones naturelles protégées
 * (Parc National du Banco, lagune Ébrié) qui bordent la commune.
 */
@Component({
  selector: 'app-vivre-environnement-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TableModule, FadeInDirective, CountUpDirective],
  templateUrl: './vivre-environnement-page.component.html',
  styleUrl: './vivre-environnement-page.component.scss',
})
export class EnvironnementVivrePageComponent {
  readonly bannerStats: BannerStat[] = [
    { icon: 'fa-tree', value: 3438, suffix: ' ha', label: 'protégés au Parc National du Banco, à la porte de Yopougon' },
    { icon: 'fa-seedling', value: 800, suffix: '+', label: "espèces d'arbres recensées dans son arboretum" },
    { icon: 'fa-paw', value: 60, label: 'espèces animales recensées dans le parc' },
    { icon: 'fa-recycle', value: 5, label: 'zones de collecte définies par l\'ANASUR dans le District' },
  ];

  readonly envCategories: EnvCategory[] = [
    {
      id: 'collecte',
      label: 'Collecte des déchets',
      icon: 'fa-trash-can',
      tagline: 'Salubrité et gestion des ordures ménagères',
      paragraphs: [
        "La gestion des déchets ménagers dans le District autonome d'Abidjan relève d'une organisation à plusieurs niveaux. L'Agence Nationale de la Salubrité Urbaine (ANASUR), créée en 2007, définit la politique de salubrité et découpe le District en cinq zones de collecte : Yopougon et Songon forment ensemble la Zone 4. Sur le terrain, des sociétés privées agréées assurent la pré-collecte de proximité dans les quartiers, puis l'évacuation vers les centres de traitement, sous la supervision du District et en lien avec la mairie.",
        "Le rythme de passage varie d'un secteur à l'autre selon la densité de population et l'accessibilité des voies : il n'existe pas de calendrier unique valable pour toute la commune. Renseignez-vous auprès de la société agréée dans votre secteur ou des services municipaux pour connaître les jours de passage qui vous concernent.",
        "Comme dans le reste du District, la continuité de la collecte dépend directement du bon renouvellement des contrats entre les autorités et les sociétés agréées : des perturbations ponctuelles peuvent survenir lorsque ces contrats arrivent à échéance, avant un retour progressif à la normale.",
      ],
      points: [
        { icon: 'fa-recycle', text: "5 zones de collecte définies par l'ANASUR ; Yopougon-Songon forme la Zone 4" },
        { icon: 'fa-dumpster', text: 'Pré-collecte de proximité puis évacuation vers les centres de traitement du District' },
        { icon: 'fa-triangle-exclamation', text: 'Déposez vos ordures uniquement aux points de regroupement autorisés' },
      ],
      illustration: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?fm=jpg&q=80&w=1200&auto=format&fit=crop',
      illustrationAlt: 'Bac à ordures ménagères plein en attente de collecte',
    },
    {
      id: 'espaces-verts',
      label: 'Espaces verts',
      icon: 'fa-seedling',
      tagline: 'Le Plan Vert et le futur boulevard V23',
      paragraphs: [
        "Face à la pression urbaine et à la raréfaction des espaces publics — un phénomène documenté jusque dans des quartiers comme Yopougon Sogefiha-Siporex, où l'installation d'activités économiques informelles a progressivement grignoté trottoirs et espaces communs — le District autonome d'Abidjan a engagé un Plan Vert métropolitain. Son objectif : doter l'agglomération d'un réseau de jardins publics, de parcs urbains et de corridors écologiques reliant zones humides et massifs forestiers, pour lutter contre les îlots de chaleur urbains et se rapprocher des standards internationaux de surface verte par habitant.",
        "Yopougon est directement concernée à travers le projet de requalification de la V23, un axe est-ouest structurant de la commune appelé à devenir un boulevard urbain moderne : pistes cyclables, cheminements piétons, contre-allées et aménagements paysagers sont à l'étude. L'atelier de validation du Plan Vert et du Parkway de la V23 s'est tenu fin septembre 2025 à Jacqueville, réunissant le District, les ministères techniques et des partenaires internationaux (Banque africaine de développement, Fonds pour l'environnement mondial) ; les premiers effets sont attendus sous deux ans sur les secteurs les plus dégradés.",
      ],
      points: [
        { icon: 'fa-road', text: 'V23 : un axe est-ouest de Yopougon requalifié en boulevard urbain paysager' },
        { icon: 'fa-leaf', text: 'Corridors écologiques reliant zones humides et espaces forestiers du District' },
        { icon: 'fa-city', text: "Réhabilitation prioritaire des espaces verts les plus dégradés par l'occupation informelle" },
      ],
      illustration: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?fm=jpg&q=80&w=1200&auto=format&fit=crop',
      illustrationAlt: 'Allée arborée dans un parc urbain',
    },
    {
      id: 'zones-protegees',
      label: 'Zones protégées',
      icon: 'fa-tree',
      tagline: 'Le Parc National du Banco et la lagune Ébrié',
      paragraphs: [
        "La commune borde l'une des plus importantes réserves de biodiversité urbaine au monde : le Parc National du Banco, classé à la jonction des communes d'Abobo, Adjamé, Attécoubé et Yopougon. Avec ses 3 438 hectares, dont 600 hectares de forêt primaire, il est souvent présenté comme le deuxième plus grand parc urbain forestier au monde, après la forêt de Tijuca à Rio de Janeiro.",
        "Son arboretum rassemble plus de 800 espèces d'arbres originaires d'Afrique, d'Asie et d'Amérique latine, aux côtés d'une soixantaine d'espèces animales — singes, pangolins, reptiles, oiseaux — et d'un doyen remarquable : un fromager (kossipo) vieux d'environ 500 ans. Le parc joue aussi le rôle de château d'eau naturel pour l'agglomération abidjanaise, alimentant plusieurs cours d'eau qui traversent la ville.",
        "Plus au sud, la lagune Ébrié qui borde Yopougon abrite elle aussi des espaces naturels préservés, comme l'île Boulay, identifiée par les pouvoirs publics parmi les sites naturels remarquables du District à protéger.",
      ],
      points: [
        { icon: 'fa-tree', text: '3 438 hectares protégés, dont 600 hectares de forêt primaire' },
        { icon: 'fa-paw', text: "Environ 60 espèces animales et plus de 800 espèces végétales recensées" },
        { icon: 'fa-water', text: 'Île Boulay, sur la lagune Ébrié, identifiée comme espace naturel à préserver' },
      ],
      illustration: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?fm=jpg&q=80&w=1200&auto=format&fit=crop',
      illustrationAlt: 'Sentier forestier dans une forêt tropicale dense',
    },
  ];

  readonly activeCategoryId = signal(this.envCategories[0].id);

  readonly activeCategory = computed(
    () => this.envCategories.find((category) => category.id === this.activeCategoryId()) ?? this.envCategories[0]
  );

  selectCategory(id: string): void {
    this.activeCategoryId.set(id);
  }

  readonly collecteRows: CollecteRow[] = [
    {
      zone: 'Zone résidentielle dense (Sicogi, Niangon, Sideci...)',
      frequence: '2 à 3 passages par semaine (indicatif)',
      mode: 'Bac à ordures + points de regroupement',
    },
    {
      zone: "Abords des marchés et axes commerçants",
      frequence: 'Passage quasi quotidien sur les axes les plus fréquentés (indicatif)',
      mode: 'Pré-collecte renforcée',
    },
    {
      zone: 'Zone périphérique / moins dense',
      frequence: '1 à 2 passages par semaine (indicatif)',
      mode: 'Points de regroupement communautaires',
    },
  ];
}
