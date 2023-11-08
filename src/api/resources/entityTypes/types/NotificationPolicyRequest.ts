/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface NotificationPolicyRequest {
    /** Set to true if the selected notification type should be disabled for this entity */
    disabled?: boolean;
    /** List of user roles that should receive notifications in addition to the default users for this notification type */
    additionalRoles: string[];
}
