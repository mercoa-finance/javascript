/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface ApprovalPolicyUpdateRequest {
    trigger?: Mercoa.Trigger[];
    rule?: Mercoa.Rule;
    upstreamPolicyId?: Mercoa.ApprovalPolicyId;
}
