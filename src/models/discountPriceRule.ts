import { PricingRule, CartItem } from '../types';

class DiscountPriceRule implements PricingRule {
  private requiredQty: number;
  private discountPrice: number;

  constructor(
    requiredQty: number,
    discountPrice: number,
  ) {
    this.requiredQty = requiredQty;
    this.discountPrice = discountPrice;
  }

  public getRequiredQty() {
    return this.requiredQty;
  }

  public getDiscountPrice() {
    return this.discountPrice;
  }

  /**
   * @description CartItem apply rule to calculate amt
   * @param cartItem CartItem
   * @returns {number} caculated amt based on the rule
   */
  public apply(cartItem: CartItem): number {
    const {
      item,
      qty,
    } = cartItem;
    const {
      price,
    } = item;
    const {
      requiredQty,
      discountPrice,
    } = this
    return qty > requiredQty
      ? qty * discountPrice
      : qty * price;
  }
}

export default DiscountPriceRule;