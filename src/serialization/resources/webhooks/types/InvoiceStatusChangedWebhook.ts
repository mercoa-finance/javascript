/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceWebhook } from "./InvoiceWebhook";

export const InvoiceStatusChangedWebhook: core.serialization.ObjectSchema<
    serializers.InvoiceStatusChangedWebhook.Raw,
    Mercoa.InvoiceStatusChangedWebhook
> = core.serialization
    .object({
        newStatus: core.serialization.string(),
        previousStatus: core.serialization.string(),
    })
    .extend(InvoiceWebhook);

export declare namespace InvoiceStatusChangedWebhook {
    interface Raw extends InvoiceWebhook.Raw {
        newStatus: string;
        previousStatus: string;
    }
}
