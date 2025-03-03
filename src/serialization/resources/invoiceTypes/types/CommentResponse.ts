/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityUserResponse } from "../../entityTypes/types/EntityUserResponse";
import { AssociatedApprovalAction } from "./AssociatedApprovalAction";

export const CommentResponse: core.serialization.ObjectSchema<serializers.CommentResponse.Raw, Mercoa.CommentResponse> =
    core.serialization.object({
        id: core.serialization.string(),
        text: core.serialization.string(),
        user: EntityUserResponse.optional(),
        associatedApprovalAction: AssociatedApprovalAction.optional(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace CommentResponse {
    export interface Raw {
        id: string;
        text: string;
        user?: EntityUserResponse.Raw | null;
        associatedApprovalAction?: AssociatedApprovalAction.Raw | null;
        createdAt: string;
        updatedAt: string;
    }
}
