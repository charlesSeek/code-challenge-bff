import FreeItemsRule from './models/freeItemsRule';
import DiscountPriceRule from './models/discountPriceRule';

export interface Product {
  sku: string;
  name: string;
  price: number;
}

export interface CartItem {
  item: Product;
  qty: number;
}

export interface PricingRule {
  apply(item: CartItem): number;
}

export type Rule = FreeItemsRule | DiscountPriceRule;

export const ATV_REQUIRED_QTY = 2;
export const ATV_FREE_QTY = 1;
export const IPAD_REQUIRED_QTY = 4;