/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface ProcessPaymentGatewayFailedResponse {
    /** The job ID of the payment gateway processing job */
    jobId: string;
    /** The error that occurred during the payment gateway processing job */
    errorType: Mercoa.PaymentGatewayError;
    /** The error message that occurred during the payment gateway processing job */
    errorMessage?: string;
}
