/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const CommentRequest: core.serialization.ObjectSchema<serializers.CommentRequest.Raw, Mercoa.CommentRequest> =
    core.serialization.object({
        text: core.serialization.string(),
    });

export declare namespace CommentRequest {
    interface Raw {
        text: string;
    }
}