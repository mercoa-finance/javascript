/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceResponse } from "../../invoiceTypes/types/InvoiceResponse";
import { TransactionResponseBase } from "./TransactionResponseBase";

export const TransactionResponseCustomWithInvoices: core.serialization.ObjectSchema<
    serializers.TransactionResponseCustomWithInvoices.Raw,
    Mercoa.TransactionResponseCustomWithInvoices
> = core.serialization
    .object({
        invoices: core.serialization.list(InvoiceResponse),
    })
    .extend(TransactionResponseBase);

export declare namespace TransactionResponseCustomWithInvoices {
    export interface Raw extends TransactionResponseBase.Raw {
        invoices: InvoiceResponse.Raw[];
    }
}
