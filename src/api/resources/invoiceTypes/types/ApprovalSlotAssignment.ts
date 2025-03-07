/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         approvalSlotId: "inap_9bb311c9-7c15-4c9e-8148-63814e0abec6",
 *         assignedUserId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506"
 *     }
 */
export interface ApprovalSlotAssignment {
    /** The identifier for the approval slot this user is assigned to. */
    approvalSlotId: Mercoa.ApprovalSlotId;
    /** The ID of the user who is assigned to the approval slot. To assign all eligible users to an approval slot, use "ANY". */
    assignedUserId: Mercoa.EntityUserId;
}
