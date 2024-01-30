/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface ApprovalSlot {
    /** The identifier for the approval policy this slot is associated with. */
    approvalPolicyId: Mercoa.ApprovalPolicyId;
    /** The identifier for this approval slot */
    approvalSlotId: Mercoa.ApprovalSlotId;
    assignedUserId?: Mercoa.EntityUserId;
    action: Mercoa.ApproverAction;
    eligibleRoles: string[];
    eligibleUserIds: Mercoa.EntityUserId[];
    /** Either the date the invoice was created, date the approver was assigned, or date of last action by approver, whichever is latest. */
    date: Date;
}
