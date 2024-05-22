/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const MetadataRegexValidationRule: core.serialization.ObjectSchema<
    serializers.MetadataRegexValidationRule.Raw,
    Mercoa.MetadataRegexValidationRule
> = core.serialization.object({
    regex: core.serialization.string(),
    errorMessage: core.serialization.string(),
});

export declare namespace MetadataRegexValidationRule {
    interface Raw {
        regex: string;
        errorMessage: string;
    }
}
