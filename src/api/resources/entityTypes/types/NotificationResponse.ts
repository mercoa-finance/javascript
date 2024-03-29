/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface NotificationResponse {
    id: Mercoa.NotificationId;
    /** The invoice ID that this notification is related to. This field is only present for notifications related to invoices. */
    invoiceId?: Mercoa.InvoiceId;
    type: Mercoa.NotificationType;
    createdAt: Date;
}
