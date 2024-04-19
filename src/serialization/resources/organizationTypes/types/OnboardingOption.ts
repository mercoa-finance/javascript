/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const OnboardingOption: core.serialization.ObjectSchema<
    serializers.OnboardingOption.Raw,
    Mercoa.OnboardingOption
> = core.serialization.object({
    show: core.serialization.boolean(),
    edit: core.serialization.boolean(),
    required: core.serialization.boolean(),
});

export declare namespace OnboardingOption {
    interface Raw {
        show: boolean;
        edit: boolean;
        required: boolean;
    }
}
