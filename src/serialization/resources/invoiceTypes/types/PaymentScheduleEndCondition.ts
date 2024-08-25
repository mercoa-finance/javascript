/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const PaymentScheduleEndCondition: core.serialization.Schema<
    serializers.PaymentScheduleEndCondition.Raw,
    Mercoa.PaymentScheduleEndCondition
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.date()]);

export declare namespace PaymentScheduleEndCondition {
    type Raw = number | string;
}
