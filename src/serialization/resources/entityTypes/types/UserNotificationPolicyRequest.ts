/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const UserNotificationPolicyRequest: core.serialization.ObjectSchema<
    serializers.UserNotificationPolicyRequest.Raw,
    Mercoa.UserNotificationPolicyRequest
> = core.serialization.object({
    disabled: core.serialization.boolean().optional(),
    digest: core.serialization.boolean().optional(),
});

export declare namespace UserNotificationPolicyRequest {
    interface Raw {
        disabled?: boolean | null;
        digest?: boolean | null;
    }
}
