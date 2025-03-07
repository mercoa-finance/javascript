/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentMethodBaseResponse } from "./PaymentMethodBaseResponse";

export const UtilityPaymentMethodResponse: core.serialization.ObjectSchema<
    serializers.UtilityPaymentMethodResponse.Raw,
    Mercoa.UtilityPaymentMethodResponse
> = core.serialization
    .object({
        utilityId: core.serialization.string(),
    })
    .extend(PaymentMethodBaseResponse);

export declare namespace UtilityPaymentMethodResponse {
    export interface Raw extends PaymentMethodBaseResponse.Raw {
        utilityId: string;
    }
}
