/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         lineItems: [{
 *                 name: "Monthly Subscription Service Fee",
 *                 unitPrice: 20,
 *                 currency: Mercoa.CurrencyCode.Usd,
 *                 quantity: 1
 *             }]
 *     }
 */
export interface ContractInvoiceSchema {
    /** Line items in the invoice */
    lineItems: Mercoa.ContractInvoiceLineItemSchema[];
}
