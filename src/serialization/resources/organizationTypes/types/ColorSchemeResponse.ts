/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const ColorSchemeResponse: core.serialization.ObjectSchema<
    serializers.ColorSchemeResponse.Raw,
    Mercoa.ColorSchemeResponse
> = core.serialization.object({
    primaryColor: core.serialization.string().optional(),
    secondaryColor: core.serialization.string().optional(),
    logoBackgroundColor: core.serialization.string().optional(),
    roundedCorners: core.serialization.number().optional(),
});

export declare namespace ColorSchemeResponse {
    interface Raw {
        primaryColor?: string | null;
        secondaryColor?: string | null;
        logoBackgroundColor?: string | null;
        roundedCorners?: number | null;
    }
}
