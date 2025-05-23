/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         type: "bankAccount",
 *         disabled: true,
 *         defaultDeliveryMethod: Mercoa.BankDeliveryMethod.AchSameDay
 *     }
 *
 * @example
 *     {
 *         type: "custom",
 *         schemaId: "cpms_7df2974a-4069-454c-912f-7e58ebe030fb",
 *         disabled: true
 *     }
 *
 * @example
 *     {
 *         type: "check",
 *         disabled: true,
 *         defaultDeliveryMethod: Mercoa.CheckDeliveryMethod.Mail,
 *         printDescription: true
 *     }
 *
 * @example
 *     {
 *         type: "card",
 *         disabled: true
 *     }
 */
export type PaymentMethodCustomizationRequest =
    | Mercoa.PaymentMethodCustomizationRequest.BankAccount
    | Mercoa.PaymentMethodCustomizationRequest.Card
    | Mercoa.PaymentMethodCustomizationRequest.VirtualCard
    | Mercoa.PaymentMethodCustomizationRequest.Check
    | Mercoa.PaymentMethodCustomizationRequest.Custom
    | Mercoa.PaymentMethodCustomizationRequest.Bnpl
    | Mercoa.PaymentMethodCustomizationRequest.OffPlatform
    | Mercoa.PaymentMethodCustomizationRequest.Utility
    | Mercoa.PaymentMethodCustomizationRequest.Na
    | Mercoa.PaymentMethodCustomizationRequest.Wallet;

export namespace PaymentMethodCustomizationRequest {
    export interface BankAccount extends Mercoa.BankAccountPaymentMethodCustomizationRequest {
        type: "bankAccount";
    }

    export interface Card extends Mercoa.GenericPaymentMethodCustomizationRequest {
        type: "card";
    }

    export interface VirtualCard extends Mercoa.GenericPaymentMethodCustomizationRequest {
        type: "virtualCard";
    }

    export interface Check extends Mercoa.CheckPaymentMethodCustomizationRequest {
        type: "check";
    }

    export interface Custom extends Mercoa.CustomPaymentMethodCustomizationRequest {
        type: "custom";
    }

    export interface Bnpl extends Mercoa.GenericPaymentMethodCustomizationRequest {
        type: "bnpl";
    }

    export interface OffPlatform extends Mercoa.GenericPaymentMethodCustomizationRequest {
        type: "offPlatform";
    }

    export interface Utility extends Mercoa.GenericPaymentMethodCustomizationRequest {
        type: "utility";
    }

    export interface Na extends Mercoa.GenericPaymentMethodCustomizationRequest {
        type: "na";
    }

    export interface Wallet extends Mercoa.GenericPaymentMethodCustomizationRequest {
        type: "wallet";
    }
}
