/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BusinessProfileResponse } from "./BusinessProfileResponse";
import { IndividualProfileResponse } from "./IndividualProfileResponse";

export const ProfileResponse: core.serialization.ObjectSchema<serializers.ProfileResponse.Raw, Mercoa.ProfileResponse> =
    core.serialization.object({
        business: BusinessProfileResponse.optional(),
        individual: IndividualProfileResponse.optional(),
    });

export declare namespace ProfileResponse {
    export interface Raw {
        business?: BusinessProfileResponse.Raw | null;
        individual?: IndividualProfileResponse.Raw | null;
    }
}
