/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ApprovalSlotId } from "./ApprovalSlotId";
import { EntityUserId } from "../../entityTypes/types/EntityUserId";

export const ApprovalSlotAssignment: core.serialization.ObjectSchema<
    serializers.ApprovalSlotAssignment.Raw,
    Mercoa.ApprovalSlotAssignment
> = core.serialization.object({
    approvalSlotId: ApprovalSlotId,
    assignedUserId: EntityUserId,
});

export declare namespace ApprovalSlotAssignment {
    export interface Raw {
        approvalSlotId: ApprovalSlotId.Raw;
        assignedUserId: EntityUserId.Raw;
    }
}
