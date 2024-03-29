/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";

export class EntityForeignIdAlreadyExists extends errors.MercoaError {
    constructor(body: string) {
        super({
            message: "EntityForeignIdAlreadyExists",
            statusCode: 409,
            body: body,
        });
        Object.setPrototypeOf(this, EntityForeignIdAlreadyExists.prototype);
    }
}
