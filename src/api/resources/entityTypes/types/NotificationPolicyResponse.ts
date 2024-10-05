/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         disabled: false,
 *         additionalRoles: ["admin", "approver"],
 *         additionalUsers: ["user_1234"],
 *         type: Mercoa.NotificationType.InvoiceApprovalNeeded,
 *         notifyPayeeCounterparty: true,
 *         notifyPayorCounterparty: true
 *     }
 *
 * @example
 *     {
 *         disabled: false,
 *         additionalRoles: ["admin", "bookkeeper"],
 *         additionalUsers: [],
 *         type: Mercoa.NotificationType.InvoiceApproved,
 *         notifyPayeeCounterparty: false,
 *         notifyPayorCounterparty: true
 *     }
 *
 * @example
 *     {
 *         disabled: true,
 *         additionalRoles: [],
 *         additionalUsers: ["user_1234"],
 *         type: Mercoa.NotificationType.InvoiceApproved,
 *         notifyPayeeCounterparty: true,
 *         notifyPayorCounterparty: false
 *     }
 */
export interface NotificationPolicyResponse {
    /** True if the selected notification type is disabled for this entity */
    disabled: boolean;
    /** List of user roles that should receive notifications in addition to the default users for this notification type */
    additionalRoles: string[];
    /** List of user IDs that should receive notifications in addition to the default users for this notification type */
    additionalUsers: Mercoa.EntityUserId[];
    /** True if the selected notification type should be sent to the counterparty if this is a payable invoice. */
    notifyPayeeCounterparty: boolean;
    /** True if the selected notification type should be sent to the counterparty if this is a receivable invoice. */
    notifyPayorCounterparty: boolean;
    type: Mercoa.NotificationType;
}
