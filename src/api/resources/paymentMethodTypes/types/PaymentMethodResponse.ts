/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

/**
 * @example
 *     {
 *         type: "bankAccount",
 *         id: "pm_12345",
 *         accountName: "My Checking Account",
 *         bankName: "Chase",
 *         routingNumber: "12345678",
 *         accountNumber: "99988767623",
 *         accountType: Mercoa.BankType.Checking,
 *         status: Mercoa.BankStatus.Verified,
 *         isDefaultSource: true,
 *         isDefaultDestination: true,
 *         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 */
export type PaymentMethodResponse =
    | Mercoa.PaymentMethodResponse.BankAccount
    | Mercoa.PaymentMethodResponse.Card
    | Mercoa.PaymentMethodResponse.Check
    | Mercoa.PaymentMethodResponse.Custom
    | Mercoa.PaymentMethodResponse.OffPlatform;

export declare namespace PaymentMethodResponse {
    interface BankAccount extends Mercoa.BankAccountResponse {
        type: "bankAccount";
    }

    interface Card extends Mercoa.CardResponse {
        type: "card";
    }

    interface Check extends Mercoa.CheckResponse {
        type: "check";
    }

    interface Custom extends Mercoa.CustomPaymentMethodResponse {
        type: "custom";
    }

    interface OffPlatform extends Mercoa.PaymentMethodBaseResponse {
        type: "offPlatform";
    }
}
