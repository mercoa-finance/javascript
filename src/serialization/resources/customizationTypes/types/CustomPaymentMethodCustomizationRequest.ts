/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { GenericPaymentMethodCustomizationRequest } from "./GenericPaymentMethodCustomizationRequest";

export const CustomPaymentMethodCustomizationRequest: core.serialization.ObjectSchema<
    serializers.CustomPaymentMethodCustomizationRequest.Raw,
    Mercoa.CustomPaymentMethodCustomizationRequest
> = core.serialization
    .object({
        schemaId: core.serialization.string(),
    })
    .extend(GenericPaymentMethodCustomizationRequest);

export declare namespace CustomPaymentMethodCustomizationRequest {
    export interface Raw extends GenericPaymentMethodCustomizationRequest.Raw {
        schemaId: string;
    }
}
