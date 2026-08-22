import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface NumberStat {
  icon: string;
  count: string;
  label: string;
}

interface SecteurCard {
  icon: string;
  title: string;
  description: string;
}

interface InstitutionItem {
  icon: string;
  label: string;
}

interface GalerieItem {
  image: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-economie-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FadeInDirective],
  templateUrl: './economie-page.component.html',
  styleUrl: './economie-page.component.scss',
})
export class EconomiePageComponent {
  readonly numberStats: NumberStat[] = [
    { icon: 'fa-industry', count: '469 ha', label: 'Zone industrielle de Yopougon' },
    { icon: 'fa-building', count: '400+', label: 'Entreprises installées' },
    { icon: 'fa-users', count: '6 000+', label: 'Emplois industriels directs' },
    { icon: 'fa-store', count: '~75%', label: 'Activité en secteur informel' },
  ];

  readonly secteurCards: SecteurCard[] = [
    { icon: 'fa-industry', title: 'Industrie & fabrication', description: 'Agroalimentaire, cosmétique, matériaux de construction, hygiène et détergents, transformés dans la zone industrielle.' },
    { icon: 'fa-store', title: 'Commerce & marchés', description: 'Marchés de quartier, boutiques, grossistes et le futur marché couvert de Yopougon sur 7 hectares.' },
    { icon: 'fa-hands-helping', title: 'Économie informelle', description: 'Petit commerce, artisanat et services de proximité, portés en majorité par les femmes yopougonnaises.' },
    { icon: 'fa-bolt', title: 'Énergie', description: "La centrale thermique d'Azito, un actif énergétique majeur pour l'approvisionnement électrique national." },
    { icon: 'fa-flask', title: 'Recherche & santé', description: "Institut Pasteur de Côte d'Ivoire, CNRA et centres hospitaliers, générateurs d'emplois qualifiés." },
    { icon: 'fa-shopping-bag', title: 'Grande distribution', description: "Centres commerciaux et supermarchés, dont le centre Cosmos, l'un des plus grands de la commune." },
  ];

  readonly institutions: InstitutionItem[] = [
    { icon: 'fa-bolt', label: "Centrale d'Azito" },
    { icon: 'fa-flask', label: 'Institut Pasteur' },
    { icon: 'fa-seedling', label: 'CNRA' },
    { icon: 'fa-hospital', label: 'CHU de Yopougon' },
    { icon: 'fa-shopping-cart', label: 'Centre Cosmos' },
    { icon: 'fa-microscope', label: 'Centre Suisse de Recherches' },
    { icon: 'fa-anchor', label: "Extension du Port d'Abidjan" },
    { icon: 'fa-industry', label: 'PK24 Akoupé-Zeudji' },
  ];

  readonly videoHighlights = [
    { icon: 'fa-industry', text: 'Unités de production' },
    { icon: 'fa-truck', text: 'Logistique & transport' },
    { icon: 'fa-users', text: "Bassin d'emplois" },
    { icon: 'fa-road', text: 'Axes routiers stratégiques' },
  ];

  readonly galerieItems: GalerieItem[] = [
    { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Quartier_Yopougon_BAE.jpg', alt: 'Zone urbaine et industrielle de Yopougon', label: 'Zone industrielle' },
    { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Abidjan%20Market.JPG', alt: 'Marché à Abidjan', label: 'Marché et commerce' },
    { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Commer%C3%A7ante%20de%20perle%20Africain%2001.jpg', alt: "Commerçante d'artisanat en Côte d'Ivoire", label: 'Artisanat local' },
    { image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cote%20d%27ivoire%20electricity.jpg', alt: "Infrastructure électrique en Côte d'Ivoire", label: 'Énergie' },
  ];
}
