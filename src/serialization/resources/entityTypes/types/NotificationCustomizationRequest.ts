/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const NotificationCustomizationRequest: core.serialization.ObjectSchema<
    serializers.NotificationCustomizationRequest.Raw,
    Mercoa.NotificationCustomizationRequest
> = core.serialization.object({
    assumeRole: core.serialization.string().optional(),
});

export declare namespace NotificationCustomizationRequest {
    interface Raw {
        assumeRole?: string | null;
    }
}