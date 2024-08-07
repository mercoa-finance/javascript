/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { OnboardingOption } from "./OnboardingOption";

export const BusinessOnboardingOptions: core.serialization.ObjectSchema<
    serializers.BusinessOnboardingOptions.Raw,
    Mercoa.BusinessOnboardingOptions
> = core.serialization.object({
    termsOfService: OnboardingOption,
    email: OnboardingOption,
    name: OnboardingOption,
    type: OnboardingOption,
    doingBusinessAs: OnboardingOption,
    ein: OnboardingOption,
    mcc: OnboardingOption,
    address: OnboardingOption,
    phone: OnboardingOption,
    formationDate: OnboardingOption,
    website: OnboardingOption,
    description: OnboardingOption,
    representatives: OnboardingOption,
    logo: OnboardingOption,
});

export declare namespace BusinessOnboardingOptions {
    interface Raw {
        termsOfService: OnboardingOption.Raw;
        email: OnboardingOption.Raw;
        name: OnboardingOption.Raw;
        type: OnboardingOption.Raw;
        doingBusinessAs: OnboardingOption.Raw;
        ein: OnboardingOption.Raw;
        mcc: OnboardingOption.Raw;
        address: OnboardingOption.Raw;
        phone: OnboardingOption.Raw;
        formationDate: OnboardingOption.Raw;
        website: OnboardingOption.Raw;
        description: OnboardingOption.Raw;
        representatives: OnboardingOption.Raw;
        logo: OnboardingOption.Raw;
    }
}
