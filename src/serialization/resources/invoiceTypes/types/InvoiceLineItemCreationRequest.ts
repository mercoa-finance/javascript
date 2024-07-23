/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceLineItemRequestBase } from "./InvoiceLineItemRequestBase";

export const InvoiceLineItemCreationRequest: core.serialization.ObjectSchema<
    serializers.InvoiceLineItemCreationRequest.Raw,
    Mercoa.InvoiceLineItemCreationRequest
> = core.serialization
    .object({
        amount: core.serialization.number(),
        description: core.serialization.string(),
    })
    .extend(InvoiceLineItemRequestBase);

export declare namespace InvoiceLineItemCreationRequest {
    interface Raw extends InvoiceLineItemRequestBase.Raw {
        amount: number;
        description: string;
    }
}
