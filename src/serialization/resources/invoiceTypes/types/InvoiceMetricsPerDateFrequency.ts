/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const InvoiceMetricsPerDateFrequency: core.serialization.Schema<
    serializers.InvoiceMetricsPerDateFrequency.Raw,
    Mercoa.InvoiceMetricsPerDateFrequency
> = core.serialization.enum_(["DAILY", "WEEKLY", "MONTHLY", "YEARLY"]);

export declare namespace InvoiceMetricsPerDateFrequency {
    type Raw = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
}
