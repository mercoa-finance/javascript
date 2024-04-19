/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";

export class Unimplemented extends errors.MercoaError {
    constructor(body: string) {
        super({
            message: "Unimplemented",
            statusCode: 501,
            body: body,
        });
        Object.setPrototypeOf(this, Unimplemented.prototype);
    }
}
