import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly email = signal('');

  protected readonly subscribed = signal(false);

  protected subscribe(event: Event): void {
    event.preventDefault();
    if (this.email().trim()) {
      this.subscribed.set(true);
    }
  }
}