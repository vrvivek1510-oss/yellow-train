import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly router = inject(Router);

  protected readonly dots: { left: number; speed: number; delay: number }[] = Array.from(
    { length: 14 },
    (_, index) => ({
      left: (index * 7.3 + 3) % 96,
      speed: +(8 + ((index * 5.3) % 8)).toFixed(2),
      delay: +((index * 0.9) % 8).toFixed(2),
    }),
  );

  protected startJourney(): void {
    void this.router.navigate(['/journey']);
  }
}