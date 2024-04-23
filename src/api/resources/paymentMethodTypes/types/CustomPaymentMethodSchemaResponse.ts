/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface CustomPaymentMethodSchemaResponse {
    id: Mercoa.CustomPaymentMethodSchemaId;
    name: string;
    /** This payment method can be used as a payment source for an invoice */
    isSource: boolean;
    /** This payment method can be used as a payment destination for an invoice */
    isDestination: boolean;
    /** List of currencies that this payment method supports. */
    supportedCurrencies: Mercoa.CurrencyCode[];
    fields: Mercoa.CustomPaymentMethodSchemaField[];
    createdAt: Date;
    updatedAt: Date;
}
