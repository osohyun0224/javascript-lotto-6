import { PURCHASE_AMOUNT_ERROR_MESSAGE } from "../constants/Message";

export default class PurchasePriceValidator {
  static validatePurchasePrice(price) {
    if (price % 1000) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE.wrongFormat);
    }
    if (price < 1000) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE.underThousand);
    }
    if (Number.isNaN(Number(price))) {
      throw new Error(PURCHASE_AMOUNT_ERROR_MESSAGE.notNumber);
    }
  }
}