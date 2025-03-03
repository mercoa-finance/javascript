/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type InvoiceStatus =
    | "UNASSIGNED"
    | "DRAFT"
    | "NEW"
    | "APPROVED"
    | "SCHEDULED"
    | "PENDING"
    | "PAID"
    | "ARCHIVED"
    | "REFUSED"
    | "CANCELED"
    | "FAILED";
export const InvoiceStatus = {
    Unassigned: "UNASSIGNED",
    Draft: "DRAFT",
    New: "NEW",
    Approved: "APPROVED",
    Scheduled: "SCHEDULED",
    Pending: "PENDING",
    Paid: "PAID",
    Archived: "ARCHIVED",
    Refused: "REFUSED",
    Canceled: "CANCELED",
    Failed: "FAILED",
} as const;
