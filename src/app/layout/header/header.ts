import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly nav = [
    {
      label: 'Gifts',
      route: '/journey/gifts',
      items: ['All gifts', 'Best sellers', 'For kids', 'Exclusive', 'Deals of the day'],
    },
    {
      label: 'Occasions',
      route: '/journey/occasions',
      items: ['Birthdays', 'Weddings & anniversaries', 'New baby', 'Festivals', 'Seasonal'],
    },
    {
      label: 'Customize',
      route: '/journey/customize',
      items: ['Tins', 'Monograms & engraving', 'Notes & cards', 'Private label'],
    },
    {
      label: 'Corporate',
      route: '/journey/corporate',
      items: ['Volume pricing', 'Branded packaging', 'The corporate desk'],
    },
    {
      label: 'Stories',
      route: '/journey/stories',
      items: ['Latest stories', 'Gifting guides', 'From the stables'],
    },
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}