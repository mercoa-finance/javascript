/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const EntityHidePayeesRequest: core.serialization.ObjectSchema<
    serializers.EntityHidePayeesRequest.Raw,
    Mercoa.EntityHidePayeesRequest
> = core.serialization.object({
    payees: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).EntityId)),
});

export declare namespace EntityHidePayeesRequest {
    interface Raw {
        payees: serializers.EntityId.Raw[];
    }
}
