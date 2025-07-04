/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         type: "document",
 *         document: "data:application/pdf;base64,JVBERi0xLjEKJcKlwrHDqwoKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nCiAgICAgL1BhZ2VzIDIgMCBSCiAgPj4KZW5kb2JqCgoyIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2VzCiAgICAgL0tpZHMgWzMgMCBSXQogICAgIC9Db3VudCAxCiAgICAgL01lZGlhQm94IFswIDAgMzAwIDE0NF0KICA+PgplbmRvYmoKCjMgMCBvYmoKICA8PCAgL1R5cGUgL1BhZ2UKICAgICAgL1BhcmVudCAyIDAgUgogICAgICAvUmVzb3VyY2VzCiAgICAgICA8PCAvRm9udAogICAgICAgICAgIDw8IC9GMQogICAgICAgICAgICAgICA8PCAvVHlwZSAvRm9udAogICAgICAgICAgICAgICAgICAvU3VidHlwZSAvVHlwZTEKICAgICAgICAgICAgICAgICAgL0Jhc2VGb250IC9UaW1lcy1Sb21hbgogICAgICAgICAgICAgICA+PgogICAgICAgICAgID4+CiAgICAgICA+PgogICAgICAvQ29udGVudHMgNCAwIFIKICA+PgplbmRvYmoKCjQgMCBvYmoKICA8PCAvTGVuZ3RoIDU1ID4+CnN0cmVhbQogIEJUCiAgICAvRjEgMTggVGYKICAgIDAgMCBUZAogICAgKEhlbGxvIFdvcmxkKSBUagogIEVUCmVuZHN0cmVhbQplbmRvYmoKCnhyZWYKMCA1CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxOCAwMDAwMCBuIAowMDAwMDAwMDc3IDAwMDAwIG4gCjAwMDAwMDAxNzggMDAwMDAgbiAKMDAwMDAwMDQ1NyAwMDAwMCBuIAp0cmFpbGVyCiAgPDwgIC9Sb290IDEgMCBSCiAgICAgIC9TaXplIDUKICA+PgpzdGFydHhyZWYKNTY1CiUlRU9GCg==",
 *         cardDetails: {
 *             type: "direct",
 *             nameOnCard: "John Doe",
 *             cardNumber: "4242424242424242",
 *             expirationMonth: 10,
 *             expirationYear: 2025,
 *             cvv: "123",
 *             postalCode: "12345",
 *             country: Mercoa.CountryCode.Us
 *         }
 *     }
 *
 * @example
 *     {
 *         type: "html",
 *         html: "<html><body><h1>Invoice Details</h1><a href=\"https://www.payment-gateway.com/invoice/123123\">Pay Invoice</a></body></html>",
 *         cardDetails: {
 *             type: "iframe",
 *             iframeUrl: "https://www.myvirtualcard.com/iframe/543543"
 *         }
 *     }
 */
export type ProcessPaymentGatewayRequest =
    | Mercoa.ProcessPaymentGatewayRequest.Document
    | Mercoa.ProcessPaymentGatewayRequest.Html;

export namespace ProcessPaymentGatewayRequest {
    export interface Document extends Mercoa.ProcessPaymentGatewayRequestDocument {
        type: "document";
    }

    export interface Html extends Mercoa.ProcessPaymentGatewayRequestHtml {
        type: "html";
    }
}
