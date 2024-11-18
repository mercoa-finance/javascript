/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface TransactionResponseBankToBankBase extends Mercoa.TransactionResponseBase {
    /** If the invoice failed to be paid, this field will be populated with the reason of failure. */
    failureReason?: Mercoa.TransactionFailureReason;
}
