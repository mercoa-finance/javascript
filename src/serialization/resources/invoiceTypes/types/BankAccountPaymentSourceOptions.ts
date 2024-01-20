/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BankAccountPaymentSourceOptions: core.serialization.ObjectSchema<
    serializers.BankAccountPaymentSourceOptions.Raw,
    Mercoa.BankAccountPaymentSourceOptions
> = core.serialization.object({
    delivery: core.serialization.lazy(async () => (await import("../../..")).BankDeliveryMethod).optional(),
});

export declare namespace BankAccountPaymentSourceOptions {
    interface Raw {
        delivery?: serializers.BankDeliveryMethod.Raw | null;
    }
}