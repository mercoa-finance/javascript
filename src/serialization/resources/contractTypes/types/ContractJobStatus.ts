/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const ContractJobStatus: core.serialization.Schema<serializers.ContractJobStatus.Raw, Mercoa.ContractJobStatus> =
    core.serialization.enum_(["pending", "success", "failed"]);

export declare namespace ContractJobStatus {
    export type Raw = "pending" | "success" | "failed";
}
