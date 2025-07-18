/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         html: "<html><body><h1>Invoice Details</h1><a href=\"https://www.payment-gateway.com/invoice/123123\">Pay Invoice</a></body></html>",
 *         cardDetails: {
 *             type: "direct",
 *             firstName: "John",
 *             lastName: "Doe",
 *             cardNumber: "4242424242424242",
 *             expirationMonth: 10,
 *             expirationYear: 2025,
 *             cvv: "123",
 *             postalCode: "12345",
 *             country: Mercoa.CountryCode.Us
 *         }
 *     }
 */
export interface ProcessPaymentGatewayRequestHtml {
    /** The HTML from an email to extract the payment gateway from */
    html: string;
    /** The details of the card to use for the payment */
    cardDetails: Mercoa.ProcessPaymentGatewayCardDetails;
}
