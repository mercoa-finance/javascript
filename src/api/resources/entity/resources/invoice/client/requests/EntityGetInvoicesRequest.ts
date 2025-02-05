/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../../index";

/**
 * @example
 *     {
 *         excludeReceivables: true,
 *         orderBy: "CREATED_AT",
 *         orderDirection: "ASC",
 *         limit: 10
 *     }
 */
export interface EntityGetInvoicesRequest {
    /**
     * Return only invoices that are receivable by the entity.
     */
    excludePayables?: boolean;
    /**
     * Return only invoices that are payable by the entity.
     */
    excludeReceivables?: boolean;
    /**
     * Start date filter. Defaults to CREATED_AT unless specified the dateType is specified
     */
    startDate?: Date;
    /**
     * End date filter. Defaults to CREATED_AT unless specified the dateType is specified
     */
    endDate?: Date;
    /**
     * Type of date to filter by if startDate and endDate filters are provided. Defaults to CREATED_AT.
     */
    dateType?: Mercoa.InvoiceDateFilter;
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
     * Filter invoices by metadata. Each filter will be applied as an AND condition. Duplicate keys will be ignored.
     */
    metadata?: Mercoa.MetadataFilter | Mercoa.MetadataFilter[];
    /**
     * Filter invoices by line item metadata. Each filter will be applied as an AND condition. Duplicate keys will be ignored.
     */
    lineItemMetadata?: Mercoa.MetadataFilter | Mercoa.MetadataFilter[];
    /**
     * Filter invoices by line item GL account ID. Each filter will be applied as an OR condition. Duplicate keys will be ignored.
     */
    lineItemGlAccountId?: string | string[];
    /**
     * Find invoices by vendor name, invoice number, check number, or amount. Partial matches are supported.
     */
    search?: string;
    /**
     * Filter invoices by payer ID or payer foreign ID.
     */
    payerId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Filter invoices by vendor ID or vendor foreign ID.
     */
    vendorId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Filter invoices by the ID or foreign ID of the user that created the invoice.
     */
    creatorUserId?: Mercoa.EntityUserId | Mercoa.EntityUserId[];
    /**
     * Filter invoices by assigned approver user ID.
     */
    approverId?: Mercoa.EntityUserId | Mercoa.EntityUserId[];
    /**
     * Filter invoices by approver action. Needs to be used with approverId. For example, if you want to find all invoices that have been approved by a specific user, you would use approverId and approverAction=APPROVE.
     */
    approverAction?: Mercoa.ApproverAction | Mercoa.ApproverAction[];
    /**
     * Filter invoices by invoice ID or invoice foreign ID.
     */
    invoiceId?: Mercoa.InvoiceId | Mercoa.InvoiceId[];
    /**
     * Invoice status to filter on.
     */
    status?: Mercoa.InvoiceStatus | Mercoa.InvoiceStatus[];
    /**
     * Filter invoices by payment type.
     */
    paymentType?: Mercoa.PaymentType[];
    /**
     * Whether to return payer metadata in the response
     */
    returnPayerMetadata?: boolean;
    /**
     * Whether to return vendor metadata in the response
     */
    returnVendorMetadata?: boolean;
}
