/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EstimatedTiming } from "./EstimatedTiming";
import { InvoiceTiming } from "./InvoiceTiming";

export const CalculatePaymentTimingRequest: core.serialization.Schema<
    serializers.CalculatePaymentTimingRequest.Raw,
    Mercoa.CalculatePaymentTimingRequest
> = core.serialization.undiscriminatedUnion([EstimatedTiming, InvoiceTiming]);

export declare namespace CalculatePaymentTimingRequest {
    export type Raw = EstimatedTiming.Raw | InvoiceTiming.Raw;
}
