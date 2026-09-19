import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect((fixture.nativeElement as HTMLElement).querySelector('.j-footer')).toBeTruthy();
  });

  it('subscribes to the newsletter and shows a confirmation', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    const input = el.querySelector<HTMLInputElement>('.j-news__input')!;
    const form = el.querySelector<HTMLFormElement>('.j-news__form')!;

    input.value = 'gifter@example.com';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
    fixture.detectChanges();

    expect(component['subscribed']()).toBe(true);
    expect(el.querySelector('.j-news__ok')).toBeTruthy();
    expect(el.querySelector('.j-news__form')).toBeNull();
  });
});