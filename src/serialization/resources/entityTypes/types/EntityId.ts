/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const EntityId: core.serialization.Schema<serializers.EntityId.Raw, Mercoa.EntityId> =
    core.serialization.string();

export declare namespace EntityId {
    type Raw = string;
}
