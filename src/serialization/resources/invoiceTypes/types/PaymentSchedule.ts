/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentScheduleBase } from "./PaymentScheduleBase";
import { PaymentWeekSchedule } from "./PaymentWeekSchedule";
import { PaymentMonthSchedule } from "./PaymentMonthSchedule";
import { PaymentYearSchedule } from "./PaymentYearSchedule";

export const PaymentSchedule: core.serialization.Schema<serializers.PaymentSchedule.Raw, Mercoa.PaymentSchedule> =
    core.serialization
        .union("type", {
            oneTime: PaymentScheduleBase,
            daily: PaymentScheduleBase,
            weekly: PaymentWeekSchedule,
            monthly: PaymentMonthSchedule,
            yearly: PaymentYearSchedule,
        })
        .transform<Mercoa.PaymentSchedule>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace PaymentSchedule {
    type Raw =
        | PaymentSchedule.OneTime
        | PaymentSchedule.Daily
        | PaymentSchedule.Weekly
        | PaymentSchedule.Monthly
        | PaymentSchedule.Yearly;

    interface OneTime extends PaymentScheduleBase.Raw {
        type: "oneTime";
    }

    interface Daily extends PaymentScheduleBase.Raw {
        type: "daily";
    }

    interface Weekly extends PaymentWeekSchedule.Raw {
        type: "weekly";
    }

    interface Monthly extends PaymentMonthSchedule.Raw {
        type: "monthly";
    }

    interface Yearly extends PaymentYearSchedule.Raw {
        type: "yearly";
    }
}