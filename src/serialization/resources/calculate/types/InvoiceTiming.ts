/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceId } from "../../invoiceTypes/types/InvoiceId";

export const InvoiceTiming: core.serialization.ObjectSchema<serializers.InvoiceTiming.Raw, Mercoa.InvoiceTiming> =
    core.serialization.object({
        invoiceId: InvoiceId,
    });

export declare namespace InvoiceTiming {
    export interface Raw {
        invoiceId: InvoiceId.Raw;
    }
}
