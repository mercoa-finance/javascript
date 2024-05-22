/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "../../entityTypes/types/EntityId";
import { InvoiceRequestBase } from "./InvoiceRequestBase";

export const InvoiceCreationRequest: core.serialization.ObjectSchema<
    serializers.InvoiceCreationRequest.Raw,
    Mercoa.InvoiceCreationRequest
> = core.serialization
    .object({
        creatorEntityId: EntityId,
    })
    .extend(InvoiceRequestBase);

export declare namespace InvoiceCreationRequest {
    interface Raw extends InvoiceRequestBase.Raw {
        creatorEntityId: EntityId.Raw;
    }
}
