/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PlaidAccessTokenRequest {
    /** Plaid account ID. If not provided, will try to match the provided routing number and account number. */
    accountId?: string;
    /** Plaid access token for the account. If you already have an access token for the account (for example, you have linked the account to your app already), use this instead of publicToken. */
    accessToken: string;
}
