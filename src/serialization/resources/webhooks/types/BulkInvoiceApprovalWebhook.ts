/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BulkInvoiceApprovalFromObjectResponse } from "../../invoiceTypes/types/BulkInvoiceApprovalFromObjectResponse";

export const BulkInvoiceApprovalWebhook: core.serialization.ObjectSchema<
    serializers.BulkInvoiceApprovalWebhook.Raw,
    Mercoa.BulkInvoiceApprovalWebhook
> = core.serialization.object({
    eventType: core.serialization.string(),
    data: core.serialization.list(BulkInvoiceApprovalFromObjectResponse),
});

export declare namespace BulkInvoiceApprovalWebhook {
    export interface Raw {
        eventType: string;
        data: BulkInvoiceApprovalFromObjectResponse.Raw[];
    }
}
