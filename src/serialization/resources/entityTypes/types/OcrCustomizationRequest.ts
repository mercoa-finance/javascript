/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const OcrCustomizationRequest: core.serialization.ObjectSchema<
    serializers.OcrCustomizationRequest.Raw,
    Mercoa.OcrCustomizationRequest
> = core.serialization.object({
    lineItems: core.serialization.boolean().optional(),
    invoiceMetadata: core.serialization.boolean().optional(),
    lineItemMetadata: core.serialization.boolean().optional(),
    lineItemGlAccountId: core.serialization.boolean().optional(),
    predictMetadata: core.serialization.boolean().optional(),
});

export declare namespace OcrCustomizationRequest {
    interface Raw {
        lineItems?: boolean | null;
        invoiceMetadata?: boolean | null;
        lineItemMetadata?: boolean | null;
        lineItemGlAccountId?: boolean | null;
        predictMetadata?: boolean | null;
    }
}