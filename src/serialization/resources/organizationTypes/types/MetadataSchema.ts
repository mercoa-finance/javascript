/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const MetadataSchema: core.serialization.ObjectSchema<serializers.MetadataSchema.Raw, Mercoa.MetadataSchema> =
    core.serialization.object({
        key: core.serialization.string(),
        displayName: core.serialization.string(),
        description: core.serialization.string().optional(),
        type: core.serialization.lazy(async () => (await import("../../..")).MetadataType),
        allowMultiple: core.serialization.boolean().optional(),
        showConditions: core.serialization
            .lazyObject(async () => (await import("../../..")).MetadataShowConditions)
            .optional(),
    });

export declare namespace MetadataSchema {
    interface Raw {
        key: string;
        displayName: string;
        description?: string | null;
        type: serializers.MetadataType.Raw;
        allowMultiple?: boolean | null;
        showConditions?: serializers.MetadataShowConditions.Raw | null;
    }
}