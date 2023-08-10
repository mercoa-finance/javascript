/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface InvoiceRequest {
    status?: Mercoa.InvoiceStatus;
    amount?: number;
    currency?: Mercoa.CurrencyCode;
    /** Date the invoice was created. */
    invoiceDate?: Date;
    /** Date when funds will be deducted from payer's account. */
    deductionDate?: Date;
    /** Date of funds settlement. */
    settlementDate?: Date;
    /** Due date of invoice. */
    dueDate?: Date;
    invoiceNumber?: string;
    /** Note to self or memo on invoice. */
    noteToSelf?: string;
    serviceStartDate?: Date;
    serviceEndDate?: Date;
    payerId?: Mercoa.EntityId;
    paymentSourceId?: Mercoa.PaymentMethodId;
    /** Set approvers for this invoice. */
    approvers?: Mercoa.ApprovalSlotAssignment[];
    vendorId?: Mercoa.EntityId;
    paymentDestinationId?: Mercoa.PaymentMethodId;
    lineItems?: Mercoa.InvoiceLineItemRequest[];
    /** Metadata associated with this invoice. You can specify up to 10 keys, with key names up to 40 characters long and values up to 200 characters long. */
    metadata?: Record<string, string>;
    /** Base64 encoded image or PDF of invoice. PNG, JPG, and PDF are supported. 10MB max. */
    uploadedImage?: string;
    /** ID of entity user who created this invoice. */
    createdById?: Mercoa.EntityUserId;
}
