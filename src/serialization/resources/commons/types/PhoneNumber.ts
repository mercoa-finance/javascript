/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const PhoneNumber: core.serialization.ObjectSchema<serializers.PhoneNumber.Raw, Mercoa.PhoneNumber> =
    core.serialization.object({
        countryCode: core.serialization.string(),
        number: core.serialization.string(),
    });

export declare namespace PhoneNumber {
    export interface Raw {
        countryCode: string;
        number: string;
    }
}
