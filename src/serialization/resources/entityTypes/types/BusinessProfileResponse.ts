/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BusinessType } from "./BusinessType";
import { PhoneNumber } from "../../commons/types/PhoneNumber";
import { Address } from "../../commons/types/Address";
import { IndustryCodes } from "./IndustryCodes";

export const BusinessProfileResponse: core.serialization.ObjectSchema<
    serializers.BusinessProfileResponse.Raw,
    Mercoa.BusinessProfileResponse
> = core.serialization.object({
    email: core.serialization.string().optional(),
    legalBusinessName: core.serialization.string(),
    businessType: BusinessType.optional(),
    phone: PhoneNumber.optional(),
    doingBusinessAs: core.serialization.string().optional(),
    website: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    address: Address.optional(),
    ownersProvided: core.serialization.boolean().optional(),
    taxIdProvided: core.serialization.property("taxIDProvided", core.serialization.boolean()),
    industryCodes: IndustryCodes.optional(),
});

export declare namespace BusinessProfileResponse {
    interface Raw {
        email?: string | null;
        legalBusinessName: string;
        businessType?: BusinessType.Raw | null;
        phone?: PhoneNumber.Raw | null;
        doingBusinessAs?: string | null;
        website?: string | null;
        description?: string | null;
        address?: Address.Raw | null;
        ownersProvided?: boolean | null;
        taxIDProvided: boolean;
        industryCodes?: IndustryCodes.Raw | null;
    }
}
