/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { OcrJobId } from "./OcrJobId";

export const OcrAsyncResponse: core.serialization.ObjectSchema<
    serializers.OcrAsyncResponse.Raw,
    Mercoa.OcrAsyncResponse
> = core.serialization.object({
    jobId: OcrJobId,
});

export declare namespace OcrAsyncResponse {
    interface Raw {
        jobId: OcrJobId.Raw;
    }
}
