/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentScheduleEndCondition } from "./PaymentScheduleEndCondition";

export const PaymentScheduleBase: core.serialization.ObjectSchema<
    serializers.PaymentScheduleBase.Raw,
    Mercoa.PaymentScheduleBase
> = core.serialization.object({
    repeatEvery: core.serialization.number().optional(),
    ends: PaymentScheduleEndCondition.optional(),
});

export declare namespace PaymentScheduleBase {
    export interface Raw {
        repeatEvery?: number | null;
        ends?: PaymentScheduleEndCondition.Raw | null;
    }
}
