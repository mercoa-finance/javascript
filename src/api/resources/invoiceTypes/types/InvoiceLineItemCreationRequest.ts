/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         amount: 100,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         description: "Product A",
 *         name: "Product A",
 *         quantity: 1,
 *         unitPrice: 100,
 *         category: Mercoa.InvoiceLineItemCategory.Expense,
 *         serviceStartDate: new Date("2021-01-01T00:00:00.000Z"),
 *         serviceEndDate: new Date("2021-01-31T00:00:00.000Z"),
 *         metadata: {
 *             "key1": "value1",
 *             "key2": "value2"
 *         },
 *         glAccountId: "600394"
 *     }
 */
export interface InvoiceLineItemCreationRequest extends Mercoa.InvoiceLineItemRequestBase {
    /** Total amount of line item in major units. If the entered amount has more decimal places than the currency supports, trailing decimals will be truncated. */
    amount: number;
    description: string;
}
