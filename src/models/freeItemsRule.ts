import { PricingRule, CartItem } from '../types';

class FreeItemsRule implements PricingRule {
  private requiredQty: number;
  private freeQty: number;

  constructor(requiredQty: number, freeQty: number) {
    this.requiredQty = requiredQty;
    this.freeQty = freeQty;
  }

  public getRequiredQty() {
    return this.requiredQty;
  }

  public getFreeQty() {
    return this.freeQty;
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
      freeQty,
    } = this
    const isQualified = qty >= requiredQty;
    if (isQualified) {
      const groups = Math.floor(qty / (requiredQty + freeQty));
      const remainingQty = qty % (requiredQty + freeQty);
      const chargedQty = groups * requiredQty + Math.min(remainingQty, requiredQty);
      return chargedQty * price;
    } else {
      return qty * price;
    }
  }
}

export default FreeItemsRule;