import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly dots: { left: number; speed: number; delay: number }[] = Array.from(
    { length: 14 },
    (_, index) => ({
      left: (index * 7.3 + 3) % 96,
      speed: +(8 + ((index * 5.3) % 8)).toFixed(2),
      delay: +((index * 0.9) % 8).toFixed(2),
    }),
  );
}