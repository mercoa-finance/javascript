/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CounterpartyInvoiceMetricsResponse: core.serialization.ObjectSchema<
    serializers.CounterpartyInvoiceMetricsResponse.Raw,
    Mercoa.CounterpartyInvoiceMetricsResponse
> = core.serialization.object({
    totalInvoices: core.serialization.number(),
    totalAmount: core.serialization.number(),
    statuses: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).CounterpartyInvoiceMetricsStatusResponse)
    ),
});

export declare namespace CounterpartyInvoiceMetricsResponse {
    interface Raw {
        totalInvoices: number;
        totalAmount: number;
        statuses: serializers.CounterpartyInvoiceMetricsStatusResponse.Raw[];
    }
}