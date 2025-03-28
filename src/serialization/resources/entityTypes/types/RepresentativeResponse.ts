/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { RepresentativeId } from "./RepresentativeId";
import { FullName } from "../../commons/types/FullName";
import { PhoneNumber } from "../../commons/types/PhoneNumber";
import { Address } from "../../commons/types/Address";
import { Responsibilities } from "./Responsibilities";

export const RepresentativeResponse: core.serialization.ObjectSchema<
    serializers.RepresentativeResponse.Raw,
    Mercoa.RepresentativeResponse
> = core.serialization.object({
    id: RepresentativeId,
    name: FullName,
    phone: PhoneNumber.optional(),
    email: core.serialization.string().optional(),
    address: Address,
    birthDateProvided: core.serialization.boolean(),
    governmentIdProvided: core.serialization.property("governmentIDProvided", core.serialization.boolean()),
    responsibilities: Responsibilities,
    createdOn: core.serialization.date(),
    updatedOn: core.serialization.date(),
    disabledOn: core.serialization.date().optional(),
});

export declare namespace RepresentativeResponse {
    export interface Raw {
        id: RepresentativeId.Raw;
        name: FullName.Raw;
        phone?: PhoneNumber.Raw | null;
        email?: string | null;
        address: Address.Raw;
        birthDateProvided: boolean;
        governmentIDProvided: boolean;
        responsibilities: Responsibilities.Raw;
        createdOn: string;
        updatedOn: string;
        disabledOn?: string | null;
    }
}
