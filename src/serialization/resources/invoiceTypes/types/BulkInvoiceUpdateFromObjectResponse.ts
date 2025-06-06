/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceId } from "./InvoiceId";

export const BulkInvoiceUpdateFromObjectResponse: core.serialization.ObjectSchema<
    serializers.BulkInvoiceUpdateFromObjectResponse.Raw,
    Mercoa.BulkInvoiceUpdateFromObjectResponse
> = core.serialization.object({
    id: InvoiceId.optional(),
    foreignId: core.serialization.string().optional(),
    error: core.serialization.string().optional(),
});

export declare namespace BulkInvoiceUpdateFromObjectResponse {
    export interface Raw {
        id?: InvoiceId.Raw | null;
        foreignId?: string | null;
        error?: string | null;
    }
}
