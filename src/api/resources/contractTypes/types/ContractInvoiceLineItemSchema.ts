/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         name: "Monthly Subscription Service Fee",
 *         unitPrice: 20,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         quantity: 1
 *     }
 */
export interface ContractInvoiceLineItemSchema {
    /** Name of the line item */
    name: string;
    /** Unit price of the line item */
    unitPrice?: number;
    /** ISO 4217 currency code */
    currency?: Mercoa.CurrencyCode;
    /** Quantity of the line item */
    quantity?: number;
}
