/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const BankDeliveryMethod: core.serialization.Schema<
    serializers.BankDeliveryMethod.Raw,
    Mercoa.BankDeliveryMethod
> = core.serialization.enum_(["ACH_STANDARD", "ACH_SAME_DAY", "ACH_ACCELERATED"]);

export declare namespace BankDeliveryMethod {
    type Raw = "ACH_STANDARD" | "ACH_SAME_DAY" | "ACH_ACCELERATED";
}
