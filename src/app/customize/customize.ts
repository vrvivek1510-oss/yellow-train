import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';

@Component({
  selector: 'app-customize',
  imports: [Header, Footer, RouterLink],
  templateUrl: './customize.html',
  styleUrl: './customize.scss',
})
export class Customize {
  protected readonly steps = [
    { num: '01', icon: '📦', title: 'Pick your tin', text: 'Start from a classic crate, a mini set or the keepsake golden tin.' },
    { num: '02', icon: '✍️', title: 'Make it personal', text: 'Engrave a monogram, print a photo or stamp a message on the lid.' },
    { num: '03', icon: '📝', title: 'Write a note', text: 'Add a hand-written card in your own words — sealed by our packers.' },
    { num: '04', icon: '🚂', title: 'We wrap & ship', text: 'Ribbon, bow and a unicorn stamp — then it rides the yellow train to the door.' },
  ];
}