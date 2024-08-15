/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         repeatOnDay: 10,
 *         repeatOnMonth: 1,
 *         ends: "2021-01-01T00:00:00Z"
 *     }
 */
export interface PaymentYearSchedule extends Mercoa.PaymentScheduleBase {
    /** Day of the month to repeat on (1-31). */
    repeatOnDay: number;
    /** Month to repeat on (1-12). */
    repeatOnMonth: number;
}
