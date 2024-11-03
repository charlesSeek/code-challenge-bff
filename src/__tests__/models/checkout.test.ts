import Checkout from '../../models/checkout';
import rules from '../../dataStore/priceRulesStore';

describe('checkout test', () => {
  let co: Checkout;
  beforeEach(() => {
    co = new Checkout(rules);
  })
  it('should scan products properly', () => {
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');
    expect(co.getCartItems().length).toBe(2);
    expect(co.getCartItems()[0].item).toEqual({
      sku: 'atv',
      name: 'Apple TV',
      price: 10950
    });
    expect(co.getCartItems()[0].qty).toBe(3);
    expect(co.getCartItems()[1].item).toEqual({
      sku: 'vga',
      name: 'VGA adapter',
      price: 3000
    });
    expect(co.getCartItems()[1].qty).toBe(1);
  });

  it('should get correct total price when apply freeItems rule', () => {
    co.scan('atv');
    co.scan('atv');
    co.scan('atv');
    co.scan('vga');
    expect(co.total()).toBe(249.00)
  });

  it('should get correct total price when apply freeItems and discountPrice rules', () => {
    co.scan('atv');
    co.scan('ipad');
    co.scan('ipad');
    co.scan('atv');
    co.scan('ipad');
    co.scan('ipad');
    co.scan('ipad');
    expect(co.total()).toBe(2718.95);
  });
});