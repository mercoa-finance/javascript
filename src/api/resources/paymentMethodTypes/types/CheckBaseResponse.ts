/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface CheckBaseResponse {
    id: Mercoa.PaymentMethodId;
    payToTheOrderOf: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    stateOrProvince: string;
    postalCode: string;
    country: string;
    supportedCurrencies: Mercoa.CurrencyCode[];
    createdAt: Date;
    updatedAt: Date;
}