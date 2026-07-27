import { Component, signal, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.scss',
})
export class ScrollTopComponent {
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.visible.set(window.scrollY > 100);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
