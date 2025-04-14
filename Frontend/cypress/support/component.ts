// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

import { mount } from 'cypress/angular';

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      mountWithSpacing(
        component: any,
        options?: Partial<Cypress.MountOptions>,
      ): Chainable<any>;
    }
  }
}

Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(MyComponent)

Cypress.Commands.add('mountWithSpacing', (component, options) => {
  const spacingStyle = 'padding: 2rem; width: 75%;';
  return cy.mount(
    `<div style="${spacingStyle}">
      <ng-container *ngComponentOutlet="component; inputs: inputs"></ng-container>
    </div>`,
    {
      ...options,
      imports: [component, ...(options.imports || [])],
      componentProperties: {
        component,
        inputs: options.componentProperties || {},
      },
    },
  );
});
