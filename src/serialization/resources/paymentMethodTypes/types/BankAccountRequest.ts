/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BankAccountRequest: core.serialization.ObjectSchema<
    serializers.BankAccountRequest.Raw,
    Mercoa.BankAccountRequest
> = core.serialization
    .object({
        bankAccount: core.serialization
            .lazyObject(async () => (await import("../../..")).BankAccountBaseRequest)
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).BankAccountBaseRequest));

export declare namespace BankAccountRequest {
    interface Raw extends serializers.BankAccountBaseRequest.Raw {
        bankAccount?: serializers.BankAccountBaseRequest.Raw | null;
    }
}
