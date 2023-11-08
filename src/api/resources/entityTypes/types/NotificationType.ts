/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type NotificationType =
    | "INVOICE_APPROVAL_NEEDED"
    | "INVOICE_APPROVED"
    | "INVOICE_REJECTED"
    | "INVOICE_SCHEDULED"
    | "INVOICE_PENDING"
    | "INVOICE_PAID"
    | "INVOICE_CANCELED"
    | "INVOICE_CREATED"
    | "INVOICE_EMAILED"
    | "INVOICE_FAILED";

export const NotificationType = {
    InvoiceApprovalNeeded: "INVOICE_APPROVAL_NEEDED",
    InvoiceApproved: "INVOICE_APPROVED",
    InvoiceRejected: "INVOICE_REJECTED",
    InvoiceScheduled: "INVOICE_SCHEDULED",
    InvoicePending: "INVOICE_PENDING",
    InvoicePaid: "INVOICE_PAID",
    InvoiceCanceled: "INVOICE_CANCELED",
    InvoiceCreated: "INVOICE_CREATED",
    InvoiceEmailed: "INVOICE_EMAILED",
    InvoiceFailed: "INVOICE_FAILED",
} as const;
