import { Component } from '@angular/core';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';

@Component({
  selector: 'app-occasions',
  imports: [Header, Footer],
  templateUrl: './occasions.html',
  styleUrl: './occasions.scss',
})
export class Occasions {
  protected readonly categories = [
    { icon: '🎂', title: 'Birthdays', text: 'Boxes that make every year sweeter.' },
    { icon: '💍', title: 'Weddings & Engagements', text: 'Toast the big day with something golden.' },
    { icon: '👶', title: 'New Baby', text: 'Little welcomes packed with love.' },
    { icon: '🌸', title: 'Festivals & Seasonal', text: 'Diwali, Holi, Christmas — joy on time.' },
    { icon: '🏢', title: 'Graduations', text: 'Mark the milestone with a keepsake ride.' },
    { icon: '❤️', title: 'Anniversaries', text: 'Celebrate every milestone on the line.' },
    { icon: '🪔', title: 'Housewarmings', text: 'New keys, new kitchens, golden welcomes.' },
    { icon: '😊', title: 'Just Because', text: 'No reason needed. Joy is reason enough.' },
  ];
}