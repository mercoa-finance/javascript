/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as core from "../../../../core";

export const InvoiceStatusError: core.serialization.Schema<serializers.InvoiceStatusError.Raw, string> =
    core.serialization.string();

export declare namespace InvoiceStatusError {
    type Raw = string;
}