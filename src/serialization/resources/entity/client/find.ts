/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.entity.find.Response.Raw, Mercoa.EntityResponse[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).EntityResponse));

export declare namespace Response {
    type Raw = serializers.EntityResponse.Raw[];
}
