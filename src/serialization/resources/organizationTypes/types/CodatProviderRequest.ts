/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CodatProviderRequest: core.serialization.ObjectSchema<
    serializers.CodatProviderRequest.Raw,
    Mercoa.CodatProviderRequest
> = core.serialization.object({
    apiKey: core.serialization.string(),
});

export declare namespace CodatProviderRequest {
    interface Raw {
        apiKey: string;
    }
}
