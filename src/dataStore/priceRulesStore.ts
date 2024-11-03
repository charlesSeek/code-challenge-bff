import { Rule, ATV_FREE_QTY, ATV_REQUIRED_QTY, IPAD_REQUIRED_QTY } from '../types';
import FreeItemsRule from '../models/freeItemsRule';
import DiscountPriceRule from '../models/discountPriceRule'


const rules = new Map<string, Rule>();
rules.set('atv', new FreeItemsRule(ATV_REQUIRED_QTY,ATV_FREE_QTY));
rules.set('ipad', new DiscountPriceRule(IPAD_REQUIRED_QTY, 49999));

export default rules;