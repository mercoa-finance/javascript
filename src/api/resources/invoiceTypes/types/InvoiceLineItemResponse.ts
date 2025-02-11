/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "inli_26672f38-eb9a-48f1-a7a0-f1b855e38cd7",
 *         amount: 100,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         description: "Product A",
 *         name: "Product A",
 *         quantity: 1,
 *         unitPrice: 100,
 *         category: "EXPENSE",
 *         serviceStartDate: "2021-01-01T00:00:00Z",
 *         serviceEndDate: "2021-01-31T00:00:00Z",
 *         metadata: {
 *             "key1": "value1",
 *             "key2": "value2"
 *         },
 *         glAccountId: "600394",
 *         createdAt: "2021-01-01T00:00:00Z",
 *         updatedAt: "2021-01-01T00:00:00Z"
 *     }
 *
 * @example
 *     {
 *         id: "inli_26672f38-eb9a-48f1-a7a0-f1b855e38cd7",
 *         amount: 20,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         quantity: 1,
 *         unitPrice: 20,
 *         name: "Monthly Subscription Service Fee",
 *         category: "EXPENSE",
 *         createdAt: "2025-01-29T00:00:00Z",
 *         updatedAt: "2025-01-29T00:00:00Z"
 *     }
 *
 * @example
 *     {
 *         id: "inli_26672f38-eb9a-48f1-a7a0-f1b855e38cd7",
 *         amount: 20,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         quantity: 2,
 *         unitPrice: 20,
 *         name: "Monthly Subscription Service Fee",
 *         category: "EXPENSE",
 *         createdAt: "2025-01-29T00:00:00Z",
 *         updatedAt: "2025-01-29T00:00:00Z"
 *     }
 */
export interface InvoiceLineItemResponse {
    id: Mercoa.InvoiceLineItemId;
    /** Total amount of line item in major units. */
    amount?: number;
    currency: Mercoa.CurrencyCode;
    description?: string;
    name?: string;
    quantity?: number;
    /** Unit price of line item in major units. */
    unitPrice?: number;
    /** Category of the line item. Defaults to 'EXPENSE'. */
    category: string;
    serviceStartDate?: Date;
    serviceEndDate?: Date;
    metadata?: Record<string, string>;
    /** ID of general ledger account associated with this line item. */
    glAccountId?: string;
    createdAt: Date;
    updatedAt: Date;
}
