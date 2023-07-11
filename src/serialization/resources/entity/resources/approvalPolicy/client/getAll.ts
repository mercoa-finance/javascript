/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import * as Mercoa from "../../../../../../api";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.entity.approvalPolicy.getAll.Response.Raw,
    Mercoa.ApprovalPolicyResponse[]
> = core.serialization.list(
    core.serialization.lazyObject(async () => (await import("../../../../..")).ApprovalPolicyResponse)
);

export declare namespace Response {
    type Raw = serializers.ApprovalPolicyResponse.Raw[];
}
