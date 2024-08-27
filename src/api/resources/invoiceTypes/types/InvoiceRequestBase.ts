/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface InvoiceRequestBase {
    status?: Mercoa.InvoiceStatus;
    /** Total amount of invoice in major units. If the entered amount has more decimal places than the currency supports, trailing decimals will be truncated. */
    amount?: number;
    /** Currency code for the amount. Defaults to USD. */
    currency?: Mercoa.CurrencyCode;
    /** Date the invoice was issued. */
    invoiceDate?: Date;
    /** Initial date when funds are scheduled to be deducted from payer's account. */
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
    /** ID or foreign ID of the payer of this invoice. */
    payerId?: Mercoa.EntityId;
    /** ID of payment source for this invoice. If not provided, will attempt to use the default payment source for the payer when creating an invoice if a default payment source exists for the payer. */
    paymentSourceId?: Mercoa.PaymentMethodId;
    /** ID or foreign ID of the vendor of this invoice. */
    vendorId?: Mercoa.EntityId;
    /** ID of payment destination for this invoice. If not provided, will attempt to use the default payment destination for the vendor when creating an invoice if a default payment destination exists for the vendor. */
    paymentDestinationId?: Mercoa.PaymentMethodId;
    /** Options for the payment destination. Depending on the payment destination, this may include things such as check delivery method. */
    paymentDestinationOptions?: Mercoa.PaymentDestinationOptions;
    /** Set approvers for this invoice. */
    approvers?: Mercoa.ApprovalSlotAssignment[];
    /** Metadata associated with this invoice. */
    metadata?: Record<string, string>;
    /** The ID used to identify this invoice in your system. This ID must be unique within each creatorEntity in your system, e.g. two invoices with the same creatorEntity may not have the same foreign ID. */
    foreignId?: string;
    /** Base64 encoded image or PDF of invoice document. PNG, JPG, WEBP, and PDF are supported. 10MB max. If the invoice already has a document, this will add a new document to the invoice. */
    document?: string;
    /** DEPRECATED. Use document field instead. */
    uploadedImage?: string;
    /** ID of entity user who created this invoice. */
    creatorUserId?: Mercoa.EntityUserId;
    /** If the invoice failed to be paid, indicate the failure reason. Only applicable for invoices with custom payment methods. */
    failureType?: Mercoa.InvoiceFailureType;
    /** If using a custom payment method, you can override the default fees for this invoice. If not provided, the default fees for the custom payment method will be used. */
    fees?: Mercoa.InvoiceFeesRequest;
    /** If this is a recurring invoice, this will be the payment schedule for the invoice. If not provided, this will be a one-time invoice. */
    paymentSchedule?: Mercoa.PaymentSchedule;
}
