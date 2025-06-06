/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const EntityGroupUpdateRequest: core.serialization.ObjectSchema<
    serializers.EntityGroupUpdateRequest.Raw,
    Mercoa.EntityGroupUpdateRequest
> = core.serialization.object({
    foreignId: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    emailToName: core.serialization.string().optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
});

export declare namespace EntityGroupUpdateRequest {
    export interface Raw {
        foreignId?: string | null;
        name?: string | null;
        emailToName?: string | null;
        metadata?: Record<string, string> | null;
    }
}
