/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         subject: "Invoice Past Due - Please Review",
 *         body: "Your invoice is now 3 days overdue. Please arrange payment as soon as possible to avoid further follow-ups."
 *     }
 *
 * @example
 *     {
 *         subject: "Re: Invoice Past Due - Please Review",
 *         body: "This slipped under my radar; I will make sure to pay this today."
 *     }
 */
export interface EmailMessageResponse {
    /** The subject of the email */
    subject: string;
    /** The body of the email in plaintext */
    body: string;
}
