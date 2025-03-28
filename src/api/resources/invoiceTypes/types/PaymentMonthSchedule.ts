/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         repeatOnDay: 10,
 *         ends: "2021-01-01T00:00:00Z"
 *     }
 */
export interface PaymentMonthSchedule extends Mercoa.PaymentScheduleBase {
    /** deprecated. will be removed in the future and will always be 0. */
    dayOffset?: number;
    /** Day of the month to repeat on. Positive values (1-31): Represent the day of the month counting from the start (e.g., 10 is the 10th day of the month). Negative values (-1 to -31): Represent the day of the month counting backward from the end (e.g., -1 is the last day of the month, -2 is the second-to-last day). */
    repeatOnDay: number;
}
