/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface AddApproverRequest {
    /** The identifier for the approval slot this user is assigned to. */
    approvalSlotId?: Mercoa.ApprovalSlotId;
    userId: Mercoa.EntityUserId;
}
