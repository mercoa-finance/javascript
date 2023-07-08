/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface OrganizationResponse {
    id: Mercoa.OrganizationId;
    sandbox: boolean;
    name: string;
    logoUrl?: string;
    websiteUrl?: string;
    supportEmail?: string;
    paymentMethods?: Mercoa.PaymentMethodsResponse;
    emailProvider?: Mercoa.EmailProviderResponse;
    colorScheme?: Mercoa.ColorSchemeResponse;
}
