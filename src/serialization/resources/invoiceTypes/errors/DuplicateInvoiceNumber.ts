/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as core from "../../../../core";

export const DuplicateInvoiceNumber: core.serialization.Schema<serializers.DuplicateInvoiceNumber.Raw, string> =
    core.serialization.string();

export declare namespace DuplicateInvoiceNumber {
    type Raw = string;
}