/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * Update a payment method. for non custom payment methods.
 *
 * @example
 *     {
 *         type: "bankAccount",
 *         defaultSource: true,
 *         defaultDestination: true
 *     }
 */
export type PaymentMethodUpdateRequest =
    | Mercoa.PaymentMethodUpdateRequest.Custom
    /**
     * Only defaultSource, defaultDestination, accountName, and checkOptions can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.BankAccount
    /**
     * Only defaultSource and defaultDestination can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.Card
    /**
     * Only defaultSource and defaultDestination can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.Check
    /**
     * Only defaultSource and defaultDestination can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.OffPlatform
    /**
     * Only defaultSource and defaultDestination can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.Utility
    /**
     * Only defaultSource and defaultDestination can be updated. */
    | Mercoa.PaymentMethodUpdateRequest.Wallet;

export namespace PaymentMethodUpdateRequest {
    export interface Custom extends Mercoa.CustomPaymentMethodUpdateRequest {
        type: "custom";
    }

    export interface BankAccount extends Mercoa.BankAccountUpdateRequest {
        type: "bankAccount";
    }

    export interface Card extends Mercoa.PaymentMethodBaseRequest {
        type: "card";
    }

    export interface Check extends Mercoa.PaymentMethodBaseRequest {
        type: "check";
    }

    export interface OffPlatform extends Mercoa.PaymentMethodBaseRequest {
        type: "offPlatform";
    }

    export interface Utility extends Mercoa.PaymentMethodBaseRequest {
        type: "utility";
    }

    export interface Wallet extends Mercoa.PaymentMethodBaseRequest {
        type: "wallet";
    }
}
