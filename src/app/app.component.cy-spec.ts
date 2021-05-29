import { initEnv, mount } from '../../../cypress/npm/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  it('shows the input', () => {
    // Init Angular stuff
    initEnv(AppComponent, {imports: [AppRoutingModule]});
    // You can also :
    // initEnv({declarations: [AppComponent]});
    // initEnv({imports: [MyModule]});

    // component + any inputs object
    mount(AppComponent);
    // use any Cypress command afterwards
    cy.contains('Welcome to World!');
  });
});
