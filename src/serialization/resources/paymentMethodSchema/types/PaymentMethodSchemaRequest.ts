/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const PaymentMethodSchemaRequest: core.serialization.ObjectSchema<
    serializers.PaymentMethodSchemaRequest.Raw,
    Mercoa.PaymentMethodSchemaRequest
> = core.serialization.object({
    name: core.serialization.string(),
    isSource: core.serialization.boolean(),
    isDestination: core.serialization.boolean(),
    supportedCurrencies: core.serialization
        .list(core.serialization.lazy(async () => (await import("../../..")).CurrencyCode))
        .optional(),
    fields: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodSchemaField)
    ),
});

export declare namespace PaymentMethodSchemaRequest {
    interface Raw {
        name: string;
        isSource: boolean;
        isDestination: boolean;
        supportedCurrencies?: serializers.CurrencyCode.Raw[] | null;
        fields: serializers.PaymentMethodSchemaField.Raw[];
    }
}
