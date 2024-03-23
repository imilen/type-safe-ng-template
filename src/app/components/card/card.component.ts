import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { CardType } from '../../models/card.mode';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div>{{ card().bank | titlecase }}</div>
      <div>{{ card().type | uppercase }}</div>
    </div>
  `,
  styles: [
    `
      :host {
        .card {
          border: 1px solid lightgrey;
          border-radius: 10px;
          padding: 10px;
          width: fit-content;
        }
      }
    `,
  ],
})
export class CardComponent {
  card = input.required<CardType>();
}
