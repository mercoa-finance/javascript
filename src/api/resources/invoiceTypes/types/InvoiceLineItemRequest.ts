/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface InvoiceLineItemRequest {
    /** If provided, will overwrite line item on the invoice with this ID. If not provided, will create a new line item. */
    id?: string;
    /** Total amount of line item in major units. If the entered amount has more decimal places than the currency supports, trailing decimals will be truncated. */
    amount: number;
    /** Currency code for the amount. Defaults to USD. */
    currency?: Mercoa.CurrencyCode;
    description: string;
    name?: string;
    quantity?: number;
    /** Unit price of the line item in major units. If the entered amount has more decimal places than the currency supports, trailing decimals will be truncated. */
    unitPrice?: number;
    serviceStartDate?: Date;
    serviceEndDate?: Date;
    metadata?: Record<string, string>;
    /** ID of general ledger account associated with this line item. */
    glAccountId?: string;
}
