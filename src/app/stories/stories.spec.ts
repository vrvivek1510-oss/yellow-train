import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Stories } from './stories';

describe('Stories', () => {
  let component: Stories;
  let fixture: ComponentFixture<Stories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stories],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Stories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders featured story and row list', () => {
    fixture.detectChanges();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('.j-story--feature')).toBeTruthy();
    expect(el.querySelectorAll('.j-story--row').length).toBe(component['stories'].length - 1);
  });
});