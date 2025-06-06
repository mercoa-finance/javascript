/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceLineItemCreationRequest } from "./InvoiceLineItemCreationRequest";
import { EntityGroupId } from "../../entityGroupTypes/types/EntityGroupId";
import { InvoiceRequestBase } from "./InvoiceRequestBase";

export const InvoiceCreationWithEntityGroupRequest: core.serialization.ObjectSchema<
    serializers.InvoiceCreationWithEntityGroupRequest.Raw,
    Mercoa.InvoiceCreationWithEntityGroupRequest
> = core.serialization
    .object({
        lineItems: core.serialization.list(InvoiceLineItemCreationRequest).optional(),
        creatorEntityGroupId: EntityGroupId,
    })
    .extend(InvoiceRequestBase);

export declare namespace InvoiceCreationWithEntityGroupRequest {
    export interface Raw extends InvoiceRequestBase.Raw {
        lineItems?: InvoiceLineItemCreationRequest.Raw[] | null;
        creatorEntityGroupId: EntityGroupId.Raw;
    }
}
