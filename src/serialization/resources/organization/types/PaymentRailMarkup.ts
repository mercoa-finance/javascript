/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const PaymentRailMarkup: core.serialization.ObjectSchema<
    serializers.PaymentRailMarkup.Raw,
    Mercoa.PaymentRailMarkup
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).PaymentRailMarkupType),
    amount: core.serialization.number(),
});

export declare namespace PaymentRailMarkup {
    interface Raw {
        type: serializers.PaymentRailMarkupType.Raw;
        amount: number;
    }
}
