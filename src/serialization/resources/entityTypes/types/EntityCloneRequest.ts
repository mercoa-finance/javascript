/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "./EntityId";

export const EntityCloneRequest: core.serialization.ObjectSchema<
    serializers.EntityCloneRequest.Raw,
    Mercoa.EntityCloneRequest
> = core.serialization.object({
    createFromId: EntityId,
    foreignId: core.serialization.string().optional(),
    emailTo: core.serialization.string().optional(),
    emailToAlias: core.serialization.list(core.serialization.string()).optional(),
    logo: core.serialization.string().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace EntityCloneRequest {
    export interface Raw {
        createFromId: EntityId.Raw;
        foreignId?: string | null;
        emailTo?: string | null;
        emailToAlias?: string[] | null;
        logo?: string | null;
        metadata?: Record<string, string> | null;
    }
}
