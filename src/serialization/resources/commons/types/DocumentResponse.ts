/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { DocumentType } from "./DocumentType";

export const DocumentResponse: core.serialization.ObjectSchema<
    serializers.DocumentResponse.Raw,
    Mercoa.DocumentResponse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    mimeType: core.serialization.string(),
    type: DocumentType,
    uri: core.serialization.string(),
});

export declare namespace DocumentResponse {
    export interface Raw {
        id?: string | null;
        mimeType: string;
        type: DocumentType.Raw;
        uri: string;
    }
}
