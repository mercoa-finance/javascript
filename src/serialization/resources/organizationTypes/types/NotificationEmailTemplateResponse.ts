/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const NotificationEmailTemplateResponse: core.serialization.ObjectSchema<
    serializers.NotificationEmailTemplateResponse.Raw,
    Mercoa.NotificationEmailTemplateResponse
> = core.serialization.object({
    backgroundStyle: core.serialization.string().optional(),
    header: core.serialization.string().optional(),
    body: core.serialization.string().optional(),
    signature: core.serialization.string().optional(),
    footer: core.serialization.string().optional(),
    button: core.serialization.string().optional(),
});

export declare namespace NotificationEmailTemplateResponse {
    export interface Raw {
        backgroundStyle?: string | null;
        header?: string | null;
        body?: string | null;
        signature?: string | null;
        footer?: string | null;
        button?: string | null;
    }
}
