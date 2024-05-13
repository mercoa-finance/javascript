/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";

export class InvoiceStatusError extends errors.MercoaError {
    constructor(body: string) {
        super({
            message: "InvoiceStatusError",
            statusCode: 422,
            body: body,
        });
        Object.setPrototypeOf(this, InvoiceStatusError.prototype);
    }
}
