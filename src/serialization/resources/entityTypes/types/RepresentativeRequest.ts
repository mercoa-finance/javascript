/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const RepresentativeRequest: core.serialization.ObjectSchema<
    serializers.RepresentativeRequest.Raw,
    Mercoa.RepresentativeRequest
> = core.serialization.object({
    name: core.serialization.lazyObject(async () => (await import("../../..")).FullName),
    phone: core.serialization.lazyObject(async () => (await import("../../..")).PhoneNumber),
    email: core.serialization.string(),
    address: core.serialization.lazyObject(async () => (await import("../../..")).Address),
    birthDate: core.serialization.lazyObject(async () => (await import("../../..")).BirthDate),
    governmentId: core.serialization.property(
        "governmentID",
        core.serialization.lazyObject(async () => (await import("../../..")).IndividualGovernmentId)
    ),
    responsibilities: core.serialization.lazyObject(async () => (await import("../../..")).Responsibilities),
});

export declare namespace RepresentativeRequest {
    interface Raw {
        name: serializers.FullName.Raw;
        phone: serializers.PhoneNumber.Raw;
        email: string;
        address: serializers.Address.Raw;
        birthDate: serializers.BirthDate.Raw;
        governmentID: serializers.IndividualGovernmentId.Raw;
        responsibilities: serializers.Responsibilities.Raw;
    }
}
