/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const CodatProviderResponse: core.serialization.ObjectSchema<
    serializers.CodatProviderResponse.Raw,
    Mercoa.CodatProviderResponse
> = core.serialization.object({
    hasApiKey: core.serialization.boolean(),
});

export declare namespace CodatProviderResponse {
    interface Raw {
        hasApiKey: boolean;
    }
}
