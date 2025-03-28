/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { CheckDeliveryMethod } from "./CheckDeliveryMethod";

export const CheckPaymentDestinationOptions: core.serialization.ObjectSchema<
    serializers.CheckPaymentDestinationOptions.Raw,
    Mercoa.CheckPaymentDestinationOptions
> = core.serialization.object({
    delivery: CheckDeliveryMethod.optional(),
    printDescription: core.serialization.boolean().optional(),
});

export declare namespace CheckPaymentDestinationOptions {
    export interface Raw {
        delivery?: CheckDeliveryMethod.Raw | null;
        printDescription?: boolean | null;
    }
}
