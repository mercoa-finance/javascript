/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentMethodsRequest } from "./PaymentMethodsRequest";
import { EmailProviderRequest } from "./EmailProviderRequest";
import { ExternalAccountingSystemProviderRequest } from "./ExternalAccountingSystemProviderRequest";
import { ColorSchemeRequest } from "./ColorSchemeRequest";
import { OnboardingOptionsRequest } from "./OnboardingOptionsRequest";
import { MetadataSchema } from "./MetadataSchema";
import { NotificationEmailTemplateRequest } from "./NotificationEmailTemplateRequest";
import { RolePermissionRequest } from "./RolePermissionRequest";
import { Permission } from "./Permission";

export const OrganizationRequest: core.serialization.ObjectSchema<
    serializers.OrganizationRequest.Raw,
    Mercoa.OrganizationRequest
> = core.serialization.object({
    name: core.serialization.string().optional(),
    logo: core.serialization.string().optional(),
    websiteUrl: core.serialization.string().optional(),
    supportEmail: core.serialization.string().optional(),
    paymentMethods: PaymentMethodsRequest.optional(),
    emailProvider: EmailProviderRequest.optional(),
    externalAccountingSystemProvider: ExternalAccountingSystemProviderRequest.optional(),
    colorScheme: ColorSchemeRequest.optional(),
    payeeOnboardingOptions: OnboardingOptionsRequest.optional(),
    payorOnboardingOptions: OnboardingOptionsRequest.optional(),
    metadataSchema: core.serialization.list(MetadataSchema).optional(),
    notificationEmailTemplate: NotificationEmailTemplateRequest.optional(),
    customDomains: core.serialization.list(core.serialization.string()).optional(),
    rolePermissions: RolePermissionRequest.optional(),
});

export declare namespace OrganizationRequest {
    export interface Raw {
        name?: string | null;
        logo?: string | null;
        websiteUrl?: string | null;
        supportEmail?: string | null;
        paymentMethods?: PaymentMethodsRequest.Raw | null;
        emailProvider?: EmailProviderRequest.Raw | null;
        externalAccountingSystemProvider?: ExternalAccountingSystemProviderRequest.Raw | null;
        colorScheme?: ColorSchemeRequest.Raw | null;
        payeeOnboardingOptions?: OnboardingOptionsRequest.Raw | null;
        payorOnboardingOptions?: OnboardingOptionsRequest.Raw | null;
        metadataSchema?: MetadataSchema.Raw[] | null;
        notificationEmailTemplate?: NotificationEmailTemplateRequest.Raw | null;
        customDomains?: string[] | null;
        rolePermissions?: RolePermissionRequest.Raw | null;
    }
}
