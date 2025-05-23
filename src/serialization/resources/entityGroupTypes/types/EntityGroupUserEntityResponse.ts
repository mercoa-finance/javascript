/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityUserId } from "../../entityTypes/types/EntityUserId";
import { EntityGroupUserEntityRequest } from "./EntityGroupUserEntityRequest";

export const EntityGroupUserEntityResponse: core.serialization.ObjectSchema<
    serializers.EntityGroupUserEntityResponse.Raw,
    Mercoa.EntityGroupUserEntityResponse
> = core.serialization
    .object({
        id: EntityUserId,
    })
    .extend(EntityGroupUserEntityRequest);

export declare namespace EntityGroupUserEntityResponse {
    export interface Raw extends EntityGroupUserEntityRequest.Raw {
        id: EntityUserId.Raw;
    }
}
