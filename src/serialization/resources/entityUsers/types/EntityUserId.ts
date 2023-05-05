/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const EntityUserId: core.serialization.Schema<serializers.EntityUserId.Raw, Mercoa.EntityUserId> =
    core.serialization.string();

export declare namespace EntityUserId {
    type Raw = string;
}
