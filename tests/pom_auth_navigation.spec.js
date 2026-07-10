const { test } = require('../fixtures');

test('admin can open the drop down page with storage fixture', async ({
  adminHomePage,
  adminDropDownPage,
}) => {
  await adminHomePage.open();
  await adminHomePage.goToDropDownPage();
  await adminDropDownPage.expectLoaded();
});
