/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const PaymentMethodUpdateRequest: core.serialization.Schema<
    serializers.PaymentMethodUpdateRequest.Raw,
    Mercoa.PaymentMethodUpdateRequest
> = core.serialization
    .union("type", {
        custom: core.serialization.lazyObject(async () => (await import("../../..")).CustomPaymentMethodUpdateRequest),
    })
    .transform<Mercoa.PaymentMethodUpdateRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace PaymentMethodUpdateRequest {
    type Raw = PaymentMethodUpdateRequest.Custom;

    interface Custom extends serializers.CustomPaymentMethodUpdateRequest.Raw {
        type: "custom";
    }
}