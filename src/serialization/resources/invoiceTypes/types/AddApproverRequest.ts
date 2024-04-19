/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ApprovalSlotId } from "./ApprovalSlotId";
import { EntityUserId } from "../../entityTypes/types/EntityUserId";

export const AddApproverRequest: core.serialization.ObjectSchema<
    serializers.AddApproverRequest.Raw,
    Mercoa.AddApproverRequest
> = core.serialization.object({
    approvalSlotId: ApprovalSlotId.optional(),
    userId: EntityUserId,
});

export declare namespace AddApproverRequest {
    interface Raw {
        approvalSlotId?: ApprovalSlotId.Raw | null;
        userId: EntityUserId.Raw;
    }
}
