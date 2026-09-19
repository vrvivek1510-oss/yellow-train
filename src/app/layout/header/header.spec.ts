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
});