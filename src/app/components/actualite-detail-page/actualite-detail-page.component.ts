import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface ArticleListItem {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
}

interface BodyBlock {
  type: 'lead' | 'paragraph' | 'heading' | 'subheading' | 'list' | 'gallery' | 'quote';
  text?: string;
  items?: { icon: string; label: string; text: string }[];
  images?: { src: string; alt: string }[];
  quote?: string;
  cite?: string;
  citeContext?: string;
}

interface Comment {
  initials: string;
  name: string;
  date: string;
  text: string;
}

interface AgendaItem {
  day: string;
  month: string;
  title: string;
  time: string;
}

const ARTICLES: ArticleListItem[] = [
  {
    id: 'chantiers-independance-2026',
    image: 'assets/images/actualites/1.jpg',
    category: 'Développement',
    title: "J-20 : les chantiers s'accélèrent à Yopougon pour la fête de l'Indépendance",
    excerpt: "À vingt jours de la Fête de l'Indépendance, le Ministre des Infrastructures et de l'Entretien Routier a effectué une visite d'inspection des chantiers.",
    date: '15 Juillet 2026',
  },
  {
    id: 'fete-independance-mobilisation-presse',
    image: 'assets/images/actualites/2.jpg',
    category: 'Mobilisation',
    title: "Fête de l'Indépendance 2026 : le Député-Maire mobilise la presse",
    excerpt: "À quelques semaines de la célébration de la 66ᵉ Fête de l'Indépendance qui se tiendra cette année à Yopougon, le Député-Maire a rencontré les professionnels des médias pour organiser la couverture de l'événement.",
    date: '08 Juillet 2026',
  },
  {
    id: 'visite-terrain-premier-adjoint',
    image: 'assets/images/actualites/3.jpg',
    category: 'Inspection',
    title: 'Visite de terrain du premier adjoint au maire',
    excerpt: 'Le premier adjoint au maire s’est rendu à Siporex, Cosmos, Ficgayo et Selmer Tanti Mago pour constater l’avancée des travaux d’assainissement et de voirie dans ces quartiers.',
    date: '01 Juillet 2026',
  },
  {
    id: 'rentree-scolaire-2026-2027',
    image: 'assets/images/actualites/1.jpg',
    category: 'Éducation',
    title: 'Rentrée scolaire 2026-2027 : les inscriptions sont ouvertes',
    excerpt: "La Mairie de Yopougon annonce l'ouverture des inscriptions dans les écoles municipales pour la prochaine année scolaire. Les familles peuvent déposer leur dossier dans les centres dédiés dès à présent.",
    date: '22 Juin 2026',
  },
  {
    id: 'vaccination-gratuite-niangon',
    image: 'assets/images/actualites/2.jpg',
    category: 'Santé',
    title: 'Campagne de vaccination gratuite au Centre de Santé de Niangon',
    excerpt: "Dans le cadre de sa politique de santé publique, la commune organise une campagne de vaccination gratuite ouverte à tous les habitants, enfants comme adultes, jusqu'à la fin du mois.",
    date: '15 Juin 2026',
  },
  {
    id: 'centre-culturel-inaugure',
    image: 'assets/images/actualites/3.jpg',
    category: 'Culture',
    title: 'Le nouveau centre culturel de Yopougon inauguré',
    excerpt: 'Un espace moderne dédié aux arts, à la musique et aux traditions locales ouvre ses portes au public dès le 1er août. Il accueillera notamment des ateliers pour les jeunes talents de la commune.',
    date: '05 Juin 2026',
  },
  {
    id: 'securite-proximite-renforcement',
    image: 'assets/images/actualites/1.jpg',
    category: 'Sécurité',
    title: 'Renforcement du dispositif de sécurité de proximité',
    excerpt: "La municipalité, en lien avec les forces de l'ordre, annonce le déploiement de nouveaux points d'éclairage public et de patrouilles de proximité dans les quartiers les plus sensibles.",
    date: '28 Mai 2026',
  },
  {
    id: 'rehabilitation-grand-marche',
    image: 'assets/images/actualites/2.jpg',
    category: 'Développement',
    title: 'Réhabilitation du grand marché de Yopougon : les travaux avancent',
    excerpt: 'Le chantier de rénovation du marché central se poursuit avec la réfection des allées, des sanitaires et des espaces de stockage, pour un environnement plus sain pour les commerçants et les clients.',
    date: '20 Mai 2026',
  },
  {
    id: 'journee-salubrite',
    image: 'assets/images/actualites/3.jpg',
    category: 'Salubrité',
    title: 'Grande journée de salubrité : les habitants répondent présents',
    excerpt: 'Plusieurs centaines de volontaires se sont mobilisés aux côtés des équipes municipales pour une opération de nettoyage des rues, caniveaux et espaces publics dans huit quartiers de la commune.',
    date: '12 Mai 2026',
  },
];

