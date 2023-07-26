/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface InvoiceResponse {
    id: Mercoa.InvoiceId;
    status: Mercoa.InvoiceStatus;
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
    payer?: Mercoa.EntityResponse;
    paymentSource?: Mercoa.PaymentMethodResponse;
    paymentSourceId?: Mercoa.PaymentMethodId;
    vendorId?: Mercoa.EntityId;
    vendor?: Mercoa.EntityResponse;
    paymentDestination?: Mercoa.PaymentMethodResponse;
    paymentDestinationId?: Mercoa.PaymentMethodId;
    paymentDestinationConfirmed: boolean;
    hasDocuments: boolean;
    comments?: Mercoa.CommentResponse[];
    transactions?: Mercoa.TransactionResponse[];
    lineItems?: Mercoa.InvoiceLineItemResponse[];
    approvers: Mercoa.InvoiceApproverResponse[];
    approvalPolicy: Mercoa.ApprovalPolicyResponse[];
    /** Metadata associated with this invoice. */
    metadata: Record<string, string>;
    /** Entity user who created this invoice. */
    createdBy?: Mercoa.EntityUserResponse;
    processedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
