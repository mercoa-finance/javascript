/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const PlaidProcessorTokenRequest: core.serialization.ObjectSchema<
    serializers.PlaidProcessorTokenRequest.Raw,
    Mercoa.PlaidProcessorTokenRequest
> = core.serialization.object({
    processorToken: core.serialization.string(),
});

export declare namespace PlaidProcessorTokenRequest {
    export interface Raw {
        processorToken: string;
    }
}
