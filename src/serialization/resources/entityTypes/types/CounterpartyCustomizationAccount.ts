/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const CounterpartyCustomizationAccount: core.serialization.ObjectSchema<
    serializers.CounterpartyCustomizationAccount.Raw,
    Mercoa.CounterpartyCustomizationAccount
> = core.serialization.object({
    accountId: core.serialization.string(),
    postalCode: core.serialization.string().optional(),
    nameOnAccount: core.serialization.string().optional(),
});

export declare namespace CounterpartyCustomizationAccount {
    export interface Raw {
        accountId: string;
        postalCode?: string | null;
        nameOnAccount?: string | null;
    }
}
