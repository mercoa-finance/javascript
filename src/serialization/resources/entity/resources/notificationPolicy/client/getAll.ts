/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NotificationPolicyResponse } from "../../../../entityTypes/types/NotificationPolicyResponse";

export const Response: core.serialization.Schema<
    serializers.entity.notificationPolicy.getAll.Response.Raw,
    Mercoa.NotificationPolicyResponse[]
> = core.serialization.list(NotificationPolicyResponse);

export declare namespace Response {
    export type Raw = NotificationPolicyResponse.Raw[];
}
