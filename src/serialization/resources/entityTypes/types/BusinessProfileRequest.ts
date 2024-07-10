/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BusinessType } from "./BusinessType";
import { PhoneNumber } from "../../commons/types/PhoneNumber";
import { Address } from "../../commons/types/Address";
import { TaxId } from "./TaxId";
import { IndustryCodes } from "./IndustryCodes";

export const BusinessProfileRequest: core.serialization.ObjectSchema<
    serializers.BusinessProfileRequest.Raw,
    Mercoa.BusinessProfileRequest
> = core.serialization.object({
    email: core.serialization.string().optional(),
    legalBusinessName: core.serialization.string(),
    businessType: BusinessType.optional(),
    phone: PhoneNumber.optional(),
    doingBusinessAs: core.serialization.string().optional(),
    website: core.serialization.string().optional(),
    description: core.serialization.string().optional(),
    address: Address.optional(),
    taxId: TaxId.optional(),
    formationDate: core.serialization.date().optional(),
    industryCodes: IndustryCodes.optional(),
});

export declare namespace BusinessProfileRequest {
    interface Raw {
        email?: string | null;
        legalBusinessName: string;
        businessType?: BusinessType.Raw | null;
        phone?: PhoneNumber.Raw | null;
        doingBusinessAs?: string | null;
        website?: string | null;
        description?: string | null;
        address?: Address.Raw | null;
        taxId?: TaxId.Raw | null;
        formationDate?: string | null;
        industryCodes?: IndustryCodes.Raw | null;
    }
}
