/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../..";

export interface InvoiceMetricsRequest {
    /**
     * Find invoices by vendor name, invoice number, or amount. Partial matches are supported.
     */
    search?: string;
    /**
     * Only return invoices that are not payable by the entity. This will return only invoices that are receivable by the entity.
     */
    excludePayables?: boolean;
    /**
     * Only return invoices that are not receivable by the entity. This will return only invoices that are payable by the entity.
     */
    excludeReceivables?: boolean;
    /**
     * Return invoice metrics grouped by date.
     */
    returnByDate?: Mercoa.InvoiceMetricsPerDateGroupBy;
    /**
     * Filter invoices by payer ID.
     */
    payerId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Filter invoices by vendor ID.
     */
    vendorId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Filter invoices by assigned approver user ID.
     */
    approverId?: Mercoa.EntityUserId | Mercoa.EntityUserId[];
    /**
     * Filter invoices by invoice ID.
     */
    invoiceId?: Mercoa.InvoiceId | Mercoa.InvoiceId[];
    /**
     * Invoice status to filter on
     */
    status?: Mercoa.InvoiceStatus | Mercoa.InvoiceStatus[];
    /**
     * Start date for invoice dueDate filter.
     */
    dueDateStart?: Date;
    /**
     * End date for invoice dueDate filter.
     */
    dueDateEnd?: Date;
    /**
     * Start date for invoice created on date filter.
     */
    createdDateStart?: Date;
    /**
     * End date for invoice created date filter.
     */
    createdDateEnd?: Date;
    /**
     * Currency to filter on
     */
    currency?: Mercoa.CurrencyCode | Mercoa.CurrencyCode[];
}
