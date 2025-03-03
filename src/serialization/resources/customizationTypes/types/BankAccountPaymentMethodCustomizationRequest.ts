/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BankDeliveryMethod } from "../../invoiceTypes/types/BankDeliveryMethod";
import { GenericPaymentMethodCustomizationRequest } from "./GenericPaymentMethodCustomizationRequest";

export const BankAccountPaymentMethodCustomizationRequest: core.serialization.ObjectSchema<
    serializers.BankAccountPaymentMethodCustomizationRequest.Raw,
    Mercoa.BankAccountPaymentMethodCustomizationRequest
> = core.serialization
    .object({
        defaultDeliveryMethod: BankDeliveryMethod.optional(),
    })
    .extend(GenericPaymentMethodCustomizationRequest);

export declare namespace BankAccountPaymentMethodCustomizationRequest {
    export interface Raw extends GenericPaymentMethodCustomizationRequest.Raw {
        defaultDeliveryMethod?: BankDeliveryMethod.Raw | null;
    }
}
