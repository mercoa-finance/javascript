/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface OrganizationRequest {
    name?: string;
    logo?: string;
    websiteUrl?: string;
    supportEmail?: string;
    paymentMethods?: Mercoa.PaymentMethodsRequest;
    emailProvider?: Mercoa.EmailProviderRequest;
    externalAccountingSystemProvider?: Mercoa.ExternalAccountingSystemProviderRequest;
    colorScheme?: Mercoa.ColorSchemeRequest;
    payeeOnboardingOptions?: Mercoa.OnboardingOptionsRequest;
    payorOnboardingOptions?: Mercoa.OnboardingOptionsRequest;
    metadataSchema?: Mercoa.MetadataSchema[];
    notificationEmailTemplate?: Mercoa.NotificationEmailTemplateRequest;
}
