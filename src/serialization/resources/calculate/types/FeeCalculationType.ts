/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const FeeCalculationType: core.serialization.Schema<
    serializers.FeeCalculationType.Raw,
    Mercoa.FeeCalculationType
> = core.serialization.enum_(["PAYABLE", "RECEIVABLE"]);

export declare namespace FeeCalculationType {
    export type Raw = "PAYABLE" | "RECEIVABLE";
}
