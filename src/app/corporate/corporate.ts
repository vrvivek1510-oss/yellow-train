import { Component } from '@angular/core';
import { Header } from '../layout/header/header';
import { Footer } from '../layout/footer/footer';

@Component({
  selector: 'app-corporate',
  imports: [Header, Footer],
  templateUrl: './corporate.html',
  styleUrl: './corporate.scss',
})
export class Corporate {
  protected readonly features = [
    { icon: '📦', title: 'Volume pricing', text: 'Sliding scale discounts that grow as your order does.' },
    { icon: '🏷️', title: 'Branded packaging', text: 'Your logo on every tin, card and ribbon strand.' },
    { icon: '🗓️', title: 'Quarterly drops', text: 'Schedule seasonal boxes that arrive on autopilot.' },
    { icon: '💼', title: 'Dedicated desk', text: 'One manager for quotes, edits and last-minute asks.' },
    { icon: '🧾', title: 'Smooth invoicing', text: 'Single invoices, easy reconciliation and GST-ready bills.' },
    { icon: '🦄', title: 'Delightful unboxing', text: 'Every recipient feels the brand magic, not just the gift.' },
  ];

  protected readonly perks = [
    { value: '5k+', label: 'team members gifted' },
    { value: '42', label: 'enterprise partners' },
    { value: '2.1M', label: 'boxes delivered' },
    { value: '98%', label: 'renewal rate' },
  ];
}