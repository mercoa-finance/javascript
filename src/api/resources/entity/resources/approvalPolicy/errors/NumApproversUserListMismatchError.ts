/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../../../errors";

export class NumApproversUserListMismatchError extends errors.MercoaError {
    constructor(body: string) {
        super({
            message: "NumApproversUserListMismatchError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, NumApproversUserListMismatchError.prototype);
    }
}
