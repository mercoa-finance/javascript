/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ApprovalPolicyId } from "./ApprovalPolicyId";
import { Trigger } from "./Trigger";
import { Rule } from "./Rule";

export const ApprovalPolicyResponse: core.serialization.ObjectSchema<
    serializers.ApprovalPolicyResponse.Raw,
    Mercoa.ApprovalPolicyResponse
> = core.serialization.object({
    id: ApprovalPolicyId,
    trigger: core.serialization.list(Trigger),
    rule: Rule,
    upstreamPolicyId: ApprovalPolicyId,
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
});

export declare namespace ApprovalPolicyResponse {
    interface Raw {
        id: ApprovalPolicyId.Raw;
        trigger: Trigger.Raw[];
        rule: Rule.Raw;
        upstreamPolicyId: ApprovalPolicyId.Raw;
        createdAt: string;
        updatedAt: string;
    }
}
