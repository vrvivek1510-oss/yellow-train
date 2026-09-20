import { Component, computed, signal } from '@angular/core';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';

type GiftTag = 'Bestsellers' | 'For Kids' | 'Exclusive' | 'Deals';

interface Gift {
  emoji: string;
  name: string;
  desc: string;
  price: string;
  tag: GiftTag;
}

@Component({
  selector: 'app-gifts',
  imports: [Header, Footer],
  templateUrl: './gifts.html',
  styleUrl: './gifts.scss',
})
export class Gifts {
  protected readonly gifts: Gift[] = [
    { emoji: '🧸', name: 'The Big Hug Box', desc: 'Plush unicorn, golden treats and a hand-written note.', price: '$39', tag: 'Bestsellers' },
    { emoji: '🍫', name: 'Golden Hour Hamper', desc: 'Signature chocolates wrapped in the yellow train tin.', price: '$59', tag: 'Bestsellers' },
    { emoji: '🦄', name: 'Unicorn Starter Kit', desc: 'Stationery, badges and spring-loaded surprises.', price: '$49', tag: 'For Kids' },
    { emoji: '☕', name: 'Morning Magic Tin', desc: 'Custom-printed coffee tin with a golden spoon.', price: '$44', tag: 'Exclusive' },
    { emoji: '🎁', name: 'Midnight Surprise', desc: 'Limited-run mystery box, restocked monthly.', price: '$69', tag: 'Exclusive' },
    { emoji: '🌙', name: 'Dreamer Dozen', desc: 'Bedtime treasures in a keepsake yellow crate.', price: '$54', tag: 'For Kids' },
    { emoji: '💛', name: 'Golden Mini Three', desc: 'Three bite-size treats for a quick hello.', price: '$24', tag: 'Deals' },
    { emoji: '🕯️', name: 'Cozy Corner Set', desc: 'Candles, mugs and warm notes for couch season.', price: '$47', tag: 'Deals' },
  ];

  protected readonly tags = ['All', 'Bestsellers', 'For Kids', 'Exclusive', 'Deals'] as const;

  protected readonly selectedTag = signal<(typeof this.tags)[number]>('All');

  protected readonly filteredGifts = computed(() =>
    this.selectedTag() === 'All'
      ? this.gifts
      : this.gifts.filter((gift) => gift.tag === this.selectedTag()),
  );
}