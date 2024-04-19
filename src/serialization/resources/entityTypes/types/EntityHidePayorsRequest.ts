/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "./EntityId";

export const EntityHidePayorsRequest: core.serialization.ObjectSchema<
    serializers.EntityHidePayorsRequest.Raw,
    Mercoa.EntityHidePayorsRequest
> = core.serialization.object({
    payors: core.serialization.list(EntityId),
});

export declare namespace EntityHidePayorsRequest {
    interface Raw {
        payors: EntityId.Raw[];
    }
}
