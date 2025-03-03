/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceLineItemCreationRequest } from "./InvoiceLineItemCreationRequest";
import { EntityId } from "../../entityTypes/types/EntityId";
import { InvoiceTemplateRequestBase } from "./InvoiceTemplateRequestBase";

export const InvoiceTemplateCreationRequest: core.serialization.ObjectSchema<
    serializers.InvoiceTemplateCreationRequest.Raw,
    Mercoa.InvoiceTemplateCreationRequest
> = core.serialization
    .object({
        lineItems: core.serialization.list(InvoiceLineItemCreationRequest).optional(),
        creatorEntityId: EntityId.optional(),
    })
    .extend(InvoiceTemplateRequestBase);

export declare namespace InvoiceTemplateCreationRequest {
    export interface Raw extends InvoiceTemplateRequestBase.Raw {
        lineItems?: InvoiceLineItemCreationRequest.Raw[] | null;
        creatorEntityId?: EntityId.Raw | null;
    }
}
