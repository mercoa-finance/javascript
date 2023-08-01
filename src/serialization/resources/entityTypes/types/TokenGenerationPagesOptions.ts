/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const TokenGenerationPagesOptions: core.serialization.ObjectSchema<
    serializers.TokenGenerationPagesOptions.Raw,
    Mercoa.TokenGenerationPagesOptions
> = core.serialization.object({
    paymentMethods: core.serialization.boolean().optional(),
    representatives: core.serialization.boolean().optional(),
    notifications: core.serialization.boolean().optional(),
});

export declare namespace TokenGenerationPagesOptions {
    interface Raw {
        paymentMethods?: boolean | null;
        representatives?: boolean | null;
        notifications?: boolean | null;
    }
}
