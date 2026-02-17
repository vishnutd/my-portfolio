import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursorService {
  private cursorX = 0;
  private cursorY = 0;
  private targetX = 0;
  private targetY = 0;
  private rafId: number;

  constructor() {
    this.initCursor();
  }

  private initCursor() {
    if (typeof window === 'undefined') return;

    document.addEventListener('mousemove', (e: MouseEvent) => {
      this.targetX = e.clientX;
      this.targetY = e.clientY;
    });

    this.animate();
  }

  private animate = () => {
    // Smooth interpolation
    const ease = 0.15;
    this.cursorX += (this.targetX - this.cursorX) * ease;
    this.cursorY += (this.targetY - this.cursorY) * ease;

    // Update CSS custom properties
    document.documentElement.style.setProperty('--cursor-x', `${this.cursorX}px`);
    document.documentElement.style.setProperty('--cursor-y', `${this.cursorY}px`);
    document.documentElement.style.setProperty('--cursor-dot-x', `${this.targetX}px`);
    document.documentElement.style.setProperty('--cursor-dot-y', `${this.targetY}px`);

    this.rafId = requestAnimationFrame(this.animate);
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
