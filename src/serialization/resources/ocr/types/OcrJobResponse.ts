/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { OcrJobId } from "./OcrJobId";
import { OcrJobStatus } from "./OcrJobStatus";
import { OcrPageRange } from "./OcrPageRange";
import { OcrResponse } from "./OcrResponse";

export const OcrJobResponse: core.serialization.ObjectSchema<serializers.OcrJobResponse.Raw, Mercoa.OcrJobResponse> =
    core.serialization.object({
        jobId: OcrJobId,
        linkedJobIds: core.serialization.list(OcrJobId).optional(),
        status: OcrJobStatus,
        pageRange: OcrPageRange.optional(),
        data: OcrResponse.optional(),
    });

export declare namespace OcrJobResponse {
    export interface Raw {
        jobId: OcrJobId.Raw;
        linkedJobIds?: OcrJobId.Raw[] | null;
        status: OcrJobStatus.Raw;
        pageRange?: OcrPageRange.Raw | null;
        data?: OcrResponse.Raw | null;
    }
}
