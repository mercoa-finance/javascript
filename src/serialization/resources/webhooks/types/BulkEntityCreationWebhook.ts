/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BulkEntityCreationFromObjectResponse } from "../../entityTypes/types/BulkEntityCreationFromObjectResponse";

export const BulkEntityCreationWebhook: core.serialization.ObjectSchema<
    serializers.BulkEntityCreationWebhook.Raw,
    Mercoa.BulkEntityCreationWebhook
> = core.serialization.object({
    eventType: core.serialization.string(),
    data: core.serialization.list(BulkEntityCreationFromObjectResponse),
});

export declare namespace BulkEntityCreationWebhook {
    interface Raw {
        eventType: string;
        data: BulkEntityCreationFromObjectResponse.Raw[];
    }
}
