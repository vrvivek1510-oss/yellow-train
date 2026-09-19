import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';

@Component({
  selector: 'app-journey',
  imports: [Header, Footer, RouterLink],
  templateUrl: './journey.html',
  styleUrl: './journey.scss',
})
export class Journey {
  protected readonly routes = [
    { route: '/journey/gifts', icon: '🎁', title: 'Featured gifts', text: 'Browse the catalog and filter to the perfect ride.', cta: 'Browse gifts' },
    { route: '/journey/occasions', icon: '🎂', title: 'Plan an occasion', text: 'Find collections for birthdays, weddings and more.', cta: 'Explore occasions' },
    { route: '/journey/customize', icon: '🎨', title: 'Customize a box', text: 'Tins, monograms and notes made entirely your own.', cta: 'Start customizing' },
    { route: '/journey/corporate', icon: '🏢', title: 'Gifting for teams', text: 'Volume pricing and branded packaging at scale.', cta: 'Meet enterprise' },
  ];

  protected readonly stats = [
    { icon: '🎁', value: '120k+', label: 'gifts delivered' },
    { icon: '🗂️', value: '300+', label: 'curated collections' },
    { icon: '🏙️', value: '48', label: 'city depots' },
    { icon: '⭐', value: '4.9', label: 'average happiness rating' },
  ];

  protected readonly reviews = [
    { quote: 'The golden hamper arrived on time and made her cry happy tears. The note alone won the day.', name: 'Ananya S.', occasion: 'Anniversary', rating: 5 },
    { quote: 'We gifted every team member a yellow box for the holi — the unicorn stickers were a hit.', name: 'Rahul M.', occasion: 'Corporate', rating: 5 },
    { quote: 'Ordered at midnight, delivered by afternoon. My son refuses to open the tin, it is too cute.', name: 'Diya K.', occasion: 'Birthday', rating: 4 },
  ];
}