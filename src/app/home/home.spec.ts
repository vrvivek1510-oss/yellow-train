import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { vi } from 'vitest';

import { Home } from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [{ provide: Router, useValue: { navigate: vi.fn() } }],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigates to the journey page on start', () => {
    const router = TestBed.inject(Router) as unknown as { navigate: ReturnType<typeof vi.fn> };
    (fixture.nativeElement as HTMLElement)
      .querySelector<HTMLButtonElement>('.welcome__btn--primary')!
      .click();
    expect(router.navigate).toHaveBeenCalledWith(['/journey']);
  });
});