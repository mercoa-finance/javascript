/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<serializers.invoice.paymentLinks.getPayerLink.Response.Raw, string> =
    core.serialization.string();

export declare namespace Response {
    export type Raw = string;
}
