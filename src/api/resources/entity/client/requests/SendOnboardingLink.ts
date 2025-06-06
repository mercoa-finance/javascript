/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../index";

/**
 * @example
 *     {
 *         type: "PAYEE"
 *     }
 */
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
    /**
     * If true, the onboarding link will redirect to the vendor/customer portal if the entity is already onboarded. If false, the onboarding link will not redirect to the portal. The default is false.
     */
    redirectToPortal?: boolean;
    /**
     * The options for the vendor portal.
     */
    vendorPortalOptions?: Mercoa.VendorPortalOptions;
}
