/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const EntityGroupId: core.serialization.Schema<serializers.EntityGroupId.Raw, Mercoa.EntityGroupId> =
    core.serialization.string();

export declare namespace EntityGroupId {
    type Raw = string;
}