/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { OnboardingOptionResponse } from "./OnboardingOptionResponse";

export const CommonOnboardingOptionsResponse: core.serialization.ObjectSchema<
    serializers.CommonOnboardingOptionsResponse.Raw,
    Mercoa.CommonOnboardingOptionsResponse
> = core.serialization.object({
    termsOfService: OnboardingOptionResponse,
    email: OnboardingOptionResponse,
    name: OnboardingOptionResponse,
    address: OnboardingOptionResponse,
    phone: OnboardingOptionResponse,
    tenNinetyNine: OnboardingOptionResponse,
    w9: OnboardingOptionResponse,
    bankStatement: OnboardingOptionResponse,
});

export declare namespace CommonOnboardingOptionsResponse {
    export interface Raw {
        termsOfService: OnboardingOptionResponse.Raw;
        email: OnboardingOptionResponse.Raw;
        name: OnboardingOptionResponse.Raw;
        address: OnboardingOptionResponse.Raw;
        phone: OnboardingOptionResponse.Raw;
        tenNinetyNine: OnboardingOptionResponse.Raw;
        w9: OnboardingOptionResponse.Raw;
        bankStatement: OnboardingOptionResponse.Raw;
    }
}
