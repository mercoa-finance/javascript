/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityGroupUserEntityRequest } from "./EntityGroupUserEntityRequest";

export const EntityGroupUserRequest: core.serialization.ObjectSchema<
    serializers.EntityGroupUserRequest.Raw,
    Mercoa.EntityGroupUserRequest
> = core.serialization.object({
    foreignId: core.serialization.string(),
    email: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    entities: core.serialization.list(EntityGroupUserEntityRequest).optional(),
});

export declare namespace EntityGroupUserRequest {
    export interface Raw {
        foreignId: string;
        email?: string | null;
        name?: string | null;
        entities?: EntityGroupUserEntityRequest.Raw[] | null;
    }
}
