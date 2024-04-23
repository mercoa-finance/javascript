/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BusinessProfileResponse: core.serialization.ObjectSchema<
    serializers.BusinessProfileResponse.Raw,
    Mercoa.BusinessProfileResponse
> = core.serialization.object({
    email: core.serialization.string().optional(),
    legalBusinessName: core.serialization.string(),
    businessType: core.serialization.lazy(async () => (await import("../../..")).BusinessType).optional(),
    phone: core.serialization.lazyObject(async () => (await import("../../..")).PhoneNumber).optional(),
    doingBusinessAs: core.serialization.string().optional(),
    website: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    address: core.serialization.lazyObject(async () => (await import("../../..")).Address).optional(),
    ownersProvided: core.serialization.boolean().optional(),
    taxIdProvided: core.serialization.property("taxIDProvided", core.serialization.boolean()),
});

export declare namespace BusinessProfileResponse {
    interface Raw {
        email?: string | null;
        legalBusinessName: string;
        businessType?: serializers.BusinessType.Raw | null;
        phone?: serializers.PhoneNumber.Raw | null;
        doingBusinessAs?: string | null;
        website?: string | null;
        description?: string | null;
        address?: serializers.Address.Raw | null;
        ownersProvided?: boolean | null;
        taxIDProvided: boolean;
    }
}
