import { Component } from '@angular/core';
import { MoneyComponent } from './money.component';
import { CurrencyPipe } from '@angular/common';

// Wrapper component for testing input changes
@Component({
  selector: 'app-wrapper',
  standalone: true,
  template: `
    <app-money
      [amount]="amount"
      [showSymbol]="showSymbol"
      [currency]="currency"
    ></app-money>
  `,
  imports: [MoneyComponent],
  providers: [{ provide: 'LOCALE_ID', useValue: 'nl-NL' }],
})
class WrapperComponent {
  amount = 1000;
  showSymbol = false;
  currency = 'EUR';
}

describe('MoneyComponent', () => {
  it('can mount and display formatted amount with default inputs', () => {
    cy.mount(MoneyComponent, {
      imports: [CurrencyPipe],
      providers: [{ provide: 'LOCALE_ID', useValue: 'nl-NL' }],
      componentProperties: {
        amount: 1000,
      },
    });

    cy.get('span').should('contain.text', '1.000,00');
    cy.get('span').should('have.attr', 'aria-label', '1000');
  });

  it('can mount using template syntax and display amount with symbol', () => {
    cy.mount(
      '<app-money [amount]="amount" [showSymbol]="showSymbol" [currency]="currency"></app-money>',
      {
        imports: [MoneyComponent, CurrencyPipe],
        providers: [{ provide: 'LOCALE_ID', useValue: 'nl-NL' }],
        componentProperties: {
          amount: 1000,
          showSymbol: true,
          currency: 'EUR',
        },
      },
    );

    cy.get('span').should('contain.text', '€1.000,00');
    cy.get('span').should('have.attr', 'aria-label', '1000');
  });

  it('should display different currency correctly', () => {
    cy.mount(MoneyComponent, {
      imports: [CurrencyPipe],
      providers: [{ provide: 'LOCALE_ID', useValue: 'nl-NL' }],
      componentProperties: {
        amount: 1000,
        showSymbol: true,
        currency: 'USD',
      },
    });

    cy.get('span').should('contain.text', '$1.000,00');
    cy.get('span').should('have.attr', 'aria-label', '1000');
  });

  it('should update displayed amount when inputs change', () => {
    cy.mount(WrapperComponent, {
      imports: [MoneyComponent, CurrencyPipe],
      providers: [{ provide: 'LOCALE_ID', useValue: 'nl-NL' }],
    });

    cy.get('span').should('contain.text', '1.000,00');
    cy.get('span').should('have.attr', 'aria-label', '1000');

    cy.then((response) => {
      const wrapper = response.component as WrapperComponent;
      wrapper.amount = 2000;
      wrapper.showSymbol = true;
      wrapper.currency = 'USD';
      response.componentRef.detectChanges(); // Trigger change detection
      cy.get('span').should('contain.text', '$2.000,00');
      cy.get('span').should('have.attr', 'aria-label', '2000');
    });
  });
});
