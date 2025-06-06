/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const OcrCustomizationResponse: core.serialization.ObjectSchema<
    serializers.OcrCustomizationResponse.Raw,
    Mercoa.OcrCustomizationResponse
> = core.serialization.object({
    lineItems: core.serialization.boolean(),
    collapseLineItems: core.serialization.boolean(),
    invoiceMetadata: core.serialization.boolean(),
    lineItemMetadata: core.serialization.boolean(),
    lineItemGlAccountId: core.serialization.boolean(),
    predictMetadata: core.serialization.boolean(),
    taxAndShippingAsLineItems: core.serialization.boolean(),
    splitDocuments: core.serialization.boolean(),
});

export declare namespace OcrCustomizationResponse {
    export interface Raw {
        lineItems: boolean;
        collapseLineItems: boolean;
        invoiceMetadata: boolean;
        lineItemMetadata: boolean;
        lineItemGlAccountId: boolean;
        predictMetadata: boolean;
        taxAndShippingAsLineItems: boolean;
        splitDocuments: boolean;
    }
}
