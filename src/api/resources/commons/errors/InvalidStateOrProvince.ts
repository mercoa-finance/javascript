/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class InvalidStateOrProvince extends errors.MercoaError {
    constructor(body: string) {
        super({
            message: "InvalidStateOrProvince",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, InvalidStateOrProvince.prototype);
    }
}
