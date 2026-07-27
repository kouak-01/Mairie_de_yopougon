import { Directive, ElementRef, Input, OnDestroy, AfterViewInit, inject } from '@angular/core';

/**
 * Reproduit le comportement JS partagé (radio.js : animateCount) : anime la valeur
 * numérique du texte de l'hôte de 0 jusqu'à la cible dès qu'il entre dans le viewport.
 * Usage : <span class="stat-number" [appCountUp]="18" countUpSuffix="h/24">0</span>
 */
@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements AfterViewInit, OnDestroy {
  @Input({ required: true }) appCountUp!: number;
  @Input() countUpSuffix = '';

  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  private frameId?: number;

  ngAfterViewInit(): void {
    const el = this.elementRef.nativeElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate(el);
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    this.observer.observe(el);
  }

  private animate(el: HTMLElement): void {
    const target = this.appCountUp;
    const suffix = this.countUpSuffix;
    const duration = 1500;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value.toLocaleString('fr-FR') + suffix;
      if (progress < 1) {
        this.frameId = requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('fr-FR') + suffix;
      }
    };
    this.frameId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frameId) {
      cancelAnimationFrame(this.frameId);
    }
  }
}
