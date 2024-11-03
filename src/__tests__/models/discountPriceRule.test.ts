import { IPAD_REQUIRED_QTY } from '../../types';
import DiscountPriceRule from '../../models/discountPriceRule';

describe('DiscountPriceRule test', () => {
  let rule: DiscountPriceRule;
  beforeEach(() => {
    rule = new DiscountPriceRule(IPAD_REQUIRED_QTY, 49999);
  });
  it('total price should be correct when qty less or equal to required qty', () => {
    const totalPrice = rule.apply({ item: { sku: 'ipad', name: 'Super iPad', price: 54999}, qty: 2});
    expect(totalPrice).toBe(109998);
  });
  it('total price should be correct when qty large than required qty', () => {
    const totalPrice = rule.apply({ item: { sku: 'ipad', name: 'Super iPad', price: 54999}, qty: 5});
    expect(totalPrice).toBe(249995);
  });
});