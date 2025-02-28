/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         amount: 100,
 *         paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         paymentDestinationId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769"
 *     }
 */
export interface CalculateFeesRequest {
    /** Total amount in major units. If the entered amount has more decimal places than the currency supports, trailing decimals will be truncated. */
    amount: number;
    /** Currency code for the amount. Defaults to USD. */
    currency?: Mercoa.CurrencyCode;
    /** ID of the entity creating the invoice. If not provided, the fees will be calculated with the default pricing for the organization. */
    creatorEntityId?: Mercoa.EntityId;
    /** ID of payment source. */
    paymentSourceId: Mercoa.PaymentMethodId;
    /** ID of payment destination. */
    paymentDestinationId: Mercoa.PaymentMethodId;
    /** Options for the payment destination. Depending on the payment destination, this may include things such as check delivery method. */
    paymentDestinationOptions?: Mercoa.PaymentDestinationOptions;
    /** Type of payment to calculate fees for. Defaults to PAYABLE (Accounts Payable). */
    type?: Mercoa.FeeCalculationType;
}
