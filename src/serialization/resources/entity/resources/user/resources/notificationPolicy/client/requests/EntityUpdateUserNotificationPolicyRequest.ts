/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../..";
import * as Mercoa from "../../../../../../../../../api";
import * as core from "../../../../../../../../../core";

export const EntityUpdateUserNotificationPolicyRequest: core.serialization.Schema<
    serializers.entity.user.EntityUpdateUserNotificationPolicyRequest.Raw,
    Mercoa.entity.user.EntityUpdateUserNotificationPolicyRequest
> = core.serialization.object({
    disabled: core.serialization.boolean(),
});

export declare namespace EntityUpdateUserNotificationPolicyRequest {
    interface Raw {
        disabled: boolean;
    }
}