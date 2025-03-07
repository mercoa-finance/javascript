/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const CodatCompanyCreationRequest: core.serialization.ObjectSchema<
    serializers.entity.CodatCompanyCreationRequest.Raw,
    Mercoa.entity.CodatCompanyCreationRequest
> = core.serialization.object({
    companyId: core.serialization.string().optional(),
});

export declare namespace CodatCompanyCreationRequest {
    export interface Raw {
        companyId?: string | null;
    }
}
