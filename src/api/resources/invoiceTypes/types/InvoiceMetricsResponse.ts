/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         totalAmount: 1000,
 *         totalCount: 10,
 *         averageAmount: 100,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         dates: {
 *             "2021-01-01T00:00:00Z": {
 *                 date: "2021-01-01T00:00:00Z",
 *                 totalAmount: 100,
 *                 totalCount: 1,
 *                 averageAmount: 100,
 *                 currency: Mercoa.CurrencyCode.Usd
 *             },
 *             "2021-01-02T00:00:00Z": {
 *                 date: "2021-01-02T00:00:00Z",
 *                 totalAmount: 200,
 *                 totalCount: 2,
 *                 averageAmount: 100,
 *                 currency: Mercoa.CurrencyCode.Usd
 *             },
 *             "2021-01-03T00:00:00Z": {
 *                 date: "2021-01-03T00:00:00Z",
 *                 totalAmount: 400,
 *                 totalCount: 2,
 *                 averageAmount: 200,
 *                 currency: Mercoa.CurrencyCode.Usd
 *             }
 *         }
 *     }
 */
export interface InvoiceMetricsResponse {
    /** If groupBy is provided, this will be the group by value. */
    group?: Record<string, string>[];
    totalAmount: number;
    totalCount: number;
    averageAmount: number;
    currency: Mercoa.CurrencyCode;
    dates?: Record<string, Mercoa.InvoiceMetricsPerDateResponse>;
}
