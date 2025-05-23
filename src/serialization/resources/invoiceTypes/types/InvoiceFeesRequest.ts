/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const InvoiceFeesRequest: core.serialization.ObjectSchema<
    serializers.InvoiceFeesRequest.Raw,
    Mercoa.InvoiceFeesRequest
> = core.serialization.object({
    sourcePlatformMarkupFee: core.serialization.number(),
    destinationPlatformMarkupFee: core.serialization.number(),
});

export declare namespace InvoiceFeesRequest {
    export interface Raw {
        sourcePlatformMarkupFee: number;
        destinationPlatformMarkupFee: number;
    }
}
