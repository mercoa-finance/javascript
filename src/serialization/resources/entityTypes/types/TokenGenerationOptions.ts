/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const TokenGenerationOptions: core.serialization.ObjectSchema<
    serializers.TokenGenerationOptions.Raw,
    Mercoa.TokenGenerationOptions
> = core.serialization.object({
    invoice: core.serialization
        .lazyObject(async () => (await import("../../..")).TokenGenerationInvoiceOptions)
        .optional(),
    pages: core.serialization.lazyObject(async () => (await import("../../..")).TokenGenerationPagesOptions).optional(),
    style: core.serialization.lazyObject(async () => (await import("../../..")).TokenGenerationStyleOptions).optional(),
    vendors: core.serialization
        .lazyObject(async () => (await import("../../..")).TokenGenerationVendorOptions)
        .optional(),
});

export declare namespace TokenGenerationOptions {
    interface Raw {
        invoice?: serializers.TokenGenerationInvoiceOptions.Raw | null;
        pages?: serializers.TokenGenerationPagesOptions.Raw | null;
        style?: serializers.TokenGenerationStyleOptions.Raw | null;
        vendors?: serializers.TokenGenerationVendorOptions.Raw | null;
    }
}