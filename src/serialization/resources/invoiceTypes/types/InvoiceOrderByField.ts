/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const InvoiceOrderByField: core.serialization.Schema<
    serializers.InvoiceOrderByField.Raw,
    Mercoa.InvoiceOrderByField
> = core.serialization.enum_(["AMOUNT", "DUE_DATE", "CREATED_AT", "INVOICE_NUMBER", "VENDOR_NAME", "PAYER_NAME"]);

export declare namespace InvoiceOrderByField {
    type Raw = "AMOUNT" | "DUE_DATE" | "CREATED_AT" | "INVOICE_NUMBER" | "VENDOR_NAME" | "PAYER_NAME";
}
