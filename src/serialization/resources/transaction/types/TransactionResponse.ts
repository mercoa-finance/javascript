/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { TransactionResponseBankToBankWithInvoices } from "./TransactionResponseBankToBankWithInvoices";
import { TransactionResponseBankToCheckWithInvoices } from "./TransactionResponseBankToCheckWithInvoices";
import { TransactionResponseBankToWalletWithInvoices } from "./TransactionResponseBankToWalletWithInvoices";
import { TransactionResponseCardToWalletWithInvoices } from "./TransactionResponseCardToWalletWithInvoices";
import { TransactionResponseWalletToBankWithInvoices } from "./TransactionResponseWalletToBankWithInvoices";
import { TransactionResponseCustomWithInvoices } from "./TransactionResponseCustomWithInvoices";

export const TransactionResponse: core.serialization.Schema<
    serializers.TransactionResponse.Raw,
    Mercoa.TransactionResponse
> = core.serialization
    .union("type", {
        bankAccountToBankAccount: TransactionResponseBankToBankWithInvoices,
        bankAccountToMailedCheck: TransactionResponseBankToCheckWithInvoices,
        bankAccountToPrintedCheck: TransactionResponseBankToCheckWithInvoices,
        bankAccountToWallet: TransactionResponseBankToWalletWithInvoices,
        cardToWallet: TransactionResponseCardToWalletWithInvoices,
        walletToBankAccount: TransactionResponseWalletToBankWithInvoices,
        custom: TransactionResponseCustomWithInvoices,
        offPlatform: TransactionResponseCustomWithInvoices,
    })
    .transform<Mercoa.TransactionResponse>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace TransactionResponse {
    export type Raw =
        | TransactionResponse.BankAccountToBankAccount
        | TransactionResponse.BankAccountToMailedCheck
        | TransactionResponse.BankAccountToPrintedCheck
        | TransactionResponse.BankAccountToWallet
        | TransactionResponse.CardToWallet
        | TransactionResponse.WalletToBankAccount
        | TransactionResponse.Custom
        | TransactionResponse.OffPlatform;

    export interface BankAccountToBankAccount extends TransactionResponseBankToBankWithInvoices.Raw {
        type: "bankAccountToBankAccount";
    }

    export interface BankAccountToMailedCheck extends TransactionResponseBankToCheckWithInvoices.Raw {
        type: "bankAccountToMailedCheck";
    }

    export interface BankAccountToPrintedCheck extends TransactionResponseBankToCheckWithInvoices.Raw {
        type: "bankAccountToPrintedCheck";
    }

    export interface BankAccountToWallet extends TransactionResponseBankToWalletWithInvoices.Raw {
        type: "bankAccountToWallet";
    }

    export interface CardToWallet extends TransactionResponseCardToWalletWithInvoices.Raw {
        type: "cardToWallet";
    }

    export interface WalletToBankAccount extends TransactionResponseWalletToBankWithInvoices.Raw {
        type: "walletToBankAccount";
    }

    export interface Custom extends TransactionResponseCustomWithInvoices.Raw {
        type: "custom";
    }

    export interface OffPlatform extends TransactionResponseCustomWithInvoices.Raw {
        type: "offPlatform";
    }
}
