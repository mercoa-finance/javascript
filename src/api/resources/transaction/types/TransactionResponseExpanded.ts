/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface TransactionResponseExpanded extends Mercoa.TransactionResponse {
    invoiceId: Mercoa.InvoiceId;
    deductionDate?: Date;
    dueDate?: Date;
    payer?: Mercoa.EntityResponse;
    vendor?: Mercoa.EntityResponse;
    paymentSource?: Mercoa.PaymentMethodResponse;
    paymentDestination?: Mercoa.PaymentMethodResponse;
}
