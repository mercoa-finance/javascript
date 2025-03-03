/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Mercoa from "../../../../../../../api/index";
import * as core from "../../../../../../../core";
import { DocumentType } from "../../../../../commons/types/DocumentType";

export const UploadDocumentRequest: core.serialization.Schema<
    serializers.invoice.UploadDocumentRequest.Raw,
    Mercoa.invoice.UploadDocumentRequest
> = core.serialization.object({
    document: core.serialization.string(),
    type: DocumentType.optional(),
});

export declare namespace UploadDocumentRequest {
    export interface Raw {
        document: string;
        type?: DocumentType.Raw | null;
    }
}
