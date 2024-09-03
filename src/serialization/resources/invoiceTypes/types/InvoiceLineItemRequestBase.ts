/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { CurrencyCode } from "../../paymentMethodTypes/types/CurrencyCode";
import { InvoiceLineItemCategory } from "./InvoiceLineItemCategory";

export const InvoiceLineItemRequestBase: core.serialization.ObjectSchema<
    serializers.InvoiceLineItemRequestBase.Raw,
    Mercoa.InvoiceLineItemRequestBase
> = core.serialization.object({
    currency: CurrencyCode.optional(),
    name: core.serialization.string().optional(),
    quantity: core.serialization.number().optional(),
    unitPrice: core.serialization.number().optional(),
    category: InvoiceLineItemCategory.optional(),
    serviceStartDate: core.serialization.date().optional(),
    serviceEndDate: core.serialization.date().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    glAccountId: core.serialization.string().optional(),
});

export declare namespace InvoiceLineItemRequestBase {
    interface Raw {
        currency?: CurrencyCode.Raw | null;
        name?: string | null;
        quantity?: number | null;
        unitPrice?: number | null;
        category?: InvoiceLineItemCategory.Raw | null;
        serviceStartDate?: string | null;
        serviceEndDate?: string | null;
        metadata?: Record<string, string> | null;
        glAccountId?: string | null;
    }
}
