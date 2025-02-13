/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { OnboardingOptionResponse } from "./OnboardingOptionResponse";
import { CommonOnboardingOptionsResponse } from "./CommonOnboardingOptionsResponse";

export const IndividualOnboardingOptionsResponse: core.serialization.ObjectSchema<
    serializers.IndividualOnboardingOptionsResponse.Raw,
    Mercoa.IndividualOnboardingOptionsResponse
> = core.serialization
    .object({
        dateOfBirth: OnboardingOptionResponse,
        ssn: OnboardingOptionResponse,
    })
    .extend(CommonOnboardingOptionsResponse);

export declare namespace IndividualOnboardingOptionsResponse {
    interface Raw extends CommonOnboardingOptionsResponse.Raw {
        dateOfBirth: OnboardingOptionResponse.Raw;
        ssn: OnboardingOptionResponse.Raw;
    }
}
