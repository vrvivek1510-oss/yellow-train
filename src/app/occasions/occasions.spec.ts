import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Occasions } from './occasions';

describe('Occasions', () => {
  let component: Occasions;
  let fixture: ComponentFixture<Occasions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Occasions],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Occasions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders all occasion categories', () => {
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelectorAll('.j-card').length).toBe(8);
  });
});