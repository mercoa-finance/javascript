/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const InvoiceId: core.serialization.Schema<serializers.InvoiceId.Raw, Mercoa.InvoiceId> =
    core.serialization.string();

export declare namespace InvoiceId {
    export type Raw = string;
}
