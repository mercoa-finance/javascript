/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const EmailSenderProvider: core.serialization.Schema<
    serializers.EmailSenderProvider.Raw,
    Mercoa.EmailSenderProvider
> = core.serialization.enum_(["none", "sendgrid", "ses", "resend", "cloudmailin"]);

export declare namespace EmailSenderProvider {
    export type Raw = "none" | "sendgrid" | "ses" | "resend" | "cloudmailin";
}
