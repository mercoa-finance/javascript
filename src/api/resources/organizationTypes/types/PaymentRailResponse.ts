/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export type PaymentRailResponse =
    | Mercoa.PaymentRailResponse.BankAccount
    | Mercoa.PaymentRailResponse.Card
    | Mercoa.PaymentRailResponse.VirtualCard
    | Mercoa.PaymentRailResponse.Check
    | Mercoa.PaymentRailResponse.Custom
    | Mercoa.PaymentRailResponse.Bnpl
    | Mercoa.PaymentRailResponse.OffPlatform
    | Mercoa.PaymentRailResponse.Utility
    | Mercoa.PaymentRailResponse.Na
    | Mercoa.PaymentRailResponse.Wallet;

export namespace PaymentRailResponse {
    export interface BankAccount extends Mercoa.BankPaymentRailResponse {
        type: "bankAccount";
    }

    export interface Card extends Mercoa.GenericPaymentRailResponse {
        type: "card";
    }

    export interface VirtualCard extends Mercoa.GenericPaymentRailResponse {
        type: "virtualCard";
    }

    export interface Check extends Mercoa.CheckPaymentRailResponse {
        type: "check";
    }

    export interface Custom extends Mercoa.CustomPaymentRailResponse {
        type: "custom";
    }

    export interface Bnpl extends Mercoa.GenericPaymentRailResponse {
        type: "bnpl";
    }

    export interface OffPlatform extends Mercoa.GenericPaymentRailResponse {
        type: "offPlatform";
    }

    export interface Utility extends Mercoa.GenericPaymentRailResponse {
        type: "utility";
    }

    export interface Na extends Mercoa.GenericPaymentRailResponse {
        type: "na";
    }

    export interface Wallet extends Mercoa.GenericPaymentRailResponse {
        type: "wallet";
    }
}
