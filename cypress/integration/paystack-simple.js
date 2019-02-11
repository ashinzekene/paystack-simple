import Paystack from '../../paystack';

describe('PAYSTACK SIMPLE', () => {
  afterEach(() => {
    window.PaystackPop = undefined;
  });
  beforeEach(() => {
    window.PaystackPop = undefined;
  });

  it('Imports paystack\'s live script', async () => {
    expect(typeof window.PaystackPop).to.equal('undefined');
    const paystack = Paystack();
    await paystack.init();
    cy.get('script').should('have.prop', 'src', 'https://js.paystack.co/v1/inline.js');
    expect(typeof window.PaystackPop).to.equal('object');
  });

  it('Import paystack\'s dev script when test option is set', async () => {
    expect(typeof window.PaystackPop).to.equal('undefined');
    const paystack = Paystack({ test: true });
    await paystack.init();
    cy.get('script').should('have.prop', 'src', 'https://js.paystack.co/v1/inline.js');
    expect(typeof window.PaystackPop).to.equal('object');
  });

  it('Open paystack modal', async () => {
    expect(typeof window.PaystackPop).to.equal('undefined');
    const paystack = Paystack({ test: true });
    await paystack.init();
    cy.get('iframe').should('exist');
    expect(typeof window.PaystackPop).to.equal('object');
  });
});
