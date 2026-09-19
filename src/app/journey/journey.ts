import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-journey',
  imports: [RouterLink],
  templateUrl: './journey.html',
  styleUrl: './journey.scss',
})
export class Journey {
  protected readonly categories = [
    { icon: '🎂', title: 'Birthdays', text: 'Boxes that make every year sweeter.' },
    { icon: '💍', title: 'Weddings & Engagements', text: 'Toast the big day with something golden.' },
    { icon: '👶', title: 'New Baby', text: 'Little welcomes packed with love.' },
    { icon: '🌸', title: 'Festivals & Seasonal', text: 'Diwali, Holi, Christmas — joy on time.' },
    { icon: '🏢', title: 'Corporate Gifting', text: 'Thank teams and clients in style.' },
    { icon: '❤️', title: 'Anniversaries', text: 'Celebrate every milestone on the line.' },
  ];

  protected readonly gifts = [
    { emoji: '🧸', name: 'The Big Hug Box', desc: 'Plush unicorn, golden treats and a hand-written note.', price: '$39' },
    { emoji: '🍫', name: 'Golden Hour Hamper', desc: 'Signature chocolates wrapped in the yellow train tin.', price: '$59' },
    { emoji: '🦄', name: 'Unicorn Starter Kit', desc: 'Stationery, badges and spring-loaded surprises.', price: '$49' },
    { emoji: '☕', name: 'Morning Magic Tin', desc: 'Custom-printed coffee tin with a golden spoon.', price: '$44' },
  ];

  protected readonly stats = [
    { value: '120k+', label: 'gifts delivered' },
    { value: '300+', label: 'curated collections' },
    { value: '48', label: 'city depots' },
    { value: '4.9★', label: 'average happiness rating' },
  ];

  protected readonly stories = [
    { tag: 'Behind the scenes', title: 'The journey of a gift: from our depot to your doorstep', read: '8 min', date: 'Sep 12, 2026' },
    { tag: 'Occasions', title: '5 celebrations that call for a yellow box', read: '4 min', date: 'Sep 5, 2026' },
    { tag: 'Magic', title: 'Why unicorns deliver joy faster than anyone', read: '6 min', date: 'Aug 28, 2026' },
    { tag: 'Guides', title: 'The 2026 corporate gifting guide for happy teams', read: '10 min', date: 'Aug 19, 2026' },
    { tag: 'Meet the packers', title: 'Hands that tie every ribbon: our depot crew', read: '5 min', date: 'Aug 7, 2026' },
  ];
}