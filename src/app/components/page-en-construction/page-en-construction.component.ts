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


  readonly particles = signal<Particle[]>(this.generateParticles());


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

  
}
