/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const PaymentMethodBalanceResponse: core.serialization.ObjectSchema<
    serializers.PaymentMethodBalanceResponse.Raw,
    Mercoa.PaymentMethodBalanceResponse
> = core.serialization.object({
    availableBalance: core.serialization.number(),
    currency: core.serialization.lazy(async () => (await import("../../..")).CurrencyCode),
    updatedAt: core.serialization.date().optional(),
});

export declare namespace PaymentMethodBalanceResponse {
    interface Raw {
        availableBalance: number;
        currency: serializers.CurrencyCode.Raw;
        updatedAt?: string | null;
    }
}
