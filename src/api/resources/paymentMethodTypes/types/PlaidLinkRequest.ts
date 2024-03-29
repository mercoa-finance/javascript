/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PlaidLinkRequest {
    /** Plaid account ID */
    accountId: string;
    /** Public token received from Plaid Link. Use this if linking the account using the Plaid Link frontend component. */
    publicToken?: string;
    /** Plaid access token for the account. If you already have an access token for the account (for example, you have linked the account to your app already), use this instead of publicToken. */
    accessToken?: string;
}
