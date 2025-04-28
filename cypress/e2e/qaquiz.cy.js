import { locators } from "../locator/locator";
import 'cypress-real-events/support';


Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('TVC_GTM_Enhanced is not defined') || 
    err.message.includes('Cannot read properties of undefined (reading \'map\')') || 
    err.message.includes('Cannot read properties of undefined (reading \'length\')')) {
      return false;
    }
    return true;
  });
  
  describe('QA Quiz Automated Testing', () => {
    it('Test Case: search and submit button before add to cart', () => {
      cy.visit('https://www.bewellstyle.com');
      //Product 1
      cy.get(locators.homePage.cookiesButton).click();
      cy.get(locators.homePage.searchButton).click();
      cy.get(locators.homePage.searchField).type('เบาะรองหลังเพื่อสุขภาพ สำหรับรถยนต์ | Car Seat Back Cushion');
      cy.get(locators.homePage.searchSubmit).click();
      cy.get('.post-35797').realHover().wait(500);
      cy.get('.post-35797 .btn-add a').should('be.visible').scrollIntoView().click({ force: true });
      cy.wait(5000);

      //Product 2
      cy.get(locators.homePage.searchButton).click();
      cy.get(locators.homePage.searchField).type('เบาะรองหลังทรงสูง | Healthy Back');
      cy.get('#pa_color').select('สีน้ำเงิน - เบาะรองหลังทรงสูง').wait(1000);
      cy.get(locators.productCard.addToCartButton).click();

      //Product 3
      cy.get(locators.homePage.searchButton).click();
      cy.get(locators.homePage.searchField).type('ผ้าห่มเย็นอัจฉริยะ | Cool Blanket');
      cy.get('#\\%e0\\%b8\\%aa\\%e0\\%b8\\%b5').select('"ฟ้า"').wait(1000);
      cy.get('#\\%e0\\%b8\\%82\\%e0\\%b8\\%99\\%e0\\%b8\\%b2\\%e0\\%b8\\%94').select('"200x230cm."').wait(1000);
      cy.get('.single_add_to_cart_button').click();
    });
  });
  