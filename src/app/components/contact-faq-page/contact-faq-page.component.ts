import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { CountUpDirective } from '../../directives/count-up.directive';

interface FaqItem {
  icon: string;
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  icon: string;
  illustration: string;
  illustrationAlt: string;
  illustrationTitle: string;
  illustrationCaption: string;
  items: FaqItem[];
}

interface SearchResult {
  category: FaqCategory;
  item: FaqItem;
}

/**
 * Page dédiée à faq.html (site source) : FAQ par catégories avec accordéon,
 * recherche en direct avec état "aucun résultat", vidéo explicative et
 * bandeau d'appel à l'aide.
 */
@Component({
  selector: 'app-contact-faq-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective, CountUpDirective],
  templateUrl: './contact-faq-page.component.html',
  styleUrl: './contact-faq-page.component.scss',
})
export class ContactFaqPageComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly videoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/688Qofc2dAw'
  );

  // ===== FAQ =====
  readonly faqCategories: FaqCategory[] = [
    {
      id: 'etat-civil',
      label: 'État civil',
      icon: 'fa-file-signature',
      illustration: 'assets/images/faq/registre-etat-civil.png',
      illustrationAlt: "Registre d'état civil",
      illustrationTitle: 'À savoir',
      illustrationCaption:
        "Les actes d'état civil délivrés par la mairie de Yopougon sont désormais numérisés via le logiciel national Cityweb, développé par l'ONECI en partenariat avec l'Union Européenne.",
      items: [
        {
          icon: 'fa-baby',
          question: "Comment obtenir un extrait d'acte de naissance ?",
          answer:
            "Rendez-vous au service de l'état civil de la mairie avec le numéro d'acte ou les informations d'identification de la personne concernée. Vous pouvez également effectuer la demande via le portail en ligne de la mairie et régler les frais par Mobile Money (Orange Money, MTN, Moov). L'acte numérisé vous est ensuite délivré rapidement grâce au logiciel Cityweb déployé par l'ONECI.",
        },
        {
          icon: 'fa-laptop',
          question: "Puis-je faire une demande d'acte de naissance en ligne ?",
          answer:
            "Oui. Grâce à la modernisation de l'état civil, la mairie propose un service en ligne permettant de demander un extrait d'acte de naissance, de mariage ou de décès sans vous déplacer. La demande s'effectue en renseignant vos informations, puis en réglant les frais par voie électronique.",
        },
        {
          icon: 'fa-clock',
          question: "Quel est le délai de délivrance d'un acte d'état civil ?",
          answer:
            'Depuis le déploiement du logiciel Cityweb, les actes peuvent être produits dès la déclaration de l\'événement (naissance, mariage, décès). Pour les demandes de copies d\'actes déjà enregistrés, le délai est généralement de quelques heures à 48h selon l\'affluence.',
        },
        {
          icon: 'fa-file-medical',
          question: 'Comment déclarer une naissance ou un décès ?',
          answer:
            "La déclaration doit être faite dans les délais légaux auprès du service d'état civil, munie des pièces justificatives (certificat d'accouchement ou de décès délivré par l'établissement sanitaire, pièce d'identité du déclarant). Les centres de santé de la commune sont interconnectés avec la mairie pour accélérer la notification des naissances et des décès.",
        },
        {
          icon: 'fa-ring',
          question: 'Où et comment se marier civilement à la mairie de Yopougon ?',
          answer:
            "Le dossier de mariage civil (pièces d'identité, certificats de résidence, actes de naissance des futurs époux) doit être déposé au service de l'état civil au moins un mois avant la date souhaitée. Après publication des bans, la cérémonie se déroule dans la salle des mariages de la mairie.",
        },
      ],
    },
    {
      id: 'urbanisme',
      label: 'Urbanisme',
      icon: 'fa-drafting-compass',
      illustration: 'assets/images/faq/chantier-constuction-2.jpg',
      illustrationAlt: 'Chantier de construction urbanisme',
      illustrationTitle: 'Bon à savoir',
      illustrationCaption:
        "Toute construction sans autorisation préalable expose le propriétaire à des sanctions administratives, pouvant aller jusqu'à la démolition de l'ouvrage non conforme.",
      items: [
        {
          icon: 'fa-hard-hat',
          question: 'Quels documents sont nécessaires pour un permis de construire ?',
          answer:
            "Un dossier type comprend : le titre de propriété ou l'attestation villageoise, le plan de situation, les plans architecturaux visés par un professionnel agréé, ainsi qu'une pièce d'identité du demandeur. Le dossier est déposé au service de l'urbanisme de la mairie pour instruction.",
        },
        {
          icon: 'fa-house-user',
          question: 'Comment obtenir un certificat de résidence ?',
          answer:
            "Présentez-vous avec une pièce d'identité en cours de validité et un justificatif de domicile (facture d'électricité, d'eau ou attestation du chef de quartier) au guichet unique de la mairie. Le certificat est généralement délivré le jour même.",
        },
        {
          icon: 'fa-stopwatch',
          question: "Quels sont les délais d'instruction d'un dossier d'urbanisme ?",
          answer:
            "Le délai d'instruction varie selon la nature du projet (habitation individuelle, immeuble collectif, local commercial) mais se situe généralement entre 15 et 45 jours ouvrés, sous réserve de la complétude du dossier déposé.",
        },
      ],
    },
    {
      id: 'en-ligne',
      label: 'Services en ligne',
      icon: 'fa-globe',
      illustration: 'assets/images/faq/service-en-ligne.jpg',
      illustrationAlt: 'Démarche administrative en ligne sur smartphone',
      illustrationTitle: 'Astuce',
      illustrationCaption:
        'Gardez toujours une copie numérique de votre reçu de paiement et de votre numéro de suivi pour accélérer le traitement en cas de réclamation.',
      items: [
        {
          icon: 'fa-desktop',
          question: 'Comment utiliser le portail en ligne de la mairie ?',
          answer:
            "Le portail des services en ligne vous permet de renseigner vos informations, de choisir la démarche souhaitée (état civil, certificats, etc.) puis de suivre l'avancement de votre dossier depuis chez vous, 24h/24.",
        },
        {
          icon: 'fa-mobile-alt',
          question: 'Quels moyens de paiement sont acceptés en ligne ?',
          answer:
            'Les paiements en ligne s\'effectuent via Mobile Money : Orange Money, MTN Mobile Money et Moov Money. Un reçu électronique vous est transmis après validation du paiement.',
        },
        {
          icon: 'fa-route',
          question: "Comment suivre l'état de ma demande ?",
          answer:
            "Un numéro de suivi vous est communiqué après le dépôt de votre demande. Il permet de consulter en temps réel l'état de traitement de votre dossier directement sur le portail en ligne.",
        },
      ],
    },
    {
      id: 'taxes',
      label: 'Taxes & Budget',
      icon: 'fa-coins',
      illustration: 'assets/images/faq/taxe-budget-2.png',
      illustrationAlt: 'Gestion des finances et du budget communal',
      illustrationTitle: 'Transparence',
      illustrationCaption: "La mairie s'engage à une gestion transparente des ressources communales au bénéfice de tous les Yopougonnais.",
      items: [
        {
          icon: 'fa-hand-holding-dollar',
          question: 'Où et comment payer mes taxes municipales ?',
          answer:
            "Les taxes et redevances communales (occupation du domaine public, taxes sur les activités commerciales, etc.) se règlent à la régie de recettes de la mairie ou auprès des agents de recouvrement assermentés munis d'un reçu officiel.",
        },
        {
          icon: 'fa-chart-pie',
          question: 'Le budget communal est-il consultable par les citoyens ?',
          answer:
            'Oui, dans un souci de transparence, les grandes lignes du budget communal sont présentées lors des sessions du Conseil municipal et peuvent être consultées auprès du service des finances de la mairie.',
        },
      ],
    },
    {
      id: 'marches',
      label: 'Marchés publics',
      icon: 'fa-file-invoice',
      illustration: 'assets/images/faq/marche-public.jpg',
      illustrationAlt: "Dossier d'appel d'offres marché public",
      illustrationTitle: 'Bon à savoir',
      illustrationCaption: "La commune veille à l'égalité de traitement de tous les soumissionnaires dans le respect du code des marchés publics.",
      items: [
        {
          icon: 'fa-bullhorn',
          question: "Comment consulter les avis d'appels d'offres de la commune ?",
          answer:
            "Les avis d'appels d'offres et de marchés publics sont publiés sur la rubrique dédiée du site de la mairie ainsi que sur les panneaux d'affichage officiels à l'entrée de l'hôtel de ville.",
        },
        {
          icon: 'fa-file-contract',
          question: 'Comment soumissionner à un marché public de la commune ?',
          answer:
            "Les entreprises intéressées doivent retirer le dossier d'appel d'offres auprès du service des marchés publics, puis déposer leur offre technique et financière dans les délais et selon les modalités précisées dans l'avis.",
        },
      ],
    },
    {
      id: 'vie-locale',
      label: 'Vie locale & emploi',
      icon: 'fa-people-group',
      illustration: 'assets/images/faq/emploi.jpg',
      illustrationAlt: 'Vie associative et culturelle communautaire',
      illustrationTitle: 'Engagement',
      illustrationCaption: "La mairie encourage activement la jeunesse et les associations locales à s'impliquer dans la vie communale.",
      items: [
        {
          icon: 'fa-briefcase',
          question: "Comment s'inscrire aux programmes d'emploi de la mairie ?",
          answer:
            "La rubrique « Emplois » du site publie régulièrement les offres et campagnes de recrutement. Les candidats peuvent déposer leur dossier de candidature directement en ligne ou au service concerné de la mairie.",
        },
        {
          icon: 'fa-futbol',
          question: 'Comment participer aux événements culturels et sportifs ?',
          answer:
            "Les événements (tournois, festivals, journées culturelles) sont annoncés dans la rubrique Actualités et sur l'Agenda du site. L'inscription se fait généralement auprès de la direction sport et culture de la mairie.",
        },
      ],
    },
    {
      id: 'contact',
      label: 'Contact & accès',
      icon: 'fa-phone-alt',
      illustration: 'assets/images/faq/contact.png',
      illustrationAlt: 'Accueil et contact à la mairie',
      illustrationTitle: 'Restons en contact',
      illustrationCaption: "Notre équipe d'accueil se tient à votre disposition du lundi au vendredi pour répondre à toutes vos questions.",
      items: [
        {
          icon: 'fa-business-time',
          question: "Quels sont les horaires d'ouverture de la mairie ?",
          answer:
            "Les services de la mairie sont ouverts du lundi au vendredi, de 7h30 à 16h00, sans interruption. Certains guichets d'état civil peuvent proposer des permanences le samedi matin selon l'affluence.",
        },
        {
          icon: 'fa-comments',
          question: 'Comment contacter la mairie ou prendre rendez-vous ?',
          answer:
            "Vous pouvez appeler le +225 27 23 45 28 20, écrire à contact@yopougon.ci, ou utiliser le formulaire de contact du site. Pour certaines démarches, un rendez-vous peut être pris directement au guichet concerné.",
        },
        {
          icon: 'fa-wheelchair',
          question: 'La mairie est-elle accessible aux personnes à mobilité réduite ?',
          answer:
            "Oui, l'hôtel de ville dispose de rampes d'accès et le personnel d'accueil est mobilisé pour orienter et accompagner les usagers à mobilité réduite vers les guichets appropriés.",
        },
      ],
    },
  ];

  readonly activeFaqCategoryId = signal(this.faqCategories[0].id);
  readonly openFaqIndex = signal(0);

  readonly activeFaqCategory = computed(
    () => this.faqCategories.find((category) => category.id === this.activeFaqCategoryId()) ?? this.faqCategories[0]
  );

  selectFaqCategory(id: string): void {
    if (this.activeFaqCategoryId() === id) return;
    this.activeFaqCategoryId.set(id);
    this.openFaqIndex.set(0);
  }

  toggleFaqItem(index: number): void {
    this.openFaqIndex.update((current) => (current === index ? -1 : index));
  }

  // ===== RECHERCHE EN DIRECT =====
  readonly searchQuery = signal('');
  readonly openSearchResultIndex = signal(-1);

  readonly isSearching = computed(() => this.searchQuery().trim().length > 0);

  readonly searchResults = computed<SearchResult[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) return [];
    const results: SearchResult[] = [];
    for (const category of this.faqCategories) {
      for (const item of category.items) {
        const haystack = `${item.question} ${item.answer}`.toLowerCase();
        if (haystack.includes(query)) {
          results.push({ category, item });
        }
      }
    }
    return results;
  });

  readonly hasNoResults = computed(() => this.isSearching() && this.searchResults().length === 0);

  onSearchInput(value: string): void {
    this.searchQuery.set(value);
    this.openSearchResultIndex.set(-1);
  }

  toggleSearchResult(index: number): void {
    this.openSearchResultIndex.update((current) => (current === index ? -1 : index));
  }
}
