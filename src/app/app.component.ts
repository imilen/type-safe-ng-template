import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { AsDirective } from './directives/as.directive';
import { CardType } from './models/card.mode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AsDirective, CardComponent],
  template: `
    @defer {
      <div
        style="height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 10px;">
        <div>
          <h2>Cast with directive</h2>
          <ng-container *ngTemplateOutlet="directiveTpl; context: { $implicit: card }" />
          <ng-template
            #directiveTpl
            [as]="cardType"
            let-item>
            <app-card [card]="item" />
          </ng-template>
        </div>
        <div>
          <h2>Cast with method</h2>
          <ng-container *ngTemplateOutlet="methodTpl; context: { $implicit: card }" />
          <ng-template
            #methodTpl
            let-item>
            <app-card [card]="$as(item, cardType)" />
          </ng-template>
        </div>
      </div>
    } @placeholder {
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center;">
        <h1>Angular</h1>
      </div>
    } @loading {
      <div style="height: 100vh; display: flex; align-items: center; justify-content: center;">
        <h1>Loading...</h1>
      </div>
    }
  `,
  providers: [],
})
export class AppComponent {
  title = 'type-safe-ng-template';

  cardType!: CardType;

  card: CardType = {
    type: 'mastercard',
    bank: 'revolut',
  };

  $as<T>(data: unknown, _model: T | undefined): T {
    return data as unknown as T;
  }
}
