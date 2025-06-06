/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ContractInvoiceLineItemSchema } from "./ContractInvoiceLineItemSchema";

export const ContractInvoiceSchema: core.serialization.ObjectSchema<
    serializers.ContractInvoiceSchema.Raw,
    Mercoa.ContractInvoiceSchema
> = core.serialization.object({
    lineItems: core.serialization.list(ContractInvoiceLineItemSchema),
});

export declare namespace ContractInvoiceSchema {
    export interface Raw {
        lineItems: ContractInvoiceLineItemSchema.Raw[];
    }
}