const FEATURED_BODY: BodyBlock[] = [
  {
    type: 'lead',
    text: "À vingt jours de la Fête de l'Indépendance, le Ministre des Infrastructures et de l'Entretien Routier a effectué une visite d'inspection des chantiers en cours dans la commune de Yopougon. Voiries, éclairage public et espaces verts font l'objet d'une remise à niveau accélérée avant les festivités du 7 août, qui se tiendront cette année dans la commune.",
  },
  {
    type: 'paragraph',
    text: "Accompagné du Député-Maire et des directeurs techniques municipaux, le Ministre a sillonné plusieurs axes stratégiques de la commune, notamment le boulevard principal de Yopougon-Sicobois, la voie de contournement de Niangon et les abords de la grande esplanade où se dérouleront les cérémonies officielles.",
  },
  { type: 'heading', text: 'Un programme de travaux sur trois volets' },
  { type: 'paragraph', text: "Le plan de remise à niveau engagé par la municipalité, en collaboration avec les services de l'État, s'articule autour de trois axes prioritaires :" },
  {
    type: 'list',
    items: [
      { icon: 'fa-road', label: 'Voirie :', text: 'reprofilage et bitumage de 12 km de routes communales, réfection des trottoirs et marquage au sol sur les principaux axes de circulation.' },
      { icon: 'fa-lightbulb', label: 'Éclairage public :', text: 'installation de 340 nouveaux lampadaires solaires dans les quartiers Sicobois, Niangon et Selmer Tanti Mago.' },
      { icon: 'fa-tree', label: 'Espaces verts :', text: 'aménagement paysager de la grande esplanade et plantation de 500 arbres le long des principales avenues.' },
    ],
  },
  {
    type: 'gallery',
    images: [
      { src: 'assets/images/actualites/1.jpg', alt: 'Réfection de voirie à Yopougon' },
      { src: 'assets/images/actualites/3.jpg', alt: 'Visite de chantier du premier adjoint au maire' },
      { src: 'assets/images/actualites/2.jpg', alt: 'Aménagement des espaces verts' },
    ],
  },
  {
    type: 'paragraph',
    text: "Selon les responsables du chantier, l'ensemble des travaux de voirie et d'éclairage devrait être achevé au plus tard le 3 août, laissant une marge de sécurité de quatre jours avant le début des festivités officielles. Un dispositif de suivi quotidien a été mis en place afin d'anticiper tout retard éventuel lié aux intempéries.",
  },
  {
    type: 'quote',
    quote: "Yopougon accueille cette année les cérémonies de la Fête de l'Indépendance. Nous devons être à la hauteur de cet honneur en offrant à nos populations et à nos hôtes une commune propre, sûre et bien éclairée.",
    cite: 'Le Député-Maire de Yopougon',
    citeContext: "Lors de la visite d'inspection du 15 juillet 2026",
  },
  { type: 'heading', text: 'Une mobilisation de tous les instants' },
  {
    type: 'paragraph',
    text: "Plus de 200 agents municipaux et employés d'entreprises partenaires sont actuellement mobilisés sur les différents chantiers, travaillant par équipes successives afin de tenir les délais. La Mairie a par ailleurs annoncé la mise en place d'un numéro vert permettant aux habitants de signaler tout désagrément lié aux travaux.",
  },
  {
    type: 'paragraph',
    text: "Des riverains rencontrés sur le boulevard principal se disent globalement satisfaits de l'avancée des travaux, tout en espérant que les nouvelles infrastructures seront durablement entretenues après les festivités.",
  },
  { type: 'subheading', text: 'Prochaines étapes' },
  {
    type: 'paragraph',
    text: "Une nouvelle visite de contrôle est prévue le 30 juillet pour évaluer l'avancement final des travaux. Le programme complet des festivités du 7 août sera dévoilé lors d'un point de presse à la mi-juillet, avec un accent particulier sur les dispositifs de sécurité et de circulation mis en place pour l'occasion.",
  },
];

