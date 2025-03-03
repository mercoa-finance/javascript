/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "../../entityTypes/types/EntityId";

export const EntityMetadataUpdatedWebhook: core.serialization.ObjectSchema<
    serializers.EntityMetadataUpdatedWebhook.Raw,
    Mercoa.EntityMetadataUpdatedWebhook
> = core.serialization.object({
    eventType: core.serialization.string(),
    entityId: EntityId,
    foreignId: core.serialization.string().optional(),
    key: core.serialization.string(),
    value: core.serialization.list(core.serialization.string()),
});

export declare namespace EntityMetadataUpdatedWebhook {
    export interface Raw {
        eventType: string;
        entityId: EntityId.Raw;
        foreignId?: string | null;
        key: string;
        value: string[];
    }
}
