/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ContractInvoiceSchema } from "./ContractInvoiceSchema";

export const ContractRecurrenceCreateRequest: core.serialization.ObjectSchema<
    serializers.ContractRecurrenceCreateRequest.Raw,
    Mercoa.ContractRecurrenceCreateRequest
> = core.serialization.object({
    rrule: core.serialization.string(),
    justification: core.serialization.string(),
    filteredContractSummary: core.serialization.string(),
    invoiceSchema: ContractInvoiceSchema,
});

export declare namespace ContractRecurrenceCreateRequest {
    export interface Raw {
        rrule: string;
        justification: string;
        filteredContractSummary: string;
        invoiceSchema: ContractInvoiceSchema.Raw;
    }
}
