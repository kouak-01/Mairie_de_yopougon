import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';

type FooterVariant = 'full' | 'simple';

function resolveFooterVariant(route: ActivatedRoute): FooterVariant {
  let current = route;
  while (current.firstChild) {
    current = current.firstChild;
  }
  return (current.snapshot.data['footerVariant'] as FooterVariant) ?? 'full';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);

  // Certaines pages du site source utilisent un pied de page allégé (ex. la page
  // Le Maire). Ce signal reflète le variant à afficher, déterminé par les route
  // data de la route active la plus profonde (voir app.routes.ts).
  readonly footerVariant = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => resolveFooterVariant(this.activatedRoute)),
      startWith(resolveFooterVariant(this.activatedRoute))
    ),
    { initialValue: 'full' as FooterVariant }
  );

  readonly currentFooterVariant = computed(() => this.footerVariant());
}
