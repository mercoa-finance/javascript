/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface PaymentMethodsRequest {
    /** List of payment methods that can be used to pay invoices. */
    payerPayments: Mercoa.PaymentRailRequest[];
    /** List of payment methods that can be created by a payor to send disbursements. */
    backupDisbursements: Mercoa.PaymentRailRequest[];
    /** List of payment methods that can be created by a payee to receive disbursements. */
    vendorDisbursements: Mercoa.PaymentRailRequest[];
}
