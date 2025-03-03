/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const ActionStatus: core.serialization.Schema<serializers.ActionStatus.Raw, Mercoa.ActionStatus> =
    core.serialization.enum_(["SUGGESTED", "APPROVED", "COMPLETED"]);

export declare namespace ActionStatus {
    export type Raw = "SUGGESTED" | "APPROVED" | "COMPLETED";
}
