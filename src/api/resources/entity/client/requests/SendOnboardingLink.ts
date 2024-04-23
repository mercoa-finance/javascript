/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../..";

export interface SendOnboardingLink {
    /**
     * The type of onboarding link to generate. If not provided, the default is payee. The onboarding options are determined by your organization's onboarding configuration.
     */
    type: Mercoa.EntityOnboardingLinkType;
    /**
     * Expressed in seconds or a string describing a time span. The default is 7 days.
     */
    expiresIn?: string;
    /**
     * The ID of the entity to connect to. If onboarding a payee, this should be the payor entity ID. If onboarding a payor, this should be the payee entity ID. If no connected entity ID is provided, the onboarding link will be for a standalone entity.
     */
    connectedEntityId?: Mercoa.EntityId;
}
