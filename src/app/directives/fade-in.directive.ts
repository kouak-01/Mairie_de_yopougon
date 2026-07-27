import { Directive, ElementRef, OnDestroy, AfterViewInit, inject } from '@angular/core';

/**
 * Reproduit le comportement JS partagé du site source (home.js / construction.js) :
 * observe l'élément et ajoute la classe 'visible' dès qu'il entre dans le viewport.
 * Usage : <div class="fade-in" appFadeIn>...</div>
 */
@Directive({
  selector: '[appFadeIn]',
  standalone: true,
})
export class FadeInDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    const el = this.elementRef.nativeElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
