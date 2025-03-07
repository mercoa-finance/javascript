/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceNotificationConfigurationRequest } from "./InvoiceNotificationConfigurationRequest";

export const NotificationConfigurationRequest: core.serialization.Schema<
    serializers.NotificationConfigurationRequest.Raw,
    Mercoa.NotificationConfigurationRequest
> = core.serialization
    .union("notificationType", {
        invoice: InvoiceNotificationConfigurationRequest,
    })
    .transform<Mercoa.NotificationConfigurationRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace NotificationConfigurationRequest {
    export type Raw = NotificationConfigurationRequest.Invoice;

    export interface Invoice extends InvoiceNotificationConfigurationRequest.Raw {
        notificationType: "invoice";
    }
}
