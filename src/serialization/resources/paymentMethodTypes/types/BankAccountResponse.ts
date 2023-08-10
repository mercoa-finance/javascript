/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BankAccountResponse: core.serialization.ObjectSchema<
    serializers.BankAccountResponse.Raw,
    Mercoa.BankAccountResponse
> = core.serialization
    .object({
        bankName: core.serialization.string(),
        routingNumber: core.serialization.string(),
        accountNumber: core.serialization.string(),
        accountType: core.serialization.lazy(async () => (await import("../../..")).BankType),
        status: core.serialization.lazy(async () => (await import("../../..")).BankStatus),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodBaseResponse));

export declare namespace BankAccountResponse {
    interface Raw extends serializers.PaymentMethodBaseResponse.Raw {
        bankName: string;
        routingNumber: string;
        accountNumber: string;
        accountType: serializers.BankType.Raw;
        status: serializers.BankStatus.Raw;
    }
}
