/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface CustomPaymentMethodSchemaField {
    name: string;
    displayName?: string;
    type: Mercoa.CustomPaymentMethodSchemaFieldType;
    /** Indicates whether this field is optional */
    optional: boolean;
    /** Indicates whether this field should be used as the name of the payment method. Only one field can be used as the name. Will set the accountName field of the payment method to the value of this field. */
    useAsAccountName?: boolean;
    /** Indicates whether this field should be used as the account number of the payment method. Only one field can be used as the account number. Will set the accountNumber field of the payment method to the value of this field. */
    useAsAccountNumber?: boolean;
    /** When type is 'select', provide options that can be selected */
    options?: string[];
}
