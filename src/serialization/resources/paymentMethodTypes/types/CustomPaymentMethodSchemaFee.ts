/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { CustomPaymentMethodFeeType } from "./CustomPaymentMethodFeeType";

export const CustomPaymentMethodSchemaFee: core.serialization.ObjectSchema<
    serializers.CustomPaymentMethodSchemaFee.Raw,
    Mercoa.CustomPaymentMethodSchemaFee
> = core.serialization.object({
    type: CustomPaymentMethodFeeType,
    amount: core.serialization.number().optional(),
});

export declare namespace CustomPaymentMethodSchemaFee {
    interface Raw {
        type: CustomPaymentMethodFeeType.Raw;
        amount?: number | null;
    }
}
