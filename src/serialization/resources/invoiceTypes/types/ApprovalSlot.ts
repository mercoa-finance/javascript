/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ApprovalPolicyId } from "../../entityTypes/types/ApprovalPolicyId";
import { ApprovalSlotId } from "./ApprovalSlotId";
import { EntityUserId } from "../../entityTypes/types/EntityUserId";
import { ApproverAction } from "./ApproverAction";

export const ApprovalSlot: core.serialization.ObjectSchema<serializers.ApprovalSlot.Raw, Mercoa.ApprovalSlot> =
    core.serialization.object({
        approvalPolicyId: ApprovalPolicyId,
        approvalSlotId: ApprovalSlotId,
        assignedUserId: EntityUserId.optional(),
        action: ApproverAction,
        eligibleRoles: core.serialization.list(core.serialization.string()),
        eligibleUserIds: core.serialization.list(EntityUserId),
        date: core.serialization.date(),
    });

export declare namespace ApprovalSlot {
    interface Raw {
        approvalPolicyId: ApprovalPolicyId.Raw;
        approvalSlotId: ApprovalSlotId.Raw;
        assignedUserId?: EntityUserId.Raw | null;
        action: ApproverAction.Raw;
        eligibleRoles: string[];
        eligibleUserIds: EntityUserId.Raw[];
        date: string;
    }
}
