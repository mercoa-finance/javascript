/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentRailMarkupType } from "./PaymentRailMarkupType";

export const PaymentRailMarkup: core.serialization.ObjectSchema<
    serializers.PaymentRailMarkup.Raw,
    Mercoa.PaymentRailMarkup
> = core.serialization.object({
    type: PaymentRailMarkupType,
    amount: core.serialization.number(),
});

export declare namespace PaymentRailMarkup {
    interface Raw {
        type: PaymentRailMarkupType.Raw;
        amount: number;
    }
}
