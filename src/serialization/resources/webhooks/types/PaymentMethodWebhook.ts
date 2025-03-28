/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "../../entityTypes/types/EntityId";
import { PaymentMethodResponse } from "../../paymentMethodTypes/types/PaymentMethodResponse";
import { EntityResponse } from "../../entityTypes/types/EntityResponse";
import { EntityUserResponse } from "../../entityTypes/types/EntityUserResponse";

export const PaymentMethodWebhook: core.serialization.ObjectSchema<
    serializers.PaymentMethodWebhook.Raw,
    Mercoa.PaymentMethodWebhook
> = core.serialization.object({
    eventType: core.serialization.string(),
    entityId: EntityId,
    updatedByEntityId: EntityId,
    paymentMethod: PaymentMethodResponse,
    entity: EntityResponse,
    user: EntityUserResponse.optional(),
});

export declare namespace PaymentMethodWebhook {
    export interface Raw {
        eventType: string;
        entityId: EntityId.Raw;
        updatedByEntityId: EntityId.Raw;
        paymentMethod: PaymentMethodResponse.Raw;
        entity: EntityResponse.Raw;
        user?: EntityUserResponse.Raw | null;
    }
}
