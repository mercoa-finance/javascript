/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BankAccountUpdateRequest: core.serialization.ObjectSchema<
    serializers.BankAccountUpdateRequest.Raw,
    Mercoa.BankAccountUpdateRequest
> = core.serialization
    .object({
        accountName: core.serialization.string().optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodBaseRequest));

export declare namespace BankAccountUpdateRequest {
    interface Raw extends serializers.PaymentMethodBaseRequest.Raw {
        accountName?: string | null;
    }
}