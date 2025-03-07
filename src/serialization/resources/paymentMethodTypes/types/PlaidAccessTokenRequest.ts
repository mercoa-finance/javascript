/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const PlaidAccessTokenRequest: core.serialization.ObjectSchema<
    serializers.PlaidAccessTokenRequest.Raw,
    Mercoa.PlaidAccessTokenRequest
> = core.serialization.object({
    accountId: core.serialization.string().optional(),
    accessToken: core.serialization.string(),
});

export declare namespace PlaidAccessTokenRequest {
    export interface Raw {
        accountId?: string | null;
        accessToken: string;
    }
}
