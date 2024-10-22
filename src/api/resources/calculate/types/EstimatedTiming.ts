/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         estimatedDeductionDate: "2024-01-02T00:00:00Z",
 *         paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         paymentDestinationId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769"
 *     }
 */
export interface EstimatedTiming {
    /** Date the payment is scheduled to be deducted from the payer's account. Use this field if the payment has not yet been deducted. */
    estimatedDeductionDate?: Date;
    /** Date the payment was processed. Use this field if the payment has already been deducted. */
    processedAt?: Date;
    /** ID of payment source. */
    paymentSourceId: Mercoa.PaymentMethodId;
    /** ID of payment destination. */
    paymentDestinationId: Mercoa.PaymentMethodId;
    /** Options for the payment destination. Depending on the payment destination, this may include things such as check delivery method. */
    paymentDestinationOptions?: Mercoa.PaymentDestinationOptions;
}