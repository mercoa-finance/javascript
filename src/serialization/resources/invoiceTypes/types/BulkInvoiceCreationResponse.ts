/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BulkInvoiceCreationFromObjectResponse } from "./BulkInvoiceCreationFromObjectResponse";

export const BulkInvoiceCreationResponse: core.serialization.ObjectSchema<
    serializers.BulkInvoiceCreationResponse.Raw,
    Mercoa.BulkInvoiceCreationResponse
> = core.serialization.object({
    data: core.serialization.list(BulkInvoiceCreationFromObjectResponse),
});

export declare namespace BulkInvoiceCreationResponse {
    export interface Raw {
        data: BulkInvoiceCreationFromObjectResponse.Raw[];
    }
}
