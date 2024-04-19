/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface PaymentMethodBaseResponse {
    id: Mercoa.PaymentMethodId;
    /** Indicates whether this payment method is the default source for the entity */
    isDefaultSource: boolean;
    /** Indicates whether this payment method is the default destination for the entity */
    isDefaultDestination: boolean;
    supportedCurrencies: Mercoa.CurrencyCode[];
    createdAt: Date;
    updatedAt: Date;
}
