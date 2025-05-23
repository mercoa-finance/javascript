/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         count: 1,
 *         hasMore: false,
 *         data: [{
 *                 id: "1234",
 *                 status: Mercoa.IncomingEmailLogStatus.Processed,
 *                 subject: "Invoice #1234",
 *                 from: "John Doe <john.doe@example.com>",
 *                 to: "Jane Doe <jane.doe@example.com>",
 *                 htmlBody: "<html><body><p>Hi Jane,</p><p>Please find attached the invoice for your recent purchase.</p><p>Thanks,</p><p>John</p></body></html>",
 *                 textBody: "Hi Jane,\n\nPlease find attached the invoice for your recent purchase.\n\nThanks,\nJohn",
 *                 createdAt: "2021-01-01T00:00:00Z",
 *                 attachment: {
 *                     filename: "invoice.pdf",
 *                     contentType: "application/pdf"
 *                 }
 *             }]
 *     }
 */
export interface EmailLogResponse {
    /** Total number of logs for the given filters. This value is not limited by the limit parameter. It is provided so that you can determine how many pages of results are available. */
    count: number;
    /** True if there are more logs available for the given filters. */
    hasMore: boolean;
    data: Mercoa.EmailLog[];
}
