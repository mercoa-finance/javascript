/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const TransactionStatus: core.serialization.Schema<serializers.TransactionStatus.Raw, Mercoa.TransactionStatus> =
    core.serialization.enum_(["CREATED", "PENDING", "COMPLETED", "FAILED", "REVERSED", "QUEUED", "CANCELED"]);

export declare namespace TransactionStatus {
    type Raw = "CREATED" | "PENDING" | "COMPLETED" | "FAILED" | "REVERSED" | "QUEUED" | "CANCELED";
}
