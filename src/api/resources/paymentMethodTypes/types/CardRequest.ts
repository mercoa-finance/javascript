/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface CardRequest extends Mercoa.PaymentMethodBaseRequest {
    cardType: Mercoa.CardType;
    cardBrand: Mercoa.CardBrand;
    lastFour: string;
    expMonth: string;
    expYear: string;
    token: string;
}
