/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const InvoiceTemplateId: core.serialization.Schema<serializers.InvoiceTemplateId.Raw, Mercoa.InvoiceTemplateId> =
    core.serialization.string();

export declare namespace InvoiceTemplateId {
    type Raw = string;
}