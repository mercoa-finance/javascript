/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const MetadataTrigger: core.serialization.ObjectSchema<serializers.MetadataTrigger.Raw, Mercoa.MetadataTrigger> =
    core.serialization.object({
        key: core.serialization.string(),
        value: core.serialization.string(),
    });

export declare namespace MetadataTrigger {
    export interface Raw {
        key: string;
        value: string;
    }
}
