/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         estimatedProcessingDate: new Date("2024-01-02T00:00:00.000Z"),
 *         businessDays: 3,
 *         estimatedProcessingTime: 3,
 *         estimatedSettlementDate: new Date("2024-01-05T00:00:00.000Z")
 *     }
 */
export interface CalculatePaymentTimingResponse {
    /** Estimated date the payment will be or was processed. */
    estimatedProcessingDate: Date;
    /** Number of business days between the estimated processing date and the estimated settlement date. This does not take into account bank holidays or weekends. */
    businessDays: number;
    /** Estimated payment time in days. This time takes into account bank holidays and weekends. */
    estimatedProcessingTime: number;
    /** Estimated date the payment will be or was settled. This is the same as the request's deductionDate plus the paymentTiming. */
    estimatedSettlementDate: Date;
}
