/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CalculateFeesRequest: core.serialization.ObjectSchema<
    serializers.CalculateFeesRequest.Raw,
    Mercoa.CalculateFeesRequest
> = core.serialization.object({
    amount: core.serialization.number(),
    currency: core.serialization.lazy(async () => (await import("../../..")).CurrencyCode).optional(),
    paymentSourceId: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodId),
    paymentDestinationId: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodId),
    paymentDestinationOptions: core.serialization
        .lazy(async () => (await import("../../..")).PaymentDestinationOptions)
        .optional(),
});

export declare namespace CalculateFeesRequest {
    interface Raw {
        amount: number;
        currency?: serializers.CurrencyCode.Raw | null;
        paymentSourceId: serializers.PaymentMethodId.Raw;
        paymentDestinationId: serializers.PaymentMethodId.Raw;
        paymentDestinationOptions?: serializers.PaymentDestinationOptions.Raw | null;
    }
}
