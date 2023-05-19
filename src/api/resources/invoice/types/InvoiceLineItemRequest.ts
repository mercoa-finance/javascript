/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface InvoiceLineItemRequest {
    /** If provided, will overwrite line item on the invoice with this ID. If not provided, will create a new line item. */
    id?: string;
    amount?: number;
    currency?: Mercoa.CurrencyCode;
    description?: string;
    name?: string;
    quantity?: number;
    unitPrice?: number;
}