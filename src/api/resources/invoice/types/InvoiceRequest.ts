/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface InvoiceRequest {
    status?: Mercoa.InvoiceStatus;
    amount?: number;
    currency?: Mercoa.CurrencyCode;
    /** Date the invoice was created. */
    invoiceDate?: Date;
    /** Date when funds will be deducted from payer's account. */
    deductionDate?: Date;
    /** Date of funds settlement. */
    fundedDate?: Date;
    /** Due date of invoice. */
    dueDate?: Date;
    invoiceNumber?: string;
    noteToSelf?: string;
    serviceStartDate?: Date;
    serviceEndDate?: Date;
    payerId?: Mercoa.EntityId;
    paymentSourceId?: Mercoa.PaymentMethodId;
    vendorId?: Mercoa.EntityId;
    paymentDestinationId?: Mercoa.PaymentMethodId;
    /** When paying to a new vendor, use the createVendor object. Mercoa will create the vendor entity and tie it to this invoice. This object is ignored when updating an invoice. */
    createVendor?: Mercoa.CreateVendorRequest;
    /** When paying to an existing vendor with an incomplete profile, use the updateVendor object. Mercoa will update the vendor entity tied to this invoice. This object is ignored if the vendor already has already been created with complete information and when creating a new invoice. */
    updateVendor?: Mercoa.CreateVendorRequest;
    lineItems?: Mercoa.InvoiceLineItemRequest[];
    /** Base64 encoded image or PDF of invoice. PNG, JPG, and PDF are supported. 10MB max. */
    uploadedImage?: string;
    /** ID of entity user who created this invoice. */
    createdById?: Mercoa.EntityUserId;
}
