import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders all five navigation routes', () => {
    const links = Array.from((fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>('.j-menu__link'));
    expect(links.map((link) => link.getAttribute('routerLink'))).toEqual([
      '/journey/gifts',
      '/journey/occasions',
      '/journey/customize',
      '/journey/corporate',
      '/journey/stories',
    ]);
  });

  it('opens and closes the mobile overlay from the burger button', () => {
    fixture.detectChanges();
    const burger = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>('.j-burger')!;

    burger.click();
    fixture.detectChanges();
    expect(component['menuOpen']()).toBe(true);
    expect((fixture.nativeElement as HTMLElement).querySelector('.j-overlay')).toBeTruthy();

    (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.j-overlay')!.click();
    fixture.detectChanges();
    expect(component['menuOpen']()).toBe(false);
    expect((fixture.nativeElement as HTMLElement).querySelector('.j-overlay')).toBeNull();
  });

  it('flips the navbar to light when a light section is under the header', async () => {
    const zone = document.createElement('section');
    zone.setAttribute('data-j-nav', 'light');
    zone.getBoundingClientRect = () => ({ top: 100, bottom: 900, left: 0, right: 100, width: 100, height: 800, x: 0, y: 100, toJSON: () => ({}) }) as DOMRect;
    document.body.appendChild(zone);

    let savedCallback: IntersectionObserverCallback = () => undefined;
    class FakeObserver implements IntersectionObserver {
      readonly root = null;
      readonly rootMargin = '';
      readonly thresholds: ReadonlyArray<number> = [];
      constructor(cb: IntersectionObserverCallback) {
        savedCallback = cb;
      }
      observe = (_target: Element): void => undefined;
      unobserve = (_target: Element): void => undefined;
      disconnect = (): void => undefined;
      takeRecords = (): IntersectionObserverEntry[] => [];
    }
    globalThis.IntersectionObserver = FakeObserver as unknown as typeof IntersectionObserver;

    fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    savedCallback(
      [
        {
          isIntersecting: true,
          target: zone,
          boundingClientRect: zone.getBoundingClientRect(),
          intersectionRatio: 1,
          isVisible: true,
        } as unknown as IntersectionObserverEntry,
      ],
      new FakeObserver(() => undefined),
    );
    fixture.detectChanges();

    const nav = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.j-nav')!;
    expect(nav.classList.contains('j-nav--light')).toBe(true);
    document.body.removeChild(zone);
    delete (globalThis as Record<string, unknown>)['IntersectionObserver'];
  });
});