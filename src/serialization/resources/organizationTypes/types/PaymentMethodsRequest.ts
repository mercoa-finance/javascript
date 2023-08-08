/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const PaymentMethodsRequest: core.serialization.ObjectSchema<
    serializers.PaymentMethodsRequest.Raw,
    Mercoa.PaymentMethodsRequest
> = core.serialization.object({
    payerPayments: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).PaymentRailRequest)
    ),
    backupDisbursements: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).PaymentRailRequest)
    ),
    vendorDisbursements: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).PaymentRailRequest)
    ),
});

export declare namespace PaymentMethodsRequest {
    interface Raw {
        payerPayments: serializers.PaymentRailRequest.Raw[];
        backupDisbursements: serializers.PaymentRailRequest.Raw[];
        vendorDisbursements: serializers.PaymentRailRequest.Raw[];
    }
}