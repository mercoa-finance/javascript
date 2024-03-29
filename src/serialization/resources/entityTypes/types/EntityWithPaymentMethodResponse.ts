/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const EntityWithPaymentMethodResponse: core.serialization.ObjectSchema<
    serializers.EntityWithPaymentMethodResponse.Raw,
    Mercoa.EntityWithPaymentMethodResponse
> = core.serialization
    .object({
        paymentMethods: core.serialization
            .list(core.serialization.lazy(async () => (await import("../../..")).PaymentMethodResponse))
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).EntityResponse));

export declare namespace EntityWithPaymentMethodResponse {
    interface Raw extends serializers.EntityResponse.Raw {
        paymentMethods?: serializers.PaymentMethodResponse.Raw[] | null;
    }
}
