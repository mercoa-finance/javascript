/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../..";

export interface GetAllInvoicesRequest {
    /**
     * Filter invoices by entity IDs.
     */
    entityIds?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Start date for invoice created on date filter.
     */
    startDate?: Date;
    /**
     * End date for invoice created date filter.
     */
    endDate?: Date;
    /**
     * Field to order invoices by. Defaults to CREATED_AT.
     */
    orderBy?: Mercoa.InvoiceOrderByField;
    /**
     * Direction to order invoices by. Defaults to asc.
     */
    orderDirection?: Mercoa.OrderDirection;
    /**
     * Number of invoices to return. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * The ID of the invoice to start after. If not provided, the first page of invoices will be returned.
     */
    startingAfter?: Mercoa.InvoiceId;
    /**
     * Filter vendors by name. Partial matches are supported.
     */
    search?: string;
    /**
     * Invoice status to filter on
     */
    status?: Mercoa.InvoiceStatus | Mercoa.InvoiceStatus[];
}
