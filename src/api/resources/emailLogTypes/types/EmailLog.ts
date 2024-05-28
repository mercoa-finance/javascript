/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "1234",
 *         subject: "Invoice #1234",
 *         from: "John Doe <john.doe@example.com>",
 *         to: "Jane Doe <jane.doe@example.com>",
 *         htmlBody: "<html><body><p>Hi Jane,</p><p>Please find attached the invoice for your recent purchase.</p><p>Thanks,</p><p>John</p></body></html>",
 *         textBody: "Hi Jane,\n\nPlease find attached the invoice for your recent purchase.\n\nThanks,\nJohn",
 *         createdAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 */
export interface EmailLog {
    id: Mercoa.EmailLogId;
    subject: string;
    from: string;
    to: string;
    htmlBody: string;
    textBody: string;
    createdAt: Date;
    invoiceId?: Mercoa.InvoiceId;
}