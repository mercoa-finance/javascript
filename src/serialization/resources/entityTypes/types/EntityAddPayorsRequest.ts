/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "./EntityId";
import { CounterpartyCustomizationRequest } from "./CounterpartyCustomizationRequest";

export const EntityAddPayorsRequest: core.serialization.ObjectSchema<
    serializers.EntityAddPayorsRequest.Raw,
    Mercoa.EntityAddPayorsRequest
> = core.serialization.object({
    payors: core.serialization.list(EntityId),
    customizations: core.serialization.list(CounterpartyCustomizationRequest).optional(),
});

export declare namespace EntityAddPayorsRequest {
    export interface Raw {
        payors: EntityId.Raw[];
        customizations?: CounterpartyCustomizationRequest.Raw[] | null;
    }
}
