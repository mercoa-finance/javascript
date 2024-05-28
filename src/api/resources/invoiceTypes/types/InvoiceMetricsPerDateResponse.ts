/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         date: new Date("2021-01-01T00:00:00.000Z"),
 *         totalAmount: 100,
 *         totalCount: 1,
 *         averageAmount: 100,
 *         currency: Mercoa.CurrencyCode.Usd
 *     }
 *
 * @example
 *     {
 *         date: new Date("2021-01-02T00:00:00.000Z"),
 *         totalAmount: 200,
 *         totalCount: 2,
 *         averageAmount: 100,
 *         currency: Mercoa.CurrencyCode.Usd
 *     }
 *
 * @example
 *     {
 *         date: new Date("2021-01-03T00:00:00.000Z"),
 *         totalAmount: 400,
 *         totalCount: 2,
 *         averageAmount: 200,
 *         currency: Mercoa.CurrencyCode.Usd
 *     }
 */
export interface InvoiceMetricsPerDateResponse {
    date: Date;
    totalAmount: number;
    totalCount: number;
    averageAmount: number;
    currency: Mercoa.CurrencyCode;
}
