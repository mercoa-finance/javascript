/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface EmailSenderResponse {
    provider: Mercoa.EmailSenderProvider;
    fromEmail: string;
    fromName: string;
    hasApiKey: boolean;
}