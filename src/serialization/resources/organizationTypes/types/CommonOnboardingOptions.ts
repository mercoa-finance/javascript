/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { OnboardingOption } from "./OnboardingOption";

export const CommonOnboardingOptions: core.serialization.ObjectSchema<
    serializers.CommonOnboardingOptions.Raw,
    Mercoa.CommonOnboardingOptions
> = core.serialization.object({
    termsOfService: OnboardingOption,
    email: OnboardingOption,
    name: OnboardingOption,
    address: OnboardingOption,
    phone: OnboardingOption,
    tenNinetyNine: OnboardingOption,
    w9: OnboardingOption,
});

export declare namespace CommonOnboardingOptions {
    interface Raw {
        termsOfService: OnboardingOption.Raw;
        email: OnboardingOption.Raw;
        name: OnboardingOption.Raw;
        address: OnboardingOption.Raw;
        phone: OnboardingOption.Raw;
        tenNinetyNine: OnboardingOption.Raw;
        w9: OnboardingOption.Raw;
    }
}
