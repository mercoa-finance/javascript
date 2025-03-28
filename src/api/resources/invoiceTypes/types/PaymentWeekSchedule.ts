/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         repeatOn: [Mercoa.DayOfWeek.Monday, Mercoa.DayOfWeek.Wednesday, Mercoa.DayOfWeek.Friday],
 *         ends: "2021-01-01T00:00:00Z"
 *     }
 */
export interface PaymentWeekSchedule extends Mercoa.PaymentScheduleBase {
    repeatOn: Mercoa.DayOfWeek[];
}
