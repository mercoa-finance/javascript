/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const ColorSchemeRequest: core.serialization.ObjectSchema<
    serializers.ColorSchemeRequest.Raw,
    Mercoa.ColorSchemeRequest
> = core.serialization.object({
    primaryColor: core.serialization.string().optional(),
    secondaryColor: core.serialization.string().optional(),
});

export declare namespace ColorSchemeRequest {
    interface Raw {
        primaryColor?: string | null;
        secondaryColor?: string | null;
    }
}
