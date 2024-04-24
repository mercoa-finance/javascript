/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const InvoiceMetricsPerDateGroupBy: core.serialization.Schema<
    serializers.InvoiceMetricsPerDateGroupBy.Raw,
    Mercoa.InvoiceMetricsPerDateGroupBy
> = core.serialization.enum_(["CREATION_DATE", "DUE_DATE", "INVOICE_DATE", "DEDUCTION_DATE"]);

export declare namespace InvoiceMetricsPerDateGroupBy {
    type Raw = "CREATION_DATE" | "DUE_DATE" | "INVOICE_DATE" | "DEDUCTION_DATE";
}