@Component({
  selector: 'app-actualite-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './actualite-detail-page.component.html',
  styleUrl: './actualite-detail-page.component.scss',
})
export class ActualiteDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly titleService = inject(Title);

  private readonly paramId = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });

  readonly articleId = computed(() => this.paramId().get('id') ?? ARTICLES[0].id);

  readonly article = computed(() => ARTICLES.find((a) => a.id === this.articleId()) ?? ARTICLES[0]);

  readonly hasFullBody = computed(() => this.article().id === 'chantiers-independance-2026');

  readonly bodyBlocks: BodyBlock[] = FEATURED_BODY;

  readonly relatedArticles = computed(() => {
    const currentId = this.article().id;
    const others = ARTICLES.filter((a) => a.id !== currentId);
    return others.slice(0, 3);
  });

  readonly moreArticles = computed(() => {
    const currentId = this.article().id;
    const others = ARTICLES.filter((a) => a.id !== currentId);
    return others.slice(3, 6);
  });

  readonly previousArticle = computed(() => this.siblingArticle(-1));
  readonly nextArticle = computed(() => this.siblingArticle(1));

  readonly tags: string[] = ['Développement', 'Social', 'Culture', 'Santé', 'Éducation', 'Sécurité'];

  readonly agendaItems: AgendaItem[] = [
    { day: '28', month: 'Juil.', title: 'Conseil municipal extraordinaire', time: '10h00 — Hôtel de ville' },
    { day: '30', month: 'Juil.', title: 'Contrôle final des chantiers', time: '09h00 — Voirie communale' },
    { day: '07', month: 'Août', title: "Fête de l'Indépendance", time: 'Journée — Grande esplanade' },
    { day: '15', month: 'Août', title: 'Fête de la commune', time: 'Journée — Stade municipal' },
  ];

  readonly comments: Comment[] = [
    { initials: 'AK', name: 'Aya K.', date: '16 Juillet 2026', text: 'Bonne nouvelle pour le quartier Sicobois, on attendait ces travaux depuis longtemps ! Merci à la mairie pour ce suivi.' },
    { initials: 'SB', name: 'Serge B.', date: '16 Juillet 2026', text: "J'espère que l'éclairage public sera bien entretenu après la fête, contrairement à d'autres installations par le passé." },
    { initials: 'MF', name: 'Marie-Flore', date: '17 Juillet 2026', text: 'Fière que notre commune accueille les cérémonies cette année. Bon courage aux équipes sur le terrain !' },
  ];

  constructor() {
    effect(() => {
      this.titleService.setTitle(`${this.article().title} - Mairie de Yopougon`);
    });
  }

  private siblingArticle(offset: number): ArticleListItem {
    const index = ARTICLES.findIndex((a) => a.id === this.article().id);
    const total = ARTICLES.length;
    return ARTICLES[(index + offset + total) % total];
  }
}
