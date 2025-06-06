/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { DayOfWeek } from "./DayOfWeek";
import { PaymentScheduleBase } from "./PaymentScheduleBase";

export const PaymentWeekSchedule: core.serialization.ObjectSchema<
    serializers.PaymentWeekSchedule.Raw,
    Mercoa.PaymentWeekSchedule
> = core.serialization
    .object({
        repeatOn: core.serialization.list(DayOfWeek),
    })
    .extend(PaymentScheduleBase);

export declare namespace PaymentWeekSchedule {
    export interface Raw extends PaymentScheduleBase.Raw {
        repeatOn: DayOfWeek.Raw[];
    }
}
