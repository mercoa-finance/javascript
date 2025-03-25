/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
 *         payToTheOrderOf: "John Doe",
 *         addressLine1: "123 Main St",
 *         addressLine2: "Apt 1",
 *         city: "New York",
 *         stateOrProvince: "NY",
 *         postalCode: "10001",
 *         country: "US",
 *         isDefaultSource: false,
 *         isDefaultDestination: true,
 *         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *         metadata: {},
 *         frozen: false,
 *         confirmedByEntity: true,
 *         createdAt: "2021-01-01T00:00:00Z",
 *         updatedAt: "2021-01-01T00:00:00Z"
 *     }
 */
export interface CheckResponse extends Mercoa.PaymentMethodBaseResponse {
    payToTheOrderOf: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    stateOrProvince: string;
    postalCode: string;
    country: string;
}
