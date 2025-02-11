/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         count: 2,
 *         hasMore: false,
 *         data: [{
 *                 id: "notif_7df2974a-4069-454c-912f-7e58ebe030fb",
 *                 invoiceId: "in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *                 type: Mercoa.NotificationType.InvoiceApprovalNeeded,
 *                 status: Mercoa.NotificationStatus.Sent,
 *                 createdAt: "2024-01-01T00:00:00Z"
 *             }, {
 *                 id: "notif_958c4ffb-dc06-494c-a0e0-1b4946c6bb0f",
 *                 invoiceId: "in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *                 type: Mercoa.NotificationType.InvoiceApproved,
 *                 status: Mercoa.NotificationStatus.Sent,
 *                 createdAt: "2024-01-01T00:00:00Z"
 *             }]
 *     }
 */
export interface FindNotificationResponse {
    /** Total number of notifications for the given start and end date filters. This value is not limited by the limit parameter. It is provided so that you can determine how many pages of results are available. */
    count: number;
    /** True if there are more notifications available for the given start and end date filters. */
    hasMore: boolean;
    data: Mercoa.NotificationResponse[];
}
