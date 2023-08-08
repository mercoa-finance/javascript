/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const CommentId: core.serialization.Schema<serializers.CommentId.Raw, Mercoa.CommentId> =
    core.serialization.string();

export declare namespace CommentId {
    type Raw = string;
}