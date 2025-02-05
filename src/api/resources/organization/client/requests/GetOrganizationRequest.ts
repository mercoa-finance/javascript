/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface GetOrganizationRequest {
    /**
     * include supported payment methods in response
     */
    paymentMethods?: boolean;
    /**
     * include email provider info in response
     */
    emailProvider?: boolean;
    /**
     * include external accounting system provider info in response
     */
    externalAccountingSystemProvider?: boolean;
    /**
     * include color scheme info in response
     */
    colorScheme?: boolean;
    /**
     * include payee onboarding options in response
     */
    payeeOnboardingOptions?: boolean;
    /**
     * include payor onboarding options in response
     */
    payorOnboardingOptions?: boolean;
    /**
     * include metadata schema in response
     */
    metadataSchema?: boolean;
    /**
     * include notification-email-template in response
     */
    notificationEmailTemplate?: boolean;
    /**
     * include role permission config in response
     */
    rolePermissionConfig?: boolean;
    /**
     * include custom domains in response
     */
    customDomains?: boolean;
}
