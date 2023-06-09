/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const EmailProviderResponse: core.serialization.ObjectSchema<
    serializers.EmailProviderResponse.Raw,
    Mercoa.EmailProviderResponse
> = core.serialization.object({
    sender: core.serialization.lazyObject(async () => (await import("../../..")).EmailSenderResponse),
    inboxDomain: core.serialization.string(),
});

export declare namespace EmailProviderResponse {
    interface Raw {
        sender: serializers.EmailSenderResponse.Raw;
        inboxDomain: string;
    }
}
