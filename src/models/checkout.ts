import { CartItem, Rule, Product } from '../types';
import products from '../dataStore/productStore';

class Checkout {
  private cartItems: CartItem[] = [];
  private pricingRules = new Map<string, Rule>();

  constructor(rules: Map<string, Rule>) {
    this.pricingRules = rules;
  }

  getCartItems() {
    return this.cartItems;
  }

  /**
   * add product in checkout cartItems
   * @param sku product sku
   */
  scan(sku: string): void {
    const product = products.find((product: Product) => product.sku === sku);
    if (!product) {
      throw new Error('product sku not found!');
    } else {
      const cartItem = this.cartItems.find((item: CartItem) => item.item.sku === sku);
      if (cartItem) {
        cartItem.qty +=1;
      } else {
        this.cartItems.push({ item: product, qty: 1});
      }
    }
  }

  /**
   * return checkout cartItems total price
   */
  total(): number {
    const amt = this.cartItems.reduce((sum, cartItem) => {
      const priceRule = this.pricingRules.get(cartItem.item.sku);
      if (priceRule) {
        return sum + priceRule.apply(cartItem);
      } else {
        return sum + cartItem.item.price * cartItem.qty;
      }
    }, 0);
    return parseFloat((amt / 100).toFixed(2));
  }
}

export default Checkout;