/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { OnboardingOptionRequest } from "./OnboardingOptionRequest";
import { CommonOnboardingOptionsRequest } from "./CommonOnboardingOptionsRequest";

export const IndividualOnboardingOptionsRequest: core.serialization.ObjectSchema<
    serializers.IndividualOnboardingOptionsRequest.Raw,
    Mercoa.IndividualOnboardingOptionsRequest
> = core.serialization
    .object({
        dateOfBirth: OnboardingOptionRequest.optional(),
        ssn: OnboardingOptionRequest.optional(),
    })
    .extend(CommonOnboardingOptionsRequest);

export declare namespace IndividualOnboardingOptionsRequest {
    export interface Raw extends CommonOnboardingOptionsRequest.Raw {
        dateOfBirth?: OnboardingOptionRequest.Raw | null;
        ssn?: OnboardingOptionRequest.Raw | null;
    }
}
