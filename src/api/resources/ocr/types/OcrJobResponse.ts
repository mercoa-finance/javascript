/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface OcrJobResponse {
    jobId: string;
    status: Mercoa.OcrJobStatus;
    data?: Mercoa.OcrResponse;
}
