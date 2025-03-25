/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EmailLogId } from "./EmailLogId";
import { EmailLogAttachment } from "./EmailLogAttachment";
import { InvoiceId } from "../../invoiceTypes/types/InvoiceId";

export const EmailLog: core.serialization.ObjectSchema<serializers.EmailLog.Raw, Mercoa.EmailLog> =
    core.serialization.object({
        id: EmailLogId,
        subject: core.serialization.string(),
        from: core.serialization.string(),
        to: core.serialization.string(),
        htmlBody: core.serialization.string(),
        textBody: core.serialization.string(),
        attachment: EmailLogAttachment.optional(),
        createdAt: core.serialization.date(),
        invoiceId: InvoiceId.optional(),
    });

export declare namespace EmailLog {
    export interface Raw {
        id: EmailLogId.Raw;
        subject: string;
        from: string;
        to: string;
        htmlBody: string;
        textBody: string;
        attachment?: EmailLogAttachment.Raw | null;
        createdAt: string;
        invoiceId?: InvoiceId.Raw | null;
    }
}
