/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CounterpartyResponse: core.serialization.ObjectSchema<
    serializers.CounterpartyResponse.Raw,
    Mercoa.CounterpartyResponse
> = core.serialization
    .object({
        paymentMethods: core.serialization.list(
            core.serialization.lazy(async () => (await import("../../..")).PaymentMethodResponse)
        ),
        counterpartyType: core.serialization.list(
            core.serialization.lazy(async () => (await import("../../..")).CounterpartyNetworkType)
        ),
        invoiceMetrics: core.serialization
            .lazyObject(async () => (await import("../../..")).CounterpartyInvoiceMetricsResponse)
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).EntityResponse));

export declare namespace CounterpartyResponse {
    interface Raw extends serializers.EntityResponse.Raw {
        paymentMethods: serializers.PaymentMethodResponse.Raw[];
        counterpartyType: serializers.CounterpartyNetworkType.Raw[];
        invoiceMetrics?: serializers.CounterpartyInvoiceMetricsResponse.Raw | null;
    }
}
