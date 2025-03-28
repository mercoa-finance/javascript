/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const TokenGenerationPagesOptions: core.serialization.ObjectSchema<
    serializers.TokenGenerationPagesOptions.Raw,
    Mercoa.TokenGenerationPagesOptions
> = core.serialization.object({
    paymentMethods: core.serialization.boolean().optional(),
    representatives: core.serialization.boolean().optional(),
    notifications: core.serialization.boolean().optional(),
    counterparties: core.serialization.boolean().optional(),
    approvals: core.serialization.boolean().optional(),
    emailLog: core.serialization.boolean().optional(),
});

export declare namespace TokenGenerationPagesOptions {
    export interface Raw {
        paymentMethods?: boolean | null;
        representatives?: boolean | null;
        notifications?: boolean | null;
        counterparties?: boolean | null;
        approvals?: boolean | null;
        emailLog?: boolean | null;
    }
}
