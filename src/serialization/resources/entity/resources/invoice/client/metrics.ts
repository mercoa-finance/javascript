/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InvoiceMetricsResponse } from "../../../../invoiceTypes/types/InvoiceMetricsResponse";

export const Response: core.serialization.Schema<
    serializers.entity.invoice.metrics.Response.Raw,
    Mercoa.InvoiceMetricsResponse[]
> = core.serialization.list(InvoiceMetricsResponse);

export declare namespace Response {
    export type Raw = InvoiceMetricsResponse.Raw[];
}
