/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface CounterpartyInvoiceMetricsResponse {
    totalInvoices: number;
    totalAmount: number;
    statuses: Mercoa.CounterpartyInvoiceMetricsStatusResponse[];
}