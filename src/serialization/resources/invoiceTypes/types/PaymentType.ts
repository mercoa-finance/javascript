/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const PaymentType: core.serialization.Schema<serializers.PaymentType.Raw, Mercoa.PaymentType> =
    core.serialization.enum_(["oneTime", "recurring"]);

export declare namespace PaymentType {
    export type Raw = "oneTime" | "recurring";
}
