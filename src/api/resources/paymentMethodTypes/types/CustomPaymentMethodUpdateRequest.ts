/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface CustomPaymentMethodUpdateRequest extends Mercoa.PaymentMethodBaseRequest {
    /** ID for this payment method in your system */
    foreignId?: string;
    accountName?: string;
    accountNumber?: string;
    /** The available balance for this payment method. */
    availableBalance?: number;
    /** Payment method schema used for this payment method. Defines the fields that this payment method contains. */
    schemaId?: Mercoa.CustomPaymentMethodSchemaId;
    /** Object of key/value pairs that matches the keys in the linked payment method schema. */
    data?: Record<string, string>;
}
