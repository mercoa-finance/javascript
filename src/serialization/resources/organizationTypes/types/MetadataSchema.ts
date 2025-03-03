/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { MetadataType } from "./MetadataType";
import { MetadataValidationRule } from "./MetadataValidationRule";
import { MetadataShowConditions } from "./MetadataShowConditions";

export const MetadataSchema: core.serialization.ObjectSchema<serializers.MetadataSchema.Raw, Mercoa.MetadataSchema> =
    core.serialization.object({
        key: core.serialization.string(),
        displayName: core.serialization.string(),
        description: core.serialization.string().optional(),
        lineItem: core.serialization.boolean().optional(),
        type: MetadataType,
        allowMultiple: core.serialization.boolean().optional(),
        validationRules: MetadataValidationRule.optional(),
        showConditions: MetadataShowConditions.optional(),
    });

export declare namespace MetadataSchema {
    export interface Raw {
        key: string;
        displayName: string;
        description?: string | null;
        lineItem?: boolean | null;
        type: MetadataType.Raw;
        allowMultiple?: boolean | null;
        validationRules?: MetadataValidationRule.Raw | null;
        showConditions?: MetadataShowConditions.Raw | null;
    }
}
