/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentMethodResponse } from "./PaymentMethodResponse";
import { EntityResponse } from "../../entityTypes/types/EntityResponse";

export const PaymentMethodWithEntityResponse: core.serialization.ObjectSchema<
    serializers.PaymentMethodWithEntityResponse.Raw,
    Mercoa.PaymentMethodWithEntityResponse
> = core.serialization.object({
    paymentMethod: PaymentMethodResponse,
    entity: EntityResponse,
});

export declare namespace PaymentMethodWithEntityResponse {
    export interface Raw {
        paymentMethod: PaymentMethodResponse.Raw;
        entity: EntityResponse.Raw;
    }
}
