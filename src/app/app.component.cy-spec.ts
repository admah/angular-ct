import { initEnv, mount } from '@cypress/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    // Init Angular stuff
    initEnv(AppComponent);
    // You can also :
    // initEnv({declarations: [AppComponent]});
    // initEnv({imports: [MyModule]});

    // component + any inputs object
    mount(AppComponent, { title: 'World' });
    // use any Cypress command afterwards
  });

  it('shows the banner with logo, title, and links', () => {
    cy.get('.toolbar').should('be.visible');
    cy.get('.toolbar img').should('have.length', 1);
    cy.get('.toolbar span').contains('Welcome');
    cy.get('.toolbar a').should('have.length', 2);
  });

  it('shows the content with correct headings and links', () => {
    cy.get('.content').should('be.visible');;
    cy.get('.card span').contains('World app is running!');
    cy.get('h2').contains('Resources');
    cy.get('a.card').should('have.length', 3);
  });
});
