/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const PercentageFee: core.serialization.ObjectSchema<serializers.PercentageFee.Raw, Mercoa.PercentageFee> =
    core.serialization.object({
        amount: core.serialization.number(),
    });

export declare namespace PercentageFee {
    interface Raw {
        amount: number;
    }
}
