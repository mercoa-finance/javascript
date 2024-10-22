/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         webhookIds: ["webhook_12345"],
 *         userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
 *         data: {
 *             id: "inv_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *             status: Mercoa.InvoiceStatus.Draft,
 *             payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *             payer: {
 *                 id: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *                 foreignId: "MY-DB-ID-12345",
 *                 name: "Acme Inc.",
 *                 email: "customer@acme.com",
 *                 acceptedTos: true,
 *                 status: Mercoa.EntityStatus.Verified,
 *                 isCustomer: true,
 *                 isPayor: true,
 *                 isPayee: false,
 *                 isNetworkPayor: false,
 *                 isNetworkPayee: false,
 *                 accountType: Mercoa.AccountType.Business,
 *                 updatedAt: "2024-01-02T00:00:00Z",
 *                 createdAt: "2024-01-01T00:00:00Z",
 *                 profile: {
 *                     business: {
 *                         email: "customer@acme.com",
 *                         legalBusinessName: "Acme Inc.",
 *                         businessType: Mercoa.BusinessType.Llc,
 *                         phone: {
 *                             countryCode: "1",
 *                             number: "4155551234"
 *                         },
 *                         address: {
 *                             addressLine1: "123 Main St",
 *                             addressLine2: "Unit 1",
 *                             city: "San Francisco",
 *                             stateOrProvince: "CA",
 *                             postalCode: "94105",
 *                             country: "US"
 *                         },
 *                         taxIdProvided: true,
 *                         taxId: {
 *                             ein: {
 *                                 number: "12-3456789"
 *                             }
 *                         },
 *                         ownersProvided: true
 *                     }
 *                 },
 *                 accounts: [{
 *                         accountId: "85866843",
 *                         postalCode: "94105",
 *                         nameOnAccount: "John Doe"
 *                     }],
 *                 paymentMethods: [{
 *                         type: "bankAccount",
 *                         id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *                         accountName: "My Checking Account",
 *                         bankName: "Chase",
 *                         routingNumber: "12345678",
 *                         accountNumber: "99988767623",
 *                         accountType: Mercoa.BankType.Checking,
 *                         status: Mercoa.BankStatus.Verified,
 *                         isDefaultSource: true,
 *                         isDefaultDestination: true,
 *                         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *                         metadata: {},
 *                         frozen: false,
 *                         createdAt: "2021-01-01T00:00:00Z",
 *                         updatedAt: "2021-01-01T00:00:00Z"
 *                     }],
 *                 counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *             },
 *             paymentDestinationConfirmed: true,
 *             hasDocuments: true,
 *             hasSourceEmail: true,
 *             approvers: [],
 *             approvalPolicy: [],
 *             metadata: {},
 *             createdAt: "2021-01-01T00:00:00Z",
 *             updatedAt: "2021-01-01T00:00:00Z"
 *         },
 *         createdAt: "2024-01-01T00:00:00.000Z"
 *     }
 */
export interface InvoiceEvent {
    webhookIds: string[];
    data: Mercoa.InvoiceResponse;
    /** The ID of the user who triggered this event */
    userId?: Mercoa.EntityUserId;
    createdAt: Date;
}
