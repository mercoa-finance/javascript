/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         nameOnCard: "John Doe",
 *         cardNumber: "4242424242424242",
 *         expirationMonth: 10,
 *         expirationYear: 2025,
 *         cvv: "123",
 *         postalCode: "12345",
 *         country: Mercoa.CountryCode.Us
 *     }
 */
export interface ProcessPaymentGatewayCardDetailsDirect {
    /** The name on the card to use for the payment */
    nameOnCard: string;
    /** The number of the card to use for the payment */
    cardNumber: string;
    /** The month of the expiration date of the card to use for the payment. This must be a number between 1 and 12. */
    expirationMonth: number;
    /** The year of the expiration date of the card to use for the payment. This must be the full year, not the last two digits. */
    expirationYear: number;
    /** The CVV of the card to use for the payment */
    cvv: string;
    /** The postal code of the address of the card to use for the payment */
    postalCode: string;
    /** The country of the address of the card to use for the payment */
    country: Mercoa.CountryCode;
}
