/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { CustomPaymentMethodSchemaFieldType } from "./CustomPaymentMethodSchemaFieldType";

export const CustomPaymentMethodSchemaField: core.serialization.ObjectSchema<
    serializers.CustomPaymentMethodSchemaField.Raw,
    Mercoa.CustomPaymentMethodSchemaField
> = core.serialization.object({
    name: core.serialization.string(),
    displayName: core.serialization.string().optional(),
    type: CustomPaymentMethodSchemaFieldType,
    optional: core.serialization.boolean(),
    useAsAccountName: core.serialization.boolean().optional(),
    useAsAccountNumber: core.serialization.boolean().optional(),
    options: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace CustomPaymentMethodSchemaField {
    export interface Raw {
        name: string;
        displayName?: string | null;
        type: CustomPaymentMethodSchemaFieldType.Raw;
        optional: boolean;
        useAsAccountName?: boolean | null;
        useAsAccountNumber?: boolean | null;
        options?: string[] | null;
    }
}
