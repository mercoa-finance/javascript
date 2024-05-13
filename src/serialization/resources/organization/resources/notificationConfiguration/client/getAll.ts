/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { NotificationConfigurationResponse } from "../../../../organizationTypes/types/NotificationConfigurationResponse";

export const Response: core.serialization.Schema<
    serializers.organization.notificationConfiguration.getAll.Response.Raw,
    Mercoa.NotificationConfigurationResponse[]
> = core.serialization.list(NotificationConfigurationResponse);

export declare namespace Response {
    type Raw = NotificationConfigurationResponse.Raw[];
}
