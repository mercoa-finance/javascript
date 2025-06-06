/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { FullName } from "../../commons/types/FullName";
import { PhoneNumber } from "../../commons/types/PhoneNumber";
import { Address } from "../../commons/types/Address";

export const IndividualProfileResponse: core.serialization.ObjectSchema<
    serializers.IndividualProfileResponse.Raw,
    Mercoa.IndividualProfileResponse
> = core.serialization.object({
    email: core.serialization.string().optional(),
    name: FullName,
    phone: PhoneNumber.optional(),
    address: Address.optional(),
    birthDateProvided: core.serialization.boolean(),
    governmentIdProvided: core.serialization.property("governmentIDProvided", core.serialization.boolean()),
});

export declare namespace IndividualProfileResponse {
    export interface Raw {
        email?: string | null;
        name: FullName.Raw;
        phone?: PhoneNumber.Raw | null;
        address?: Address.Raw | null;
        birthDateProvided: boolean;
        governmentIDProvided: boolean;
    }
}
