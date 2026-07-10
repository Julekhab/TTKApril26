// import { test, expect } from '@playwright/test';
const { test, expect } = require('./sDemoAssignment.fixture');

test('standard user can complete checkout with Sauce Labs Bike Light', async ({
  sauceDemoLoginPage,
  sauceDemoInventoryPage,
  sauceDemoCartPage,
  sauceDemoCheckoutPage,
}) => {
  await sauceDemoLoginPage.open();
  await sauceDemoLoginPage.login('standard_user', 'secret_sauce');
  await sauceDemoInventoryPage.expectLoaded();

  await sauceDemoInventoryPage.addBackpackToCart();
  await sauceDemoInventoryPage.addBikeLightToCart();
  await sauceDemoInventoryPage.openCart();
  await sauceDemoCartPage.expectLoaded();
  await sauceDemoCartPage.removeBackpack();
  await sauceDemoCartPage.checkout();

  await sauceDemoCheckoutPage.enterCustomerInformation('julekha', 'begum', '1234');
  await sauceDemoCheckoutPage.expectOverview();
  await sauceDemoCheckoutPage.finishOrder();
  await sauceDemoCheckoutPage.expectOrderComplete();
  await sauceDemoCheckoutPage.returnToProducts();

  await expect(sauceDemoInventoryPage.title).toHaveText('Products');
});
