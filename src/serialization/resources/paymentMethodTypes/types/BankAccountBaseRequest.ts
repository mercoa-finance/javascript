/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BankAccountBaseRequest: core.serialization.ObjectSchema<
    serializers.BankAccountBaseRequest.Raw,
    Mercoa.BankAccountBaseRequest
> = core.serialization.object({
    bankName: core.serialization.string().optional(),
    routingNumber: core.serialization.string().optional(),
    accountNumber: core.serialization.string().optional(),
    plaidPublicToken: core.serialization.string().optional(),
    accountType: core.serialization.lazy(async () => (await import("../../..")).BankType).optional(),
});

export declare namespace BankAccountBaseRequest {
    interface Raw {
        bankName?: string | null;
        routingNumber?: string | null;
        accountNumber?: string | null;
        plaidPublicToken?: string | null;
        accountType?: serializers.BankType.Raw | null;
    }
}
