import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Customize } from './customize';

describe('Customize', () => {
  let component: Customize;
  let fixture: ComponentFixture<Customize>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Customize],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Customize);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders all four customization steps', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelectorAll('.j-step').length).toBe(4);
    expect(el.querySelector('.j-step__num')?.textContent?.trim()).toBe('01');
  });
});