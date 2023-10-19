/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class OcrFailure extends errors.MercoaError {
    constructor(body: string) {
        super({
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, OcrFailure.prototype);
    }
}