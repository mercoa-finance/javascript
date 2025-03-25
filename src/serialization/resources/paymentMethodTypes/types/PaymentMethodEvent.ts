/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PaymentMethodEventId } from "./PaymentMethodEventId";
import { PaymentMethodResponse } from "./PaymentMethodResponse";
import { EntityUserId } from "../../entityTypes/types/EntityUserId";
import { EntityId } from "../../entityTypes/types/EntityId";

export const PaymentMethodEvent: core.serialization.ObjectSchema<
    serializers.PaymentMethodEvent.Raw,
    Mercoa.PaymentMethodEvent
> = core.serialization.object({
    id: PaymentMethodEventId,
    data: PaymentMethodResponse,
    webhookIds: core.serialization.list(core.serialization.string()),
    userId: EntityUserId.optional(),
    updatedByEntityId: EntityId.optional(),
    createdAt: core.serialization.date(),
});

export declare namespace PaymentMethodEvent {
    export interface Raw {
        id: PaymentMethodEventId.Raw;
        data: PaymentMethodResponse.Raw;
        webhookIds: string[];
        userId?: EntityUserId.Raw | null;
        updatedByEntityId?: EntityId.Raw | null;
        createdAt: string;
    }
}
