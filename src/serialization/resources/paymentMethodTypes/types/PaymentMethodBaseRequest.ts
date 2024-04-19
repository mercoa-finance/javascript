/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const PaymentMethodBaseRequest: core.serialization.ObjectSchema<
    serializers.PaymentMethodBaseRequest.Raw,
    Mercoa.PaymentMethodBaseRequest
> = core.serialization.object({
    defaultSource: core.serialization.boolean().optional(),
    defaultDestination: core.serialization.boolean().optional(),
});

export declare namespace PaymentMethodBaseRequest {
    interface Raw {
        defaultSource?: boolean | null;
        defaultDestination?: boolean | null;
    }
}
