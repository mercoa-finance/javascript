/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { OnboardingOptionRequest } from "./OnboardingOptionRequest";
import { CommonOnboardingOptionsRequest } from "./CommonOnboardingOptionsRequest";

export const BusinessOnboardingOptionsRequest: core.serialization.ObjectSchema<
    serializers.BusinessOnboardingOptionsRequest.Raw,
    Mercoa.BusinessOnboardingOptionsRequest
> = core.serialization
    .object({
        type: OnboardingOptionRequest.optional(),
        doingBusinessAs: OnboardingOptionRequest.optional(),
        ein: OnboardingOptionRequest.optional(),
        mcc: OnboardingOptionRequest.optional(),
        formationDate: OnboardingOptionRequest.optional(),
        website: OnboardingOptionRequest.optional(),
        description: OnboardingOptionRequest.optional(),
        representatives: OnboardingOptionRequest.optional(),
        logo: OnboardingOptionRequest.optional(),
        averageTransactionSize: OnboardingOptionRequest.optional(),
        averageMonthlyTransactionVolume: OnboardingOptionRequest.optional(),
        maxTransactionSize: OnboardingOptionRequest.optional(),
    })
    .extend(CommonOnboardingOptionsRequest);

export declare namespace BusinessOnboardingOptionsRequest {
    interface Raw extends CommonOnboardingOptionsRequest.Raw {
        type?: OnboardingOptionRequest.Raw | null;
        doingBusinessAs?: OnboardingOptionRequest.Raw | null;
        ein?: OnboardingOptionRequest.Raw | null;
        mcc?: OnboardingOptionRequest.Raw | null;
        formationDate?: OnboardingOptionRequest.Raw | null;
        website?: OnboardingOptionRequest.Raw | null;
        description?: OnboardingOptionRequest.Raw | null;
        representatives?: OnboardingOptionRequest.Raw | null;
        logo?: OnboardingOptionRequest.Raw | null;
        averageTransactionSize?: OnboardingOptionRequest.Raw | null;
        averageMonthlyTransactionVolume?: OnboardingOptionRequest.Raw | null;
        maxTransactionSize?: OnboardingOptionRequest.Raw | null;
    }
}
