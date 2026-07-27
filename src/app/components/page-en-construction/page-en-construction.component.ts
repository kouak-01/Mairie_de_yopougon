import { Component, signal, computed, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FadeInDirective } from '../../directives/fade-in.directive';

interface Particle {
  id: number;
  icon: string;
  left: string;
  fontSize: string;
  animationDuration: string;
  animationDelay: string;
}

const PARTICLE_ICONS = ['fa-gear', 'fa-helmet-safety', 'fa-screwdriver-wrench', 'fa-ruler-combined'];

@Component({
  selector: 'app-page-en-construction',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, ButtonModule, FadeInDirective],
  templateUrl: './page-en-construction.component.html',
  styleUrl: './page-en-construction.component.scss',
})
export class PageEnConstructionComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly progressTarget = 65;
  readonly progressValue = signal(0);
  readonly notifySent = signal(false);
  readonly emailControl = new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] });

  readonly particles = signal<Particle[]>(this.generateParticles());

  readonly progressWidth = computed(() => `${this.progressValue()}%`);

  constructor() {
    const startTimeout = setTimeout(() => this.animateProgress(), 400);
    this.destroyRef.onDestroy(() => clearTimeout(startTimeout));
  }

  private generateParticles(): Particle[] {
    const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 8 : 16;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      icon: PARTICLE_ICONS[i % PARTICLE_ICONS.length],
      left: `${Math.random() * 100}%`,
      fontSize: `${(0.9 + Math.random() * 1.2).toFixed(2)}rem`,
      animationDuration: `${(9 + Math.random() * 10).toFixed(2)}s`,
      animationDelay: `${(Math.random() * 10).toFixed(2)}s`,
    }));
  }

  private animateProgress(): void {
    const duration = 1600;
    const steps = 40;
    const stepTime = duration / steps;
    const increment = this.progressTarget / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= this.progressTarget) {
        current = this.progressTarget;
        clearInterval(interval);
      }
      this.progressValue.set(Math.round(current));
    }, stepTime);

    this.destroyRef.onDestroy(() => clearInterval(interval));
  }

  onNotifySubmit(): void {
    if (this.emailControl.invalid) {
      this.emailControl.markAsTouched();
      return;
    }
    this.notifySent.set(true);
    const resetTimeout = setTimeout(() => {
      this.notifySent.set(false);
      this.emailControl.reset('');
    }, 4000);
    this.destroyRef.onDestroy(() => clearTimeout(resetTimeout));
  }
}
