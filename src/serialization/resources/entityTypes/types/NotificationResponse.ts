/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { NotificationId } from "./NotificationId";
import { InvoiceId } from "../../invoiceTypes/types/InvoiceId";
import { NotificationType } from "./NotificationType";

export const NotificationResponse: core.serialization.ObjectSchema<
    serializers.NotificationResponse.Raw,
    Mercoa.NotificationResponse
> = core.serialization.object({
    id: NotificationId,
    invoiceId: InvoiceId.optional(),
    type: NotificationType,
    createdAt: core.serialization.date(),
});

export declare namespace NotificationResponse {
    interface Raw {
        id: NotificationId.Raw;
        invoiceId?: InvoiceId.Raw | null;
        type: NotificationType.Raw;
        createdAt: string;
    }
}
