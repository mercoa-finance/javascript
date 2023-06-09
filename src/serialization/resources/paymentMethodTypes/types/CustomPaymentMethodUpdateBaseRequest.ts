/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CustomPaymentMethodUpdateBaseRequest: core.serialization.ObjectSchema<
    serializers.CustomPaymentMethodUpdateBaseRequest.Raw,
    Mercoa.CustomPaymentMethodUpdateBaseRequest
> = core.serialization.object({
    foreignId: core.serialization.string().optional(),
    accountName: core.serialization.string().optional(),
    accountNumber: core.serialization.string().optional(),
    schemaId: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodSchemaId).optional(),
    data: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace CustomPaymentMethodUpdateBaseRequest {
    interface Raw {
        foreignId?: string | null;
        accountName?: string | null;
        accountNumber?: string | null;
        schemaId?: serializers.PaymentMethodSchemaId.Raw | null;
        data?: Record<string, string> | null;
    }
}
