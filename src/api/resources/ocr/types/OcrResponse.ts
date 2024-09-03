/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         invoice: {
 *             id: "inv_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *             status: Mercoa.InvoiceStatus.Draft,
 *             amount: 100,
 *             currency: Mercoa.CurrencyCode.Usd,
 *             invoiceDate: new Date("2021-01-01T00:00:00.000Z"),
 *             dueDate: new Date("2021-01-31T00:00:00.000Z"),
 *             invoiceNumber: "INV-123",
 *             noteToSelf: "For the month of January",
 *             serviceStartDate: new Date("2021-01-01T00:00:00.000Z"),
 *             serviceEndDate: new Date("2021-01-31T00:00:00.000Z"),
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
 *                 updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *                 createdAt: new Date("2024-01-01T00:00:00.000Z"),
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
 *                         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                     }],
 *                 counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *             },
 *             vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *             vendor: {
 *                 id: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *                 foreignId: "MY-DB-ID-90909",
 *                 name: "Big Box Store",
 *                 email: "vendor@bigboxstore.com",
 *                 acceptedTos: false,
 *                 status: Mercoa.EntityStatus.Unverified,
 *                 isCustomer: false,
 *                 isPayor: false,
 *                 isPayee: true,
 *                 isNetworkPayor: false,
 *                 isNetworkPayee: false,
 *                 accountType: Mercoa.AccountType.Business,
 *                 updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *                 createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *                 profile: {
 *                     business: {
 *                         email: "vendor@bigboxstore.com",
 *                         legalBusinessName: "Big Box Store",
 *                         businessType: Mercoa.BusinessType.PublicCorporation,
 *                         taxIdProvided: false,
 *                         ownersProvided: false
 *                     }
 *                 },
 *                 paymentMethods: [{
 *                         type: "bankAccount",
 *                         id: "pm_7610541f-4619-4033-8620-cfccfb811293",
 *                         accountName: "Vendor Checking Account",
 *                         bankName: "Chase",
 *                         routingNumber: "66554433",
 *                         accountNumber: "55934059697648",
 *                         accountType: Mercoa.BankType.Checking,
 *                         status: Mercoa.BankStatus.New,
 *                         isDefaultSource: true,
 *                         isDefaultDestination: true,
 *                         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *                         metadata: {},
 *                         frozen: false,
 *                         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                     }],
 *                 counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *             },
 *             paymentDestinationConfirmed: false,
 *             hasDocuments: true,
 *             hasSourceEmail: true,
 *             comments: [],
 *             lineItems: [{
 *                     id: "inli_26672f38-eb9a-48f1-a7a0-f1b855e38cd7",
 *                     amount: 100,
 *                     currency: Mercoa.CurrencyCode.Usd,
 *                     description: "Product A",
 *                     name: "Product A",
 *                     quantity: 1,
 *                     unitPrice: 100,
 *                     category: Mercoa.InvoiceLineItemCategory.Expense,
 *                     serviceStartDate: new Date("2021-01-01T00:00:00.000Z"),
 *                     serviceEndDate: new Date("2021-01-31T00:00:00.000Z"),
 *                     metadata: {
 *                         "key1": "value1",
 *                         "key2": "value2"
 *                     },
 *                     glAccountId: "600394",
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             approvers: [],
 *             approvalPolicy: [],
 *             metadata: {},
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         },
 *         vendor: {
 *             id: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *             foreignId: "MY-DB-ID-90909",
 *             name: "Big Box Store",
 *             email: "vendor@bigboxstore.com",
 *             acceptedTos: false,
 *             status: Mercoa.EntityStatus.Unverified,
 *             isCustomer: false,
 *             isPayor: false,
 *             isPayee: true,
 *             isNetworkPayor: false,
 *             isNetworkPayee: false,
 *             accountType: Mercoa.AccountType.Business,
 *             updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             profile: {
 *                 business: {
 *                     email: "vendor@bigboxstore.com",
 *                     legalBusinessName: "Big Box Store",
 *                     businessType: Mercoa.BusinessType.PublicCorporation,
 *                     taxIdProvided: false,
 *                     ownersProvided: false
 *                 }
 *             },
 *             paymentMethods: [{
 *                     type: "bankAccount",
 *                     id: "pm_7610541f-4619-4033-8620-cfccfb811293",
 *                     accountName: "Vendor Checking Account",
 *                     bankName: "Chase",
 *                     routingNumber: "66554433",
 *                     accountNumber: "55934059697648",
 *                     accountType: Mercoa.BankType.Checking,
 *                     status: Mercoa.BankStatus.New,
 *                     isDefaultSource: true,
 *                     isDefaultDestination: true,
 *                     supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *                     metadata: {},
 *                     frozen: false,
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         check: {
 *             id: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
 *             payToTheOrderOf: "John Doe",
 *             addressLine1: "123 Main St",
 *             addressLine2: "Apt 1",
 *             city: "New York",
 *             stateOrProvince: "NY",
 *             postalCode: "10001",
 *             country: "US",
 *             isDefaultSource: false,
 *             isDefaultDestination: true,
 *             supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *             metadata: {},
 *             frozen: false,
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         },
 *         bankAccount: {
 *             id: "pm_7610541f-4619-4033-8620-cfccfb811293",
 *             accountName: "Vendor Checking Account",
 *             bankName: "Chase",
 *             routingNumber: "66554433",
 *             accountNumber: "55934059697648",
 *             accountType: Mercoa.BankType.Checking,
 *             status: Mercoa.BankStatus.New,
 *             isDefaultSource: true,
 *             isDefaultDestination: true,
 *             supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *             metadata: {},
 *             frozen: false,
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         }
 *     }
 */
export interface OcrResponse {
    invoice: Mercoa.InvoiceResponse;
    vendor: Mercoa.CounterpartyResponse;
    check?: Mercoa.CheckResponse;
    bankAccount?: Mercoa.BankAccountResponse;
}
