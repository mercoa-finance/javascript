/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface ApproverRule {
    /** Number of approvals required to approve an invoice */
    numApprovers: number;
    /** List of users or roles that should be used to determine eligible approvers */
    identifierList: Mercoa.IdentifierList;
    /** If true, the policy will automatically assign approvers to the invoice. If more than one approver is eligible, the policy will assign all eligible approvers to the invoice. */
    autoAssign?: boolean;
}
