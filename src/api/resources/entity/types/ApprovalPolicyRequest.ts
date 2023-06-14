/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface ApprovalPolicyRequest {
    trigger: Mercoa.Trigger;
    rule: Mercoa.Rule;
    /** Use 'root' if no upstreamPolicyId is intended to be set. */
    upstreamPolicyId: Mercoa.PolicyId;
}