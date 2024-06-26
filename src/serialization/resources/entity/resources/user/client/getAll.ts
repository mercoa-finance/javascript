/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { EntityUserResponse } from "../../../../entityTypes/types/EntityUserResponse";

export const Response: core.serialization.Schema<
    serializers.entity.user.getAll.Response.Raw,
    Mercoa.EntityUserResponse[]
> = core.serialization.list(EntityUserResponse);

export declare namespace Response {
    type Raw = EntityUserResponse.Raw[];
}
