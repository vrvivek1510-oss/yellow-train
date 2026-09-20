import { Component, AfterViewInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements AfterViewInit {

  protected readonly nav = [
    { label: 'Gifts', route: '/journey/gifts', items: ['All gifts', 'Best sellers', 'For kids', 'Exclusive', 'Deals of the day'] },
    { label: 'Occasions', route: '/journey/occasions', items: ['Birthdays', 'Weddings & anniversaries', 'New baby', 'Festivals', 'Seasonal'] },
    { label: 'Customize', route: '/journey/customize', items: ['Tins', 'Monograms & engraving', 'Notes & cards', 'Private label'] },
    { label: 'Corporate', route: '/journey/corporate', items: ['Volume pricing', 'Branded packaging', 'The corporate desk'] },
    { label: 'Stories', route: '/journey/stories', items: ['Latest stories', 'Gifting guides', 'From the stables'] },
  ];

  protected readonly isLight = signal(false);

  protected readonly menuOpen = signal(false);

  ngAfterViewInit(): void {
    if (typeof document === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    const zones: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('[data-j-nav]'));
    if (zones.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: { top: number; theme: 'dark' | 'light' } | null = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const theme = (entry.target as HTMLElement).dataset['jNav'] === 'light' ? 'light' : 'dark';
          const top = entry.boundingClientRect.top;
          if (!best || top < best.top) best = { top, theme };
        }
        if (best) this.isLight.set(best.theme === 'light');
      },
      { rootMargin: '-60px 0px 0px 0px' },
    );

    zones.forEach((zone) => observer.observe(zone));
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}