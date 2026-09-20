import { Component } from '@angular/core';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';

@Component({
  selector: 'app-stories',
  imports: [Header, Footer],
  templateUrl: './stories.html',
  styleUrl: './stories.scss',
})
export class Stories {
  protected readonly stories = [
    { tag: 'Behind the scenes', title: 'The journey of a gift: from our depot to your doorstep', read: '8 min', date: 'Sep 12, 2026' },
    { tag: 'Occasions', title: '5 celebrations that call for a yellow box', read: '4 min', date: 'Sep 5, 2026' },
    { tag: 'Magic', title: 'Why unicorns deliver joy faster than anyone', read: '6 min', date: 'Aug 28, 2026' },
    { tag: 'Guides', title: 'The 2026 corporate gifting guide for happy teams', read: '10 min', date: 'Aug 19, 2026' },
    { tag: 'Meet the packers', title: 'Hands that tie every ribbon: our depot crew', read: '5 min', date: 'Aug 7, 2026' },
    { tag: 'Culture', title: 'How our stables keep the joy train running', read: '7 min', date: 'Jul 30, 2026' },
  ];
}