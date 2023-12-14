/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const InvoiceLineItemRequest: core.serialization.ObjectSchema<
    serializers.InvoiceLineItemRequest.Raw,
    Mercoa.InvoiceLineItemRequest
> = core.serialization.object({
    id: core.serialization.string().optional(),
    amount: core.serialization.number().optional(),
    currency: core.serialization.lazy(async () => (await import("../../..")).CurrencyCode).optional(),
    description: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    quantity: core.serialization.number().optional(),
    unitPrice: core.serialization.number().optional(),
    serviceStartDate: core.serialization.date().optional(),
    serviceEndDate: core.serialization.date().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    glAccountId: core.serialization.string().optional(),
});

export declare namespace InvoiceLineItemRequest {
    interface Raw {
        id?: string | null;
        amount?: number | null;
        currency?: serializers.CurrencyCode.Raw | null;
        description?: string | null;
        name?: string | null;
        quantity?: number | null;
        unitPrice?: number | null;
        serviceStartDate?: string | null;
        serviceEndDate?: string | null;
        metadata?: Record<string, string> | null;
        glAccountId?: string | null;
    }
}
