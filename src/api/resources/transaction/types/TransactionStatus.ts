/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TransactionStatus =
    | "CREATED"
    | "PENDING"
    | "COMPLETED"
    | "FAILED"
    | "REVERSED"
    | "QUEUED"
    | "CANCELED"
    | "RETURNED";

export const TransactionStatus = {
    Created: "CREATED",
    Pending: "PENDING",
    Completed: "COMPLETED",
    Failed: "FAILED",
    Reversed: "REVERSED",
    Queued: "QUEUED",
    Canceled: "CANCELED",
    Returned: "RETURNED",
} as const;
