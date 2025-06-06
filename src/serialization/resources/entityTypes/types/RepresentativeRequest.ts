/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { FullName } from "../../commons/types/FullName";
import { PhoneNumber } from "../../commons/types/PhoneNumber";
import { Address } from "../../commons/types/Address";
import { BirthDate } from "../../commons/types/BirthDate";
import { IndividualGovernmentId } from "../../commons/types/IndividualGovernmentId";
import { Responsibilities } from "./Responsibilities";

export const RepresentativeRequest: core.serialization.ObjectSchema<
    serializers.RepresentativeRequest.Raw,
    Mercoa.RepresentativeRequest
> = core.serialization.object({
    name: FullName,
    phone: PhoneNumber.optional(),
    email: core.serialization.string().optional(),
    address: Address,
    birthDate: BirthDate,
    governmentId: core.serialization.property("governmentID", IndividualGovernmentId),
    responsibilities: Responsibilities,
});

export declare namespace RepresentativeRequest {
    export interface Raw {
        name: FullName.Raw;
        phone?: PhoneNumber.Raw | null;
        email?: string | null;
        address: Address.Raw;
        birthDate: BirthDate.Raw;
        governmentID: IndividualGovernmentId.Raw;
        responsibilities: Responsibilities.Raw;
    }
}
