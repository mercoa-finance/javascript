/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CommentRequest: core.serialization.ObjectSchema<serializers.CommentRequest.Raw, Mercoa.CommentRequest> =
    core.serialization.object({
        text: core.serialization.string(),
        userId: core.serialization.lazy(async () => (await import("../../..")).EntityUserId).optional(),
    });

export declare namespace CommentRequest {
    interface Raw {
        text: string;
        userId?: serializers.EntityUserId.Raw | null;
    }
}