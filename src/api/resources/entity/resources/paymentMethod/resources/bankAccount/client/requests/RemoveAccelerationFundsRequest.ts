/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../../../../index";

/**
 * @example
 *     {
 *         amount: 100,
 *         currency: "USD"
 *     }
 */
export interface RemoveAccelerationFundsRequest {
    /** The amount of the acceleration funds to remove. If the entered amount has more decimal places than the currency supports, trailing decimals will be truncated. */
    amount: number;
    /** The currency of the acceleration funds to remove. */
    currency: Mercoa.CurrencyCode;
}