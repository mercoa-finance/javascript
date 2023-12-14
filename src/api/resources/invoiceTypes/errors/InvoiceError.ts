/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class InvoiceError extends errors.MercoaError {
    constructor(body: string) {
        super({
            message: "InvoiceError",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, InvoiceError.prototype);
    }
}
