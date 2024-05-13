/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "apvl_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         trigger: [],
 *         rule: {
 *             type: "approver",
 *             numApprovers: 1,
 *             identifierList: {
 *                 type: "rolesList",
 *                 value: ["admin"]
 *             }
 *         },
 *         upstreamPolicyId: "root"
 *     }
 */
export interface ApprovalPolicyResponse {
    id: Mercoa.ApprovalPolicyId;
    trigger: Mercoa.Trigger[];
    rule: Mercoa.Rule;
    upstreamPolicyId: Mercoa.ApprovalPolicyId;
}
