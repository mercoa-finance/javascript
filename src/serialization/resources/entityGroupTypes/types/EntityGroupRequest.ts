/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "../../entityTypes/types/EntityId";

export const EntityGroupRequest: core.serialization.ObjectSchema<
    serializers.EntityGroupRequest.Raw,
    Mercoa.EntityGroupRequest
> = core.serialization.object({
    entityIds: core.serialization.list(EntityId),
});

export declare namespace EntityGroupRequest {
    interface Raw {
        entityIds: EntityId.Raw[];
    }
}
