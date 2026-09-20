import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Gifts } from './gifts';

describe('Gifts', () => {
  let component: Gifts;
  let fixture: ComponentFixture<Gifts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gifts],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Gifts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders all gifts and filters by tag', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.j-gift').length).toBe(component['gifts'].length);

    const chips = Array.from(el.querySelectorAll<HTMLButtonElement>('.j-chip'));
    chips.find((chip) => chip.textContent?.trim() === 'Exclusive')?.click();
    fixture.detectChanges();
    expect(el.querySelectorAll('.j-gift').length).toBe(2);
    expect(el.querySelector('.j-chip--active')?.textContent?.trim()).toBe('Exclusive');
  });
});