import { initEnv, mount } from '../../../cypress/npm/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('shows the input', () => {
    // Init Angular stuff
    initEnv(AppComponent);
    // You can also :
    // initEnv({declarations: [AppComponent]});
    // initEnv({imports: [MyModule]});

    // component + any inputs object
    mount(AppComponent, { title: 'World' });
    // use any Cypress command afterwards
    cy.contains('Welcome to World!');
  });
});
