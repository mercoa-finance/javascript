/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface IndividualProfileRequest {
    email?: string;
    name: Mercoa.FullName;
    phone?: Mercoa.PhoneNumber;
    address?: Mercoa.Address;
    birthDate?: Mercoa.BirthDate;
    governmentId?: Mercoa.IndividualGovernmentId;
}