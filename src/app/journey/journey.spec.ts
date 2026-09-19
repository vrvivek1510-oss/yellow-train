import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Journey } from './journey';

describe('Journey', () => {
  let component: Journey;
  let fixture: ComponentFixture<Journey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Journey],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Journey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders hero, route cards, stats and reviews', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.j-hero__title')?.textContent).toContain('yellow train');
    expect(el.querySelectorAll('.j-card').length).toBe(component['routes'].length);
    expect(el.querySelectorAll('.j-stat').length).toBe(component['stats'].length);
    expect(el.querySelectorAll('.j-review').length).toBe(component['reviews'].length);
  });
});