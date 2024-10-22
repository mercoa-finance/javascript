/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         accountId: "85866843",
 *         postalCode: "94105",
 *         nameOnAccount: "John Doe"
 *     }
 */
export interface CounterpartyCustomizationAccount {
    /** The ID the counterparty has assigned to this account. */
    accountId: string;
    /** The postal code the counterparty has assigned to this account. */
    postalCode?: string;
    /** The name on the account the counterparty has assigned to this account. */
    nameOnAccount?: string;
}