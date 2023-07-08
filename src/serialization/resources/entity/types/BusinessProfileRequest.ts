/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BusinessProfileRequest: core.serialization.ObjectSchema<
    serializers.entity.BusinessProfileRequest.Raw,
    Mercoa.entity.BusinessProfileRequest
> = core.serialization.object({
    email: core.serialization.string().optional(),
    legalBusinessName: core.serialization.string(),
    businessType: core.serialization.lazy(async () => (await import("../../..")).entity.BusinessType).optional(),
    phone: core.serialization.lazyObject(async () => (await import("../../..")).PhoneNumber).optional(),
    doingBusinessAs: core.serialization.string().optional(),
    website: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    address: core.serialization.lazyObject(async () => (await import("../../..")).Address).optional(),
    ownersProvided: core.serialization.boolean().optional(),
    taxId: core.serialization.lazyObject(async () => (await import("../../..")).entity.TaxId).optional(),
});

export declare namespace BusinessProfileRequest {
    interface Raw {
        email?: string | null;
        legalBusinessName: string;
        businessType?: serializers.entity.BusinessType.Raw | null;
        phone?: serializers.PhoneNumber.Raw | null;
        doingBusinessAs?: string | null;
        website?: string | null;
        description?: string | null;
        address?: serializers.Address.Raw | null;
        ownersProvided?: boolean | null;
        taxId?: serializers.entity.TaxId.Raw | null;
    }
}
