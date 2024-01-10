/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CustomPaymentMethodRequest: core.serialization.ObjectSchema<
    serializers.CustomPaymentMethodRequest.Raw,
    Mercoa.CustomPaymentMethodRequest
> = core.serialization
    .object({
        foreignId: core.serialization.string(),
        accountName: core.serialization.string().optional(),
        accountNumber: core.serialization.string().optional(),
        schemaId: core.serialization.lazy(async () => (await import("../../..")).CustomPaymentMethodSchemaId),
        data: core.serialization.record(core.serialization.string(), core.serialization.string()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).PaymentMethodBaseRequest));

export declare namespace CustomPaymentMethodRequest {
    interface Raw extends serializers.PaymentMethodBaseRequest.Raw {
        foreignId: string;
        accountName?: string | null;
        accountNumber?: string | null;
        schemaId: serializers.CustomPaymentMethodSchemaId.Raw;
        data: Record<string, string>;
    }
}
