/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const EntityUserRequest: core.serialization.ObjectSchema<
    serializers.EntityUserRequest.Raw,
    Mercoa.EntityUserRequest
> = core.serialization.object({
    foreignId: core.serialization.string().optional(),
    email: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    roles: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace EntityUserRequest {
    interface Raw {
        foreignId?: string | null;
        email?: string | null;
        name?: string | null;
        roles?: string[] | null;
    }
}
