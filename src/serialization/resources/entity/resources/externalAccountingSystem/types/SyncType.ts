/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const SyncType: core.serialization.Schema<serializers.entity.SyncType.Raw, Mercoa.entity.SyncType> =
    core.serialization.enum_(["none", "push", "pull", "both"]);

export declare namespace SyncType {
    type Raw = "none" | "push" | "pull" | "both";
}