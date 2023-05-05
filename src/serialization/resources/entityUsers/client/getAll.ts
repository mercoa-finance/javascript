/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.entityUsers.getAll.Response.Raw,
    Mercoa.EntityUserResponse[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).EntityUserResponse));

export declare namespace Response {
    type Raw = serializers.EntityUserResponse.Raw[];
}
