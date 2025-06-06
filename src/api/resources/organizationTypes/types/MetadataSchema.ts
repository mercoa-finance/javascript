/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface MetadataSchema {
    key: string;
    displayName: string;
    description?: string;
    /** Whether or not this field should be shown on line items. If true, this field will be shown on each line item. If false, the field will be shown on the invoice level. Defaults to false. */
    lineItem?: boolean;
    type: Mercoa.MetadataType;
    /** Whether or not multiple values are allowed for this field. Defaults to false. If true, the value will be a list of the specified type. */
    allowMultiple?: boolean;
    /** Validation rules are currently only supported for STRING types. */
    validationRules?: Mercoa.MetadataValidationRule;
    /** A list of conditional rules that determine whether or not this field should be shown. The field will only be shown if all of the conditions are met. If no conditions are specified, the field will always be shown. */
    showConditions?: Mercoa.MetadataShowConditions;
    /** A collection of rules that determine how this field is populated during OCR. */
    ocrRules?: Mercoa.MetadataOcrRules;
}
