/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface UserNotificationPolicyResponse {
    /** True if the selected notification type is disabled for this user */
    disabled: boolean;
    /** True if the selected notification type is sent as a digest. If false, notifications will be sent immediately. */
    digest: boolean;
    type: Mercoa.NotificationType;
}
