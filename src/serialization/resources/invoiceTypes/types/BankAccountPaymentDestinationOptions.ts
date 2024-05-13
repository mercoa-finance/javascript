/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BankDeliveryMethod } from "./BankDeliveryMethod";

export const BankAccountPaymentDestinationOptions: core.serialization.ObjectSchema<
    serializers.BankAccountPaymentDestinationOptions.Raw,
    Mercoa.BankAccountPaymentDestinationOptions
> = core.serialization.object({
    delivery: BankDeliveryMethod.optional(),
});

export declare namespace BankAccountPaymentDestinationOptions {
    interface Raw {
        delivery?: BankDeliveryMethod.Raw | null;
    }
}
