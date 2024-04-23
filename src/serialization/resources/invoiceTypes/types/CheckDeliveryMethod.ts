/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CheckDeliveryMethod: core.serialization.Schema<
    serializers.CheckDeliveryMethod.Raw,
    Mercoa.CheckDeliveryMethod
> = core.serialization.enum_(["PRINT", "MAIL"]);

export declare namespace CheckDeliveryMethod {
    type Raw = "PRINT" | "MAIL";
}
