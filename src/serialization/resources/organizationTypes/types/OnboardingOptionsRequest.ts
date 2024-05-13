/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BusinessOnboardingOptions } from "./BusinessOnboardingOptions";
import { IndividualOnboardingOptions } from "./IndividualOnboardingOptions";

export const OnboardingOptionsRequest: core.serialization.ObjectSchema<
    serializers.OnboardingOptionsRequest.Raw,
    Mercoa.OnboardingOptionsRequest
> = core.serialization.object({
    enableBusiness: core.serialization.boolean().optional(),
    enableIndividual: core.serialization.boolean().optional(),
    paymentMethod: core.serialization.boolean().optional(),
    business: BusinessOnboardingOptions.optional(),
    individual: IndividualOnboardingOptions.optional(),
});

export declare namespace OnboardingOptionsRequest {
    interface Raw {
        enableBusiness?: boolean | null;
        enableIndividual?: boolean | null;
        paymentMethod?: boolean | null;
        business?: BusinessOnboardingOptions.Raw | null;
        individual?: IndividualOnboardingOptions.Raw | null;
    }
}
