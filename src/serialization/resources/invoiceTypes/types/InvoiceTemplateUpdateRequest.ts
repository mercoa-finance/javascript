/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceLineItemUpdateRequest } from "./InvoiceLineItemUpdateRequest";
import { EntityId } from "../../entityTypes/types/EntityId";
import { InvoiceTemplateRequestBase } from "./InvoiceTemplateRequestBase";

export const InvoiceTemplateUpdateRequest: core.serialization.ObjectSchema<
    serializers.InvoiceTemplateUpdateRequest.Raw,
    Mercoa.InvoiceTemplateUpdateRequest
> = core.serialization
    .object({
        lineItems: core.serialization.list(InvoiceLineItemUpdateRequest).optional(),
        creatorEntityId: EntityId.optional(),
    })
    .extend(InvoiceTemplateRequestBase);

export declare namespace InvoiceTemplateUpdateRequest {
    export interface Raw extends InvoiceTemplateRequestBase.Raw {
        lineItems?: InvoiceLineItemUpdateRequest.Raw[] | null;
        creatorEntityId?: EntityId.Raw | null;
    }
}
