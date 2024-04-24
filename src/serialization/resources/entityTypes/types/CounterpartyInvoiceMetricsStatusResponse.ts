/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CounterpartyInvoiceMetricsStatusResponse: core.serialization.ObjectSchema<
    serializers.CounterpartyInvoiceMetricsStatusResponse.Raw,
    Mercoa.CounterpartyInvoiceMetricsStatusResponse
> = core.serialization.object({
    status: core.serialization.lazy(async () => (await import("../../..")).InvoiceStatus),
    totalInvoices: core.serialization.number(),
    totalAmount: core.serialization.number(),
});

export declare namespace CounterpartyInvoiceMetricsStatusResponse {
    interface Raw {
        status: serializers.InvoiceStatus.Raw;
        totalInvoices: number;
        totalAmount: number;
    }
}
