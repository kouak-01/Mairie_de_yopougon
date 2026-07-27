// Interface typée décrivant un élément de navigation (jusqu'à 3 niveaux)

export interface NavItem {
  id: string;
  label: string;
  icon?: string;
  iconType?: 'fas' | 'fab';
  link?: string;
  fragment?: string;
  externalLink?: string;
  cta?: boolean;
  children?: NavItem[];
}
