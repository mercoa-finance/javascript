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
        bankAccount: core.serialization.lazyObject(async () => (await import("../../..")).BankAccountUpdateRequest),
        card: core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodBaseRequest),
        check: core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodBaseRequest),
        offPlatform: core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodBaseRequest),
    })
    .transform<Mercoa.PaymentMethodUpdateRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace PaymentMethodUpdateRequest {
    type Raw =
        | PaymentMethodUpdateRequest.Custom
        | PaymentMethodUpdateRequest.BankAccount
        | PaymentMethodUpdateRequest.Card
        | PaymentMethodUpdateRequest.Check
        | PaymentMethodUpdateRequest.OffPlatform;

    interface Custom extends serializers.CustomPaymentMethodUpdateRequest.Raw {
        type: "custom";
    }

    interface BankAccount extends serializers.BankAccountUpdateRequest.Raw {
        type: "bankAccount";
    }

    interface Card extends serializers.PaymentMethodBaseRequest.Raw {
        type: "card";
    }

    interface Check extends serializers.PaymentMethodBaseRequest.Raw {
        type: "check";
    }

    interface OffPlatform extends serializers.PaymentMethodBaseRequest.Raw {
        type: "offPlatform";
    }
}
