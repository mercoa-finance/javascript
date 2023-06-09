/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const Itin: core.serialization.ObjectSchema<serializers.Itin.Raw, Mercoa.Itin> = core.serialization.object({
    full: core.serialization.string().optional(),
    lastFour: core.serialization.string(),
});

export declare namespace Itin {
    interface Raw {
        full?: string | null;
        lastFour: string;
    }
}
