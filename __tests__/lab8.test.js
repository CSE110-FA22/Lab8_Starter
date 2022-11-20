const puppeteer = require("puppeteer");

describe('Basic user flow for Website', () => {

  // Begin Custom Function Definitions

  /**
   * Gets the inner text for all the buttons in the page
   * @returns List containing string of innerText of all buttons
   */
  async function getAllButtonContents() {
    const productItems = await page.$$('product-item');
    let returnList = [];
    for (let produceItem of productItems) {
      const shadowRoot = await produceItem.getProperty('shadowRoot');
      const button = await shadowRoot.$('button');
      const buttonInnerValueHandle = await button.getProperty('innerText');
      const buttonInnerValue = await buttonInnerValueHandle.jsonValue();
      returnList.push(buttonInnerValue);
      console.log(returnList);
      return new Promise((resolve, reject) => {
        resolve(returnList);
      });
    }
  }

  /**
   * Gets the innerText of the #cart-count DOM object and the value of 'cart' in localStorage.
   * @returns List of two items containing the innerText of #cart-count and cart list from localStorage.
   */
  async function getCartTextAndStorage() {
    const cart = await page.$('#cart-count');
    const cartInnerTextHandle = await cart.getProperty('innerText');
    const cartInnerText = await cartInnerTextHandle.jsonValue();
    const cartItems = await page.evaluate(_ => {
      return localStorage.getItem('cart');
    });
    console.log(cartInnerText, cartItems);
    return new Promise((resolve, reject) => resolve([cartInnerText, cartItems]));
  }

  /**
   * Clicks all the buttons, optionally excluding the first button. To click the first button, run this twice while excluding the first button the second time.
   * @param {bool} excludeFirst Value to indicate whether to skip clicking the first button.
   * @returns {Promise<null>} Returns a dummy promise that can be awaited on.
   */
  async function clickAllButtons(excludeFirst = false) {
    const productItems = await page.$$('product-item');
    for (let produceItem of productItems) {
      if (excludeFirst) {
        excludeFirst = !excludeFirst;
        continue;
      }
      const shadowRoot = await produceItem.getProperty('shadowRoot');
      const button = await shadowRoot.$('button');
      await button.click();
    }
    return new Promise(resolve => resolve(null));
  }

  // Begin Code
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500/index.html');
  });

  // TODO: 0
  it('Initial Home Page - Check for 20 product items', async () => {
    console.log('Checking for 20 product items...');
    const numProducts = await page.$$eval('product-item', (prodItems) => {
      return prodItems.length;
    });
    expect(numProducts).toBe(20);
  });

  // TODO: 1 Ensure all product items are populated
  it('Make sure <product-item> elements are populated', async () => {
    console.log('Checking to make sure <product-item> elements are populated...');
    let allArePopulated = true;
    const productItems = await page.$$('product-item');
    for (let i = 0; i < productItems.length; ++i) {
      console.log(`Checking product item ${i + 1}/${productItems.length}`);
      const data = await productItems[i].getProperty('data');
      const jsonObject = await data.jsonValue();
      const title = jsonObject.title;
      const price = jsonObject.price;
      const image = jsonObject.image;
      allArePopulated = (title != null && title.length > 0) && (price != null) && (image != null && image.length > 0);
      expect(allArePopulated).toBe(true)
    }

  }, 10000);

  // TODO: 2 Ensure clicking the first button changes the text to remove from cart
  it('Clicking the "Add to Cart" button should change button text', async () => {
    console.log('Checking the "Add to Cart" button...');
    console.log('Checking if button press on add to cart changes the text from "Add to Cart" to "Remove form Cart"');
    await clickAllButtons(); await clickAllButtons(true);
    const buttonContents = await getAllButtonContents();
    expect(buttonContents[0]).toEqual('Remove from Cart');
  }, 2500);

  // TODO: 3 Click every button except first and ensure the count is 20
  it('Checking number of items in cart on screen', async () => {
    console.log('Checking number of items in cart on screen...');
    await clickAllButtons(true);
    const [count, _] = await getCartTextAndStorage();
    expect(count).toEqual('20');
  }, 10000);

  // TODO: 4 Reload and ensure the buttons say remove from cart and the count is 20
  it('Checking number of items in cart on screen after reload', async () => {
    console.log('Checking number of items in cart on screen after reload...');
    await page.reload();
    const buttonContents = await getAllButtonContents();
    buttonContents.map(content => expect(content).toEqual('Remove from Cart'));
    const [count, _] = await getCartTextAndStorage();
    expect(count).toEqual('20');
  }, 10000);

  // TODO: 5 Check local storage to see whether the list of numbers is from 1 to 20
  it('Checking the localStorage to make sure cart is correct', async () => {
    const [_, items] = await getCartTextAndStorage();
    expect(items).toEqual('[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]');
  });

  // TODO: 6 Click all buttons and ensure count is 0
  it('Checking number of items in cart on screen after removing from cart', async () => {
    console.log('Checking number of items in cart on screen...');
    await clickAllButtons();
    const [count, _] = await getCartTextAndStorage();
    expect(count).toEqual('0');
  }, 10000);

  // TODO: 7 Reload and check whether buttons say add to cart and count is 0
  it('Checking number of items in cart on screen after reload', async () => {
    console.log('Checking number of items in cart on screen after reload...');
    await page.reload();
    const buttonContents = await getAllButtonContents();
    buttonContents.map(content => expect(content).toEqual('Add to Cart'));
    const [count, _] = await getCartTextAndStorage();
    expect(count).toEqual('0');
  }, 10000);

  // TODO: 8 Ensure the local Storage says that the cart is empty list
  it('Checking the localStorage to make sure cart is correct', async () => {
    console.log('Checking the localStorage...');
    const [_, items] = await getCartTextAndStorage();
    expect(items).toEqual('[]');
  });
});
