/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface BankAccountUpdateRequest extends Mercoa.PaymentMethodBaseRequest {
    accountName?: string;
    /** If this bank account supports check printing, use this to enable check printing and set the check options. Checks will be printed directly from the bank account. */
    checkOptions?: Mercoa.BankAccountCheckOptions;
}
