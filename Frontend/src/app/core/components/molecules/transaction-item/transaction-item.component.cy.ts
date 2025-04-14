import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import {
  CurrencyPipe,
  CommonModule,
  registerLocaleData,
} from '@angular/common';
import localeNl from '@angular/common/locales/nl';
import { TransactionItemComponent } from './transaction-item.component';
import { NameBadgeComponent } from '@core/components/atoms/name-badge/name-badge.component';
import { TransactionAmountComponent } from '../transaction-amount/transaction-amount.component';
import { mockTransaction } from 'test/mocks/timeline.mock';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeNl, 'nl-NL');

const mockActivatedRoute = {
  snapshot: { paramMap: new Map(), queryParamMap: new Map() },
};

describe('TransactionItemComponent', () => {
  const defaultMountOptions = {
    providers: [
      { provide: ActivatedRoute, useValue: mockActivatedRoute },
      { provide: LOCALE_ID, useValue: 'nl-NL' },
      CurrencyPipe,
    ],
    imports: [
      CommonModule,
      RouterLink,
      NameBadgeComponent,
      TransactionAmountComponent,
    ],
  };

  it('renders all transaction details with correct styling', () => {
    cy.viewport(1440, 900);
    cy.mountWithSpacing(TransactionItemComponent, {
      componentProperties: { data: mockTransaction, isLast: false },
      ...defaultMountOptions,
    });
    cy.get('[data-cy="transaction-item-link"]')
      .should('be.visible')
      .and('have.attr', 'href', '/timeline/detail/1');
    cy.get('[data-cy="transaction-item-other-party-name"]')
      .should('be.visible')
      .and('have.text', 'John Doe');
    cy.get('app-transaction-amount')
      .should('be.visible')
      .find('span[role="status"]')
      .should('contain.text', '+ 85,00');
    cy.get('.txn-item')
      .should('have.class', 'mb-1')
      .and('have.class', 'border-bottom');
  });

  it('sets correct accessibility attributes', () => {
    cy.viewport(1440, 900);
    cy.mountWithSpacing(TransactionItemComponent, {
      componentProperties: { data: mockTransaction },
      ...defaultMountOptions,
    });
    cy.get('[data-cy="transaction-item-link"]').should(($el) => {
      const ariaLabel = $el.attr('aria-label');
      expect(ariaLabel).to.contains('Transaction with John Doe');
    });
  });

  it('renders Unknown when otherParty.name is missing', () => {
    const noNameTransaction = {
      ...mockTransaction,
      otherParty: { name: '' },
    };
    cy.viewport(1440, 900);
    cy.mountWithSpacing(TransactionItemComponent, {
      componentProperties: { data: noNameTransaction },
      ...defaultMountOptions,
    });
    cy.get('[data-cy="transaction-item-other-party-name"]')
      .should('be.visible')
      .and('have.text', 'Unknown');
    cy.get('app-name-badge').should('be.visible');
    cy.get('[data-cy="transaction-item-link"]').should(($el) => {
      const ariaLabel = $el.attr('aria-label');
      expect(ariaLabel).to.contains('Transaction, amount');
    });
  });

  it('omits border-bottom when isLast is true', () => {
    cy.viewport(1440, 900);
    cy.mountWithSpacing(TransactionItemComponent, {
      componentProperties: { data: mockTransaction, isLast: true },
      ...defaultMountOptions,
    });
    cy.get('.txn-item')
      .should('have.class', 'mb-1')
      .and('not.have.class', 'border-bottom');
  });
});
