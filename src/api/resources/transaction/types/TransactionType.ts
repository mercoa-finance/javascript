/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TransactionType = "bankAccountToBankAccount" | "bankAccountToMailedCheck" | "custom";

export const TransactionType = {
    BankAccountToBankAccount: "bankAccountToBankAccount",
    BankAccountToMailedCheck: "bankAccountToMailedCheck",
    Custom: "custom",
} as const;
