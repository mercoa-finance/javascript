/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CommentResponse } from "../../../../invoiceTypes/types/CommentResponse";

export const Response: core.serialization.Schema<
    serializers.invoice.comment.getAll.Response.Raw,
    Mercoa.CommentResponse[]
> = core.serialization.list(CommentResponse);

export declare namespace Response {
    type Raw = CommentResponse.Raw[];
}
