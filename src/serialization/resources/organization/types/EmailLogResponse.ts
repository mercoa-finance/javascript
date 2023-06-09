/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const EmailLogResponse: core.serialization.ObjectSchema<
    serializers.EmailLogResponse.Raw,
    Mercoa.EmailLogResponse
> = core.serialization.object({
    from: core.serialization.string(),
    to: core.serialization.string(),
    subject: core.serialization.string(),
    rawContent: core.serialization.string(),
    createdAt: core.serialization.date(),
});

export declare namespace EmailLogResponse {
    interface Raw {
        from: string;
        to: string;
        subject: string;
        rawContent: string;
        createdAt: string;
    }
}
