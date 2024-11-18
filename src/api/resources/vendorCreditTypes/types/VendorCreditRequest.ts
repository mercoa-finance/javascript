/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         totalAmount: 100,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         note: "This is a note"
 *     }
 */
export interface VendorCreditRequest {
    /** Total amount of the vendor credit in major units */
    totalAmount: number;
    /** Currency code for the amount. Defaults to USD. */
    currency: Mercoa.CurrencyCode;
    /** An optional note to attach to the vendor credit */
    note?: string;
}