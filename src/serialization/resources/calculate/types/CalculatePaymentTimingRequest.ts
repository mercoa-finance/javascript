/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentMethodId } from "../../paymentMethodTypes/types/PaymentMethodId";
import { PaymentDestinationOptions } from "../../invoiceTypes/types/PaymentDestinationOptions";

export const CalculatePaymentTimingRequest: core.serialization.ObjectSchema<
    serializers.CalculatePaymentTimingRequest.Raw,
    Mercoa.CalculatePaymentTimingRequest
> = core.serialization.object({
    estimatedDeductionDate: core.serialization.date().optional(),
    processedAt: core.serialization.date().optional(),
    paymentSourceId: PaymentMethodId,
    paymentDestinationId: PaymentMethodId,
    paymentDestinationOptions: PaymentDestinationOptions.optional(),
});

export declare namespace CalculatePaymentTimingRequest {
    interface Raw {
        estimatedDeductionDate?: string | null;
        processedAt?: string | null;
        paymentSourceId: PaymentMethodId.Raw;
        paymentDestinationId: PaymentMethodId.Raw;
        paymentDestinationOptions?: PaymentDestinationOptions.Raw | null;
    }
}
