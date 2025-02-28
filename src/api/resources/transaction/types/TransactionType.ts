/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TransactionType =
    | "bankAccountToBankAccount"
    | "bankAccountToMailedCheck"
    | "bankAccountToWallet"
    | "cardToWallet"
    | "walletToBankAccount"
    | "custom"
    | "offPlatform";

export const TransactionType = {
    BankAccountToBankAccount: "bankAccountToBankAccount",
    BankAccountToMailedCheck: "bankAccountToMailedCheck",
    BankAccountToWallet: "bankAccountToWallet",
    CardToWallet: "cardToWallet",
    WalletToBankAccount: "walletToBankAccount",
    Custom: "custom",
    OffPlatform: "offPlatform",
} as const;
