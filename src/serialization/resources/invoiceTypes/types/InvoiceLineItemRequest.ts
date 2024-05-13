/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { CurrencyCode } from "../../paymentMethodTypes/types/CurrencyCode";

export const InvoiceLineItemRequest: core.serialization.ObjectSchema<
    serializers.InvoiceLineItemRequest.Raw,
    Mercoa.InvoiceLineItemRequest
> = core.serialization.object({
    id: core.serialization.string().optional(),
    amount: core.serialization.number(),
    currency: CurrencyCode.optional(),
    description: core.serialization.string(),
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
        amount: number;
        currency?: CurrencyCode.Raw | null;
        description: string;
        name?: string | null;
        quantity?: number | null;
        unitPrice?: number | null;
        serviceStartDate?: string | null;
        serviceEndDate?: string | null;
        metadata?: Record<string, string> | null;
        glAccountId?: string | null;
    }
}
