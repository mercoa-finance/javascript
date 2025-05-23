/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BusinessProfileRequest } from "./BusinessProfileRequest";
import { IndividualProfileRequest } from "./IndividualProfileRequest";

export const ProfileRequest: core.serialization.ObjectSchema<serializers.ProfileRequest.Raw, Mercoa.ProfileRequest> =
    core.serialization.object({
        business: BusinessProfileRequest.optional(),
        individual: IndividualProfileRequest.optional(),
    });

export declare namespace ProfileRequest {
    export interface Raw {
        business?: BusinessProfileRequest.Raw | null;
        individual?: IndividualProfileRequest.Raw | null;
    }
}
