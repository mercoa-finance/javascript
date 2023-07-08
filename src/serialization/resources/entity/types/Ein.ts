/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const Ein: core.serialization.ObjectSchema<serializers.entity.Ein.Raw, Mercoa.entity.Ein> =
    core.serialization.object({
        number: core.serialization.string(),
    });

export declare namespace Ein {
    interface Raw {
        number: string;
    }
}
