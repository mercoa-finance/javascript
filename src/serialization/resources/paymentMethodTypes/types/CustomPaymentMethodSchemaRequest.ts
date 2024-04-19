/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { CurrencyCode } from "./CurrencyCode";
import { CustomPaymentMethodSchemaField } from "./CustomPaymentMethodSchemaField";

export const CustomPaymentMethodSchemaRequest: core.serialization.ObjectSchema<
    serializers.CustomPaymentMethodSchemaRequest.Raw,
    Mercoa.CustomPaymentMethodSchemaRequest
> = core.serialization.object({
    name: core.serialization.string(),
    isSource: core.serialization.boolean(),
    isDestination: core.serialization.boolean(),
    supportedCurrencies: core.serialization.list(CurrencyCode).optional(),
    fields: core.serialization.list(CustomPaymentMethodSchemaField),
});

export declare namespace CustomPaymentMethodSchemaRequest {
    interface Raw {
        name: string;
        isSource: boolean;
        isDestination: boolean;
        supportedCurrencies?: CurrencyCode.Raw[] | null;
        fields: CustomPaymentMethodSchemaField.Raw[];
    }
}
