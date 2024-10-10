/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "../../entityTypes/types/EntityId";
import { EntityIdOrBoolean } from "./EntityIdOrBoolean";

export const EntityGroupAddEntitiesRequest: core.serialization.ObjectSchema<
    serializers.EntityGroupAddEntitiesRequest.Raw,
    Mercoa.EntityGroupAddEntitiesRequest
> = core.serialization.object({
    entityIds: core.serialization.list(EntityId),
    copyUsersFrom: EntityIdOrBoolean.optional(),
});

export declare namespace EntityGroupAddEntitiesRequest {
    interface Raw {
        entityIds: EntityId.Raw[];
        copyUsersFrom?: EntityIdOrBoolean.Raw | null;
    }
}
