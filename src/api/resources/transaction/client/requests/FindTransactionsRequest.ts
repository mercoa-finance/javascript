/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../index";

/**
 * @example
 *     {
 *         startDate: "2024-01-15T09:30:00Z",
 *         endDate: "2024-01-15T09:30:00Z",
 *         limit: 10
 *     }
 */
export interface FindTransactionsRequest {
    /**
     * Filter transactions by the ID or foreign ID of the entity that is the payer or the vendor of the invoice that created the transaction.
     */
    entityId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * CREATED_AT Start date filter.
     */
    startDate?: Date;
    /**
     * CREATED_AT End date filter.
     */
    endDate?: Date;
    /**
     * Number of transactions to return. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * The ID of the transactions to start after. If not provided, the first page of transactions will be returned.
     */
    startingAfter?: Mercoa.TransactionId;
    /**
     * Find transactions by vendor name, invoice number, check number, or amount. Partial matches are supported.
     */
    search?: string;
    /**
     * Filter transactions by invoice metadata. Each filter will be applied as an AND condition. Duplicate keys will be ignored.
     */
    metadata?: Mercoa.MetadataFilter | Mercoa.MetadataFilter[];
    /**
     * Filter transactions by invoice line item metadata. Each filter will be applied as an AND condition. Duplicate keys will be ignored.
     */
    lineItemMetadata?: Mercoa.MetadataFilter | Mercoa.MetadataFilter[];
    /**
     * Filter transactions by invoice line item GL account ID. Each filter will be applied as an OR condition. Duplicate keys will be ignored.
     */
    lineItemGlAccountId?: string | string[];
    /**
     * Filter transactions by payer ID or payer foreign ID.
     */
    payerId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Filter transactions by vendor ID or vendor foreign ID.
     */
    vendorId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Filter transactions by the ID or foreign ID of the user that created the invoice that created the transaction.
     */
    creatorUserId?: Mercoa.EntityUserId | Mercoa.EntityUserId[];
    /**
     * Filter transactions by invoice ID. Does not support foreign ID.
     */
    invoiceId?: Mercoa.InvoiceId | Mercoa.InvoiceId[];
    /**
     * Filter transactions by transaction ID.
     */
    transactionId?: Mercoa.TransactionId | Mercoa.TransactionId[];
    /**
     * Transaction status to filter on
     */
    status?: Mercoa.TransactionStatus | Mercoa.TransactionStatus[];
    /**
     * Filter transactions by transaction type
     */
    transactionType?: Mercoa.TransactionType | Mercoa.TransactionType[];
}
