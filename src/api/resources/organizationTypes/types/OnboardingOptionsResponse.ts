/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface OnboardingOptionsResponse {
    enableBusiness: boolean;
    enableIndividual: boolean;
    business: Mercoa.BusinessOnboardingOptions;
    individual: Mercoa.IndividualOnboardingOptions;
}