/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityUserId } from "../../entityTypes/types/EntityUserId";
import { ApproverAction } from "./ApproverAction";

export const AssociatedApprovalAction: core.serialization.ObjectSchema<
    serializers.AssociatedApprovalAction.Raw,
    Mercoa.AssociatedApprovalAction
> = core.serialization.object({
    userId: EntityUserId,
    action: ApproverAction,
});

export declare namespace AssociatedApprovalAction {
    export interface Raw {
        userId: EntityUserId.Raw;
        action: ApproverAction.Raw;
    }
}
