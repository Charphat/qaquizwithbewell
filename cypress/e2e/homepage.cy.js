Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('TVC_GTM_Enhanced is not defined') || err.message.includes('Cannot read properties of undefined (reading \'map\')')) {
      return false;
    }
    return true;
  });
  
  describe('QA Quiz Automated Testing', () => {
    it('Verify visit the Bewell first page', () => {
      cy.visit('https://www.bewellstyle.com');
      cy.get('#dpdpa--popup-accept-all').click();
    });
  });
  