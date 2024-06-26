/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         type: "check",
 *         delivery: Mercoa.CheckDeliveryMethod.Mail
 *     }
 *
 * @example
 *     {
 *         type: "bankAccount",
 *         delivery: Mercoa.BankDeliveryMethod.AchSameDay
 *     }
 */
export type PaymentDestinationOptions =
    | Mercoa.PaymentDestinationOptions.Check
    | Mercoa.PaymentDestinationOptions.BankAccount;

export declare namespace PaymentDestinationOptions {
    interface Check extends Mercoa.CheckPaymentDestinationOptions {
        type: "check";
    }

    interface BankAccount extends Mercoa.BankAccountPaymentDestinationOptions {
        type: "bankAccount";
    }
}
