/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         type: "bankAccount",
 *         id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         accountName: "My Checking Account",
 *         bankName: "Chase",
 *         routingNumber: "12345678",
 *         accountNumber: "99988767623",
 *         accountType: Mercoa.BankType.Checking,
 *         status: Mercoa.BankStatus.Verified,
 *         isDefaultSource: true,
 *         isDefaultDestination: true,
 *         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         type: "bankAccount",
 *         id: "pm_7610541f-4619-4033-8620-cfccfb811293",
 *         accountName: "Vendor Checking Account",
 *         bankName: "Chase",
 *         routingNumber: "66554433",
 *         accountNumber: "55934059697648",
 *         accountType: Mercoa.BankType.Checking,
 *         status: Mercoa.BankStatus.New,
 *         isDefaultSource: true,
 *         isDefaultDestination: true,
 *         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         type: "check",
 *         id: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
 *         payToTheOrderOf: "John Doe",
 *         addressLine1: "123 Main St",
 *         addressLine2: "Apt 1",
 *         city: "New York",
 *         stateOrProvince: "NY",
 *         postalCode: "10001",
 *         country: "US",
 *         isDefaultSource: false,
 *         isDefaultDestination: true,
 *         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         type: "custom",
 *         id: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
 *         foreignId: "DB_FOREIGN_ID",
 *         accountName: "Vendor Wire Account",
 *         accountNumber: "123456789",
 *         schemaId: "cpms_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         schema: {
 *             id: "cpms_4794d597-70dc-4fec-b6ec-c5988e759769",
 *             name: "Wire",
 *             isSource: false,
 *             isDestination: true,
 *             supportedCurrencies: [Mercoa.CurrencyCode.Usd, Mercoa.CurrencyCode.Eur],
 *             fields: [{
 *                     name: "bankName",
 *                     displayName: "Bank Name",
 *                     type: Mercoa.CustomPaymentMethodSchemaFieldType.Text,
 *                     optional: false
 *                 }, {
 *                     name: "recipientName",
 *                     displayName: "Recipient Name",
 *                     type: Mercoa.CustomPaymentMethodSchemaFieldType.Text,
 *                     optional: false
 *                 }, {
 *                     name: "accountNumber",
 *                     displayName: "Account Number",
 *                     type: Mercoa.CustomPaymentMethodSchemaFieldType.Number,
 *                     optional: false,
 *                     useAsAccountNumber: true
 *                 }, {
 *                     name: "routingNumber",
 *                     displayName: "Routing Number",
 *                     type: Mercoa.CustomPaymentMethodSchemaFieldType.Number,
 *                     optional: false
 *                 }],
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         },
 *         data: {
 *             "bankName": "Chase",
 *             "recipientName": "John Doe",
 *             "routingNumber": "123456789",
 *             "accountNumber": "99988767623"
 *         },
 *         isDefaultSource: false,
 *         isDefaultDestination: false,
 *         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 */
export type PaymentMethodResponse =
    | Mercoa.PaymentMethodResponse.BankAccount
    | Mercoa.PaymentMethodResponse.Card
    | Mercoa.PaymentMethodResponse.Check
    | Mercoa.PaymentMethodResponse.Custom
    | Mercoa.PaymentMethodResponse.OffPlatform;

export declare namespace PaymentMethodResponse {
    interface BankAccount extends Mercoa.BankAccountResponse {
        type: "bankAccount";
    }

    interface Card extends Mercoa.CardResponse {
        type: "card";
    }

    interface Check extends Mercoa.CheckResponse {
        type: "check";
    }

    interface Custom extends Mercoa.CustomPaymentMethodResponse {
        type: "custom";
    }

    interface OffPlatform extends Mercoa.PaymentMethodBaseResponse {
        type: "offPlatform";
    }
}
