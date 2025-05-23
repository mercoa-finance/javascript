/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { TokenGenerationInvoiceOptions } from "./TokenGenerationInvoiceOptions";
import { TokenGenerationPagesOptions } from "./TokenGenerationPagesOptions";
import { TokenGenerationStyleOptions } from "./TokenGenerationStyleOptions";
import { TokenGenerationVendorOptions } from "./TokenGenerationVendorOptions";
import { TokenGenerationEntityOptions } from "./TokenGenerationEntityOptions";

export const TokenGenerationOptions: core.serialization.ObjectSchema<
    serializers.TokenGenerationOptions.Raw,
    Mercoa.TokenGenerationOptions
> = core.serialization.object({
    expiresIn: core.serialization.string().optional(),
    invoice: TokenGenerationInvoiceOptions.optional(),
    pages: TokenGenerationPagesOptions.optional(),
    style: TokenGenerationStyleOptions.optional(),
    vendors: TokenGenerationVendorOptions.optional(),
    entity: TokenGenerationEntityOptions.optional(),
    sessionId: core.serialization.string().optional(),
});

export declare namespace TokenGenerationOptions {
    export interface Raw {
        expiresIn?: string | null;
        invoice?: TokenGenerationInvoiceOptions.Raw | null;
        pages?: TokenGenerationPagesOptions.Raw | null;
        style?: TokenGenerationStyleOptions.Raw | null;
        vendors?: TokenGenerationVendorOptions.Raw | null;
        entity?: TokenGenerationEntityOptions.Raw | null;
        sessionId?: string | null;
    }
}
