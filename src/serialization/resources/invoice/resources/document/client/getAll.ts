/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { DocumentResponse } from "../../../../commons/types/DocumentResponse";

export const Response: core.serialization.Schema<
    serializers.invoice.document.getAll.Response.Raw,
    Mercoa.DocumentResponse[]
> = core.serialization.list(DocumentResponse);

export declare namespace Response {
    export type Raw = DocumentResponse.Raw[];
}
