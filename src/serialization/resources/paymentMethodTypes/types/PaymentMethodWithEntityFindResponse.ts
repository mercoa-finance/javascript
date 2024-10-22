/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentMethodWithEntityResponse } from "./PaymentMethodWithEntityResponse";

export const PaymentMethodWithEntityFindResponse: core.serialization.ObjectSchema<
    serializers.PaymentMethodWithEntityFindResponse.Raw,
    Mercoa.PaymentMethodWithEntityFindResponse
> = core.serialization.object({
    count: core.serialization.number(),
    hasMore: core.serialization.boolean(),
    data: core.serialization.list(PaymentMethodWithEntityResponse),
});

export declare namespace PaymentMethodWithEntityFindResponse {
    interface Raw {
        count: number;
        hasMore: boolean;
        data: PaymentMethodWithEntityResponse.Raw[];
    }
}