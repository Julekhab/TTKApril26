const SAUCE_USERS = {
  standard: {
    username: process.env.SAUCE_USERNAME || 'standard_user',
    password: process.env.SAUCE_PASSWORD || 'secret_sauce',
  },
};

const CUSTOMER_INFO = {
  firstName: 'Julekha',
  lastName: 'begum',
  postalCode: '12345',
};

const PRODUCTS = {
  backpack: {
    name: 'Sauce Labs Backpack',
    description:
      'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    price: '$29.99',
  },
  bikeLight: {
    name: 'Sauce Labs Bike Light',
    description:
      "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
    price: '$9.99',
  },
};

module.exports = { SAUCE_USERS, CUSTOMER_INFO, PRODUCTS };
