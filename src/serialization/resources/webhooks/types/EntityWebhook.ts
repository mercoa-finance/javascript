/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityResponse } from "../../entityTypes/types/EntityResponse";
import { EntityId } from "../../entityTypes/types/EntityId";
import { EntityUserResponse } from "../../entityTypes/types/EntityUserResponse";

export const EntityWebhook: core.serialization.ObjectSchema<serializers.EntityWebhook.Raw, Mercoa.EntityWebhook> =
    core.serialization.object({
        eventType: core.serialization.string(),
        entity: EntityResponse,
        updatedByEntityId: EntityId,
        user: EntityUserResponse.optional(),
    });

export declare namespace EntityWebhook {
    export interface Raw {
        eventType: string;
        entity: EntityResponse.Raw;
        updatedByEntityId: EntityId.Raw;
        user?: EntityUserResponse.Raw | null;
    }
}
