/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceUpdateRequest } from "./InvoiceUpdateRequest";
import { EntityUserId } from "../../entityTypes/types/EntityUserId";
import { InvoiceStatus } from "./InvoiceStatus";

export const InvoiceEvent: core.serialization.ObjectSchema<serializers.InvoiceEvent.Raw, Mercoa.InvoiceEvent> =
    core.serialization.object({
        webhookIds: core.serialization.list(core.serialization.string()),
        data: InvoiceUpdateRequest,
        userId: EntityUserId.optional(),
        createdAt: core.serialization.date(),
        ipAddress: core.serialization.string().optional(),
        status: InvoiceStatus.optional(),
    });

export declare namespace InvoiceEvent {
    export interface Raw {
        webhookIds: string[];
        data: InvoiceUpdateRequest.Raw;
        userId?: EntityUserId.Raw | null;
        createdAt: string;
        ipAddress?: string | null;
        status?: InvoiceStatus.Raw | null;
    }
}
