/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";

export class NotFound extends errors.MercoaError {
    constructor(body: string) {
        super({
            message: "NotFound",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFound.prototype);
    }
}
