/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const IndividualProfileResponse: core.serialization.ObjectSchema<
    serializers.IndividualProfileResponse.Raw,
    Mercoa.IndividualProfileResponse
> = core.serialization.object({
    email: core.serialization.string().optional(),
    name: core.serialization.lazyObject(async () => (await import("../../..")).FullName),
    phone: core.serialization.lazyObject(async () => (await import("../../..")).PhoneNumber).optional(),
    address: core.serialization.lazyObject(async () => (await import("../../..")).Address).optional(),
    birthDateProvided: core.serialization.boolean(),
    governmentIdProvided: core.serialization.property("governmentIDProvided", core.serialization.boolean()),
});

export declare namespace IndividualProfileResponse {
    interface Raw {
        email?: string | null;
        name: serializers.FullName.Raw;
        phone?: serializers.PhoneNumber.Raw | null;
        address?: serializers.Address.Raw | null;
        birthDateProvided: boolean;
        governmentIDProvided: boolean;
    }
}
