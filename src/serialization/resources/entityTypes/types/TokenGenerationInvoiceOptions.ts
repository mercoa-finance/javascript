/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const TokenGenerationInvoiceOptions: core.serialization.ObjectSchema<
    serializers.TokenGenerationInvoiceOptions.Raw,
    Mercoa.TokenGenerationInvoiceOptions
> = core.serialization.object({
    lineItems: core.serialization.lazy(async () => (await import("../../..")).LineItemAvailabilities).optional(),
    disableLineItems: core.serialization.boolean().optional(),
    status: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).InvoiceStatus)),
});

export declare namespace TokenGenerationInvoiceOptions {
    interface Raw {
        lineItems?: serializers.LineItemAvailabilities.Raw | null;
        disableLineItems?: boolean | null;
        status: serializers.InvoiceStatus.Raw[];
    }
}
