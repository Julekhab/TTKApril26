const { test } = require('../Fixtures/saucedemoFixture');
const { SAUCE_USERS, CUSTOMER_INFO, PRODUCTS } = require('../test-data/sauceProducts');

test('standard user can checkout backpack after removing bike light', async ({
  sauceLoginPage,
  sauceProductsPage,
  sauceCartPage,
  sauceCheckoutInfoPage,
  sauceCheckoutOverviewPage,
  sauceCheckoutCompletePage,
}) => {
  const backpack = PRODUCTS.backpack;
  const bikeLight = PRODUCTS.bikeLight;

  await sauceLoginPage.loginSuccessfully(
    SAUCE_USERS.standard.username,
    SAUCE_USERS.standard.password
  );

  await sauceProductsPage.expectLoaded();
  await sauceProductsPage.expectProductDetails(backpack);
  await sauceProductsPage.expectProductDetails(bikeLight);

  await sauceProductsPage.addProduct(backpack.name);
  await sauceProductsPage.addProduct(bikeLight.name);
  await sauceProductsPage.expectCartCount(2);

  await sauceProductsPage.removeProduct(bikeLight.name);
  await sauceProductsPage.expectCartCount(1);

  await sauceProductsPage.openCart();
  await sauceCartPage.expectLoaded();
  await sauceCartPage.expectProductDetails(backpack);
  await sauceCartPage.checkout();

  await sauceCheckoutInfoPage.expectLoaded();
  await sauceCheckoutInfoPage.fillCustomerInfo(CUSTOMER_INFO);
  await sauceCheckoutInfoPage.continue();

  await sauceCheckoutOverviewPage.expectLoaded();
  await sauceCheckoutOverviewPage.expectProductDetails(backpack);
  await sauceCheckoutOverviewPage.finish();

  await sauceCheckoutCompletePage.expectLoaded();
  await sauceCheckoutCompletePage.expectDoneMessage();
  await sauceCheckoutCompletePage.backHome();

  await sauceProductsPage.expectLoaded();
  await sauceProductsPage.expectNoCartCount();
});
