/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const ApprovalPolicyId: core.serialization.Schema<serializers.ApprovalPolicyId.Raw, Mercoa.ApprovalPolicyId> =
    core.serialization.string();

export declare namespace ApprovalPolicyId {
    export type Raw = string;
}
