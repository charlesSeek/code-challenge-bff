import FreeItemsRule from '../../models/freeItemsRule';
import { ATV_FREE_QTY, ATV_REQUIRED_QTY } from '../../types';

describe('freeItemsRule test for atv', () => {
  let rule: FreeItemsRule;
  beforeEach(() => {
    rule = new FreeItemsRule(ATV_REQUIRED_QTY, ATV_FREE_QTY)
  });
  it('total price should be correct when qty equal to required qty', () => {
    const totalPrice = rule.apply({ item: {
      sku: 'atv', name: 'Apple TV', price: 10950 }, qty: 2
    });
    expect(totalPrice).toBe(21900);
  });
  it('total price should be correct when qty less than required Qty', () => {
    const totalPrice = rule.apply({ item: {sku: 'atv', name: 'Apple TV', price: 10950 }, qty: 1});
    expect(totalPrice).toBe(10950)
  });
  it('total price should be correct when qty large than required Qty', () => {
    const totalPrice = rule.apply({ item: {sku: 'atv', name: 'Apple TV', price: 10950 }, qty: 3});
    expect(totalPrice).toBe(21900)
  });

});