/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CardBaseResponse: core.serialization.ObjectSchema<
    serializers.CardBaseResponse.Raw,
    Mercoa.CardBaseResponse
> = core.serialization.object({
    id: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodId),
    cardType: core.serialization.lazy(async () => (await import("../../..")).CardType),
    cardBrand: core.serialization.lazy(async () => (await import("../../..")).CardBrand),
    lastFour: core.serialization.string(),
    expMonth: core.serialization.string(),
    expYear: core.serialization.string(),
    supportedCurrencies: core.serialization.list(
        core.serialization.lazy(async () => (await import("../../..")).CurrencyCode)
    ),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
});

export declare namespace CardBaseResponse {
    interface Raw {
        id: serializers.PaymentMethodId.Raw;
        cardType: serializers.CardType.Raw;
        cardBrand: serializers.CardBrand.Raw;
        lastFour: string;
        expMonth: string;
        expYear: string;
        supportedCurrencies: serializers.CurrencyCode.Raw[];
        createdAt: string;
        updatedAt: string;
    }
}
