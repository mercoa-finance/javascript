/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface OcrResponse {
    invoice: Mercoa.InvoiceResponse;
    vendor: Mercoa.EntityResponse;
    check?: Mercoa.CheckResponse;
    bankAccount?: Mercoa.BankAccountResponse;
}
