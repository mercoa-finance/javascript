/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const MetadataCustomizationRequest: core.serialization.ObjectSchema<
    serializers.MetadataCustomizationRequest.Raw,
    Mercoa.MetadataCustomizationRequest
> = core.serialization.object({
    key: core.serialization.string(),
    disabled: core.serialization.boolean(),
});

export declare namespace MetadataCustomizationRequest {
    export interface Raw {
        key: string;
        disabled: boolean;
    }
}
