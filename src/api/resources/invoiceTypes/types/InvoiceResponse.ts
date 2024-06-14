/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "inv_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *         status: Mercoa.InvoiceStatus.Paid,
 *         amount: 100,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         invoiceDate: new Date("2021-01-01T00:00:00.000Z"),
 *         deductionDate: new Date("2021-01-01T00:00:00.000Z"),
 *         settlementDate: new Date("2021-01-03T00:00:00.000Z"),
 *         dueDate: new Date("2021-01-31T00:00:00.000Z"),
 *         invoiceNumber: "INV-123",
 *         noteToSelf: "For the month of January",
 *         serviceStartDate: new Date("2021-01-01T00:00:00.000Z"),
 *         serviceEndDate: new Date("2021-01-31T00:00:00.000Z"),
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         payer: {
 *             id: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *             foreignId: "MY-DB-ID-12345",
 *             name: "Acme Inc.",
 *             email: "customer@acme.com",
 *             acceptedTos: true,
 *             status: Mercoa.EntityStatus.Verified,
 *             isCustomer: true,
 *             isPayor: true,
 *             isPayee: false,
 *             isNetworkPayor: false,
 *             isNetworkPayee: false,
 *             accountType: Mercoa.AccountType.Business,
 *             updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             profile: {
 *                 business: {
 *                     email: "customer@acme.com",
 *                     legalBusinessName: "Acme Inc.",
 *                     businessType: Mercoa.BusinessType.Llc,
 *                     phone: {
 *                         countryCode: "1",
 *                         number: "4155551234"
 *                     },
 *                     address: {
 *                         addressLine1: "123 Main St",
 *                         addressLine2: "Unit 1",
 *                         city: "San Francisco",
 *                         stateOrProvince: "CA",
 *                         postalCode: "94105",
 *                         country: "US"
 *                     },
 *                     taxIdProvided: true,
 *                     ownersProvided: true
 *                 }
 *             },
 *             paymentMethods: [{
 *                     type: "bankAccount",
 *                     id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *                     accountName: "My Checking Account",
 *                     bankName: "Chase",
 *                     routingNumber: "12345678",
 *                     accountNumber: "99988767623",
 *                     accountType: Mercoa.BankType.Checking,
 *                     status: Mercoa.BankStatus.Verified,
 *                     isDefaultSource: true,
 *                     isDefaultDestination: true,
 *                     supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         paymentSource: {
 *             type: "bankAccount",
 *             id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *             accountName: "My Checking Account",
 *             bankName: "Chase",
 *             routingNumber: "12345678",
 *             accountNumber: "99988767623",
 *             accountType: Mercoa.BankType.Checking,
 *             status: Mercoa.BankStatus.Verified,
 *             isDefaultSource: true,
 *             isDefaultDestination: true,
 *             supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         },
 *         paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
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
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         paymentDestination: {
 *             type: "check",
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
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         },
 *         paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
 *         paymentDestinationOptions: {
 *             type: "check",
 *             delivery: Mercoa.CheckDeliveryMethod.Mail
 *         },
 *         paymentDestinationConfirmed: true,
 *         hasDocuments: true,
 *         hasSourceEmail: true,
 *         comments: [{
 *                 id: "ic_b3525b66-da94-4525-9f31-426bcf657128",
 *                 text: "This is an approval comment",
 *                 user: {
 *                     id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *                     foreignId: "MY-DB-ID-12345",
 *                     email: "john.doe@acme.com",
 *                     name: "John Doe",
 *                     roles: ["admin", "approver"],
 *                     createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2024-01-01T00:00:00.000Z")
 *                 },
 *                 associatedApprovalAction: {
 *                     userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
 *                     action: Mercoa.ApproverAction.Approve
 *                 },
 *                 createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                 updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *             }],
 *         lineItems: [{
 *                 id: "inli_26672f38-eb9a-48f1-a7a0-f1b855e38cd7",
 *                 amount: 100,
 *                 currency: Mercoa.CurrencyCode.Usd,
 *                 description: "Product A",
 *                 name: "Product A",
 *                 quantity: 1,
 *                 unitPrice: 100,
 *                 serviceStartDate: new Date("2021-01-01T00:00:00.000Z"),
 *                 serviceEndDate: new Date("2021-01-31T00:00:00.000Z"),
 *                 metadata: {
 *                     "key1": "value1",
 *                     "key2": "value2"
 *                 },
 *                 glAccountId: "600394",
 *                 createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                 updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *             }],
 *         approvers: [{
 *                 approvalPolicyId: "apvl_5ce50275-1789-42ea-bc60-bb7e6d03635c",
 *                 approvalSlotId: "inap_9bb311c9-7c15-4c9e-8148-63814e0abec6",
 *                 assignedUserId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
 *                 action: Mercoa.ApproverAction.Approve,
 *                 eligibleUserIds: ["user_e24fc81c-c5ee-47e8-af42-4fe29d895506"],
 *                 eligibleRoles: ["admin"],
 *                 date: new Date("2021-01-01T00:00:00.000Z")
 *             }],
 *         approvalPolicy: [{
 *                 id: "apvl_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *                 trigger: [{
 *                         type: "amount",
 *                         amount: 100,
 *                         currency: Mercoa.CurrencyCode.Usd
 *                     }],
 *                 rule: {
 *                     type: "approver",
 *                     numApprovers: 2,
 *                     identifierList: {
 *                         type: "rolesList",
 *                         value: ["Admin", "Controller"]
 *                     }
 *                 },
 *                 upstreamPolicyId: "root"
 *             }],
 *         metadata: {
 *             "key1": "value1",
 *             "key2": "value2"
 *         },
 *         foreignId: "YOUR-DATABASE-ID",
 *         creatorUser: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2024-01-01T00:00:00.000Z")
 *         },
 *         processedAt: new Date("2021-01-01T00:00:00.000Z"),
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         id: "inv_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *         status: Mercoa.InvoiceStatus.Draft,
 *         amount: 100,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         invoiceDate: new Date("2021-01-01T00:00:00.000Z"),
 *         dueDate: new Date("2021-01-31T00:00:00.000Z"),
 *         invoiceNumber: "INV-123",
 *         noteToSelf: "For the month of January",
 *         serviceStartDate: new Date("2021-01-01T00:00:00.000Z"),
 *         serviceEndDate: new Date("2021-01-31T00:00:00.000Z"),
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         payer: {
 *             id: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *             foreignId: "MY-DB-ID-12345",
 *             name: "Acme Inc.",
 *             email: "customer@acme.com",
 *             acceptedTos: true,
 *             status: Mercoa.EntityStatus.Verified,
 *             isCustomer: true,
 *             isPayor: true,
 *             isPayee: false,
 *             isNetworkPayor: false,
 *             isNetworkPayee: false,
 *             accountType: Mercoa.AccountType.Business,
 *             updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             profile: {
 *                 business: {
 *                     email: "customer@acme.com",
 *                     legalBusinessName: "Acme Inc.",
 *                     businessType: Mercoa.BusinessType.Llc,
 *                     phone: {
 *                         countryCode: "1",
 *                         number: "4155551234"
 *                     },
 *                     address: {
 *                         addressLine1: "123 Main St",
 *                         addressLine2: "Unit 1",
 *                         city: "San Francisco",
 *                         stateOrProvince: "CA",
 *                         postalCode: "94105",
 *                         country: "US"
 *                     },
 *                     taxIdProvided: true,
 *                     ownersProvided: true
 *                 }
 *             },
 *             paymentMethods: [{
 *                     type: "bankAccount",
 *                     id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *                     accountName: "My Checking Account",
 *                     bankName: "Chase",
 *                     routingNumber: "12345678",
 *                     accountNumber: "99988767623",
 *                     accountType: Mercoa.BankType.Checking,
 *                     status: Mercoa.BankStatus.Verified,
 *                     isDefaultSource: true,
 *                     isDefaultDestination: true,
 *                     supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
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
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         paymentDestinationConfirmed: false,
 *         hasDocuments: true,
 *         hasSourceEmail: true,
 *         comments: [],
 *         lineItems: [{
 *                 id: "inli_26672f38-eb9a-48f1-a7a0-f1b855e38cd7",
 *                 amount: 100,
 *                 currency: Mercoa.CurrencyCode.Usd,
 *                 description: "Product A",
 *                 name: "Product A",
 *                 quantity: 1,
 *                 unitPrice: 100,
 *                 serviceStartDate: new Date("2021-01-01T00:00:00.000Z"),
 *                 serviceEndDate: new Date("2021-01-31T00:00:00.000Z"),
 *                 metadata: {
 *                     "key1": "value1",
 *                     "key2": "value2"
 *                 },
 *                 glAccountId: "600394",
 *                 createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                 updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *             }],
 *         approvers: [],
 *         approvalPolicy: [],
 *         metadata: {},
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         id: "inv_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *         status: Mercoa.InvoiceStatus.Draft,
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         payer: {
 *             id: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *             foreignId: "MY-DB-ID-12345",
 *             name: "Acme Inc.",
 *             email: "customer@acme.com",
 *             acceptedTos: true,
 *             status: Mercoa.EntityStatus.Verified,
 *             isCustomer: true,
 *             isPayor: true,
 *             isPayee: false,
 *             isNetworkPayor: false,
 *             isNetworkPayee: false,
 *             accountType: Mercoa.AccountType.Business,
 *             updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             profile: {
 *                 business: {
 *                     email: "customer@acme.com",
 *                     legalBusinessName: "Acme Inc.",
 *                     businessType: Mercoa.BusinessType.Llc,
 *                     phone: {
 *                         countryCode: "1",
 *                         number: "4155551234"
 *                     },
 *                     address: {
 *                         addressLine1: "123 Main St",
 *                         addressLine2: "Unit 1",
 *                         city: "San Francisco",
 *                         stateOrProvince: "CA",
 *                         postalCode: "94105",
 *                         country: "US"
 *                     },
 *                     taxIdProvided: true,
 *                     ownersProvided: true
 *                 }
 *             },
 *             paymentMethods: [{
 *                     type: "bankAccount",
 *                     id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *                     accountName: "My Checking Account",
 *                     bankName: "Chase",
 *                     routingNumber: "12345678",
 *                     accountNumber: "99988767623",
 *                     accountType: Mercoa.BankType.Checking,
 *                     status: Mercoa.BankStatus.Verified,
 *                     isDefaultSource: true,
 *                     isDefaultDestination: true,
 *                     supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         paymentDestinationConfirmed: true,
 *         hasDocuments: true,
 *         hasSourceEmail: true,
 *         approvers: [],
 *         approvalPolicy: [],
 *         metadata: {},
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         id: "inv_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *         status: Mercoa.InvoiceStatus.New,
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         payer: {
 *             id: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *             foreignId: "MY-DB-ID-12345",
 *             name: "Acme Inc.",
 *             email: "customer@acme.com",
 *             acceptedTos: true,
 *             status: Mercoa.EntityStatus.Verified,
 *             isCustomer: true,
 *             isPayor: true,
 *             isPayee: false,
 *             isNetworkPayor: false,
 *             isNetworkPayee: false,
 *             accountType: Mercoa.AccountType.Business,
 *             updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             profile: {
 *                 business: {
 *                     email: "customer@acme.com",
 *                     legalBusinessName: "Acme Inc.",
 *                     businessType: Mercoa.BusinessType.Llc,
 *                     phone: {
 *                         countryCode: "1",
 *                         number: "4155551234"
 *                     },
 *                     address: {
 *                         addressLine1: "123 Main St",
 *                         addressLine2: "Unit 1",
 *                         city: "San Francisco",
 *                         stateOrProvince: "CA",
 *                         postalCode: "94105",
 *                         country: "US"
 *                     },
 *                     taxIdProvided: true,
 *                     ownersProvided: true
 *                 }
 *             },
 *             paymentMethods: [{
 *                     type: "bankAccount",
 *                     id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *                     accountName: "My Checking Account",
 *                     bankName: "Chase",
 *                     routingNumber: "12345678",
 *                     accountNumber: "99988767623",
 *                     accountType: Mercoa.BankType.Checking,
 *                     status: Mercoa.BankStatus.Verified,
 *                     isDefaultSource: true,
 *                     isDefaultDestination: true,
 *                     supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
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
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         currency: Mercoa.CurrencyCode.Usd,
 *         amount: 100,
 *         invoiceDate: new Date("2021-01-01T00:00:00.000Z"),
 *         dueDate: new Date("2021-01-31T00:00:00.000Z"),
 *         paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         paymentSource: {
 *             type: "bankAccount",
 *             id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *             accountName: "My Checking Account",
 *             bankName: "Chase",
 *             routingNumber: "12345678",
 *             accountNumber: "99988767623",
 *             accountType: Mercoa.BankType.Checking,
 *             status: Mercoa.BankStatus.Verified,
 *             isDefaultSource: true,
 *             isDefaultDestination: true,
 *             supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         },
 *         paymentDestinationConfirmed: true,
 *         hasDocuments: true,
 *         hasSourceEmail: true,
 *         approvers: [],
 *         approvalPolicy: [],
 *         metadata: {},
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         id: "inv_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *         status: Mercoa.InvoiceStatus.Scheduled,
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         payer: {
 *             id: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *             foreignId: "MY-DB-ID-12345",
 *             name: "Acme Inc.",
 *             email: "customer@acme.com",
 *             acceptedTos: true,
 *             status: Mercoa.EntityStatus.Verified,
 *             isCustomer: true,
 *             isPayor: true,
 *             isPayee: false,
 *             isNetworkPayor: false,
 *             isNetworkPayee: false,
 *             accountType: Mercoa.AccountType.Business,
 *             updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             profile: {
 *                 business: {
 *                     email: "customer@acme.com",
 *                     legalBusinessName: "Acme Inc.",
 *                     businessType: Mercoa.BusinessType.Llc,
 *                     phone: {
 *                         countryCode: "1",
 *                         number: "4155551234"
 *                     },
 *                     address: {
 *                         addressLine1: "123 Main St",
 *                         addressLine2: "Unit 1",
 *                         city: "San Francisco",
 *                         stateOrProvince: "CA",
 *                         postalCode: "94105",
 *                         country: "US"
 *                     },
 *                     taxIdProvided: true,
 *                     ownersProvided: true
 *                 }
 *             },
 *             paymentMethods: [{
 *                     type: "bankAccount",
 *                     id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *                     accountName: "My Checking Account",
 *                     bankName: "Chase",
 *                     routingNumber: "12345678",
 *                     accountNumber: "99988767623",
 *                     accountType: Mercoa.BankType.Checking,
 *                     status: Mercoa.BankStatus.Verified,
 *                     isDefaultSource: true,
 *                     isDefaultDestination: true,
 *                     supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
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
 *                     createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                     updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                 }],
 *             counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *         },
 *         currency: Mercoa.CurrencyCode.Usd,
 *         amount: 100,
 *         invoiceDate: new Date("2021-01-01T00:00:00.000Z"),
 *         dueDate: new Date("2021-01-31T00:00:00.000Z"),
 *         paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         paymentSource: {
 *             type: "bankAccount",
 *             id: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *             accountName: "My Checking Account",
 *             bankName: "Chase",
 *             routingNumber: "12345678",
 *             accountNumber: "99988767623",
 *             accountType: Mercoa.BankType.Checking,
 *             status: Mercoa.BankStatus.Verified,
 *             isDefaultSource: true,
 *             isDefaultDestination: true,
 *             supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         },
 *         paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
 *         paymentDestination: {
 *             type: "check",
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
 *             createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *         },
 *         deductionDate: new Date("2021-01-29T00:00:00.000Z"),
 *         paymentDestinationConfirmed: true,
 *         hasDocuments: true,
 *         hasSourceEmail: true,
 *         approvers: [],
 *         approvalPolicy: [],
 *         metadata: {},
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 */
export interface InvoiceResponse {
    id: Mercoa.InvoiceId;
    status: Mercoa.InvoiceStatus;
    /** Total amount of invoice in major units */
    amount?: number;
    /** Currency code for the amount. Defaults to USD. */
    currency?: Mercoa.CurrencyCode;
    /** Date the invoice was issued. */
    invoiceDate?: Date;
    /** Date when funds will be deducted from payer's account. */
    deductionDate?: Date;
    /** Date of funds settlement. */
    settlementDate?: Date;
    /** Due date of invoice. */
    dueDate?: Date;
    invoiceNumber?: string;
    noteToSelf?: string;
    serviceStartDate?: Date;
    serviceEndDate?: Date;
    payerId?: Mercoa.EntityId;
    payer?: Mercoa.CounterpartyResponse;
    paymentSource?: Mercoa.PaymentMethodResponse;
    paymentSourceId?: Mercoa.PaymentMethodId;
    vendorId?: Mercoa.EntityId;
    vendor?: Mercoa.CounterpartyResponse;
    paymentDestination?: Mercoa.PaymentMethodResponse;
    paymentDestinationId?: Mercoa.PaymentMethodId;
    paymentDestinationOptions?: Mercoa.PaymentDestinationOptions;
    /** True if the payment destination has been confirmed by the vendor. False if the payment destination has been set (for example, a check to an address) but has not been confirmed by the vendor. */
    paymentDestinationConfirmed: boolean;
    /** True if the invoice has documents attached. */
    hasDocuments: boolean;
    /** True if the invoice was created by an incoming email. */
    hasSourceEmail: boolean;
    comments?: Mercoa.CommentResponse[];
    lineItems?: Mercoa.InvoiceLineItemResponse[];
    approvers: Mercoa.ApprovalSlot[];
    approvalPolicy: Mercoa.ApprovalPolicyResponse[];
    /** Metadata associated with this invoice. */
    metadata: Record<string, string>;
    /** The ID used to identify this invoice in your system. This ID must be unique within each creatorEntity in your system, e.g. two invoices with the same creatorEntity may not have the same foreign ID. */
    foreignId?: string;
    /** Entity user who created this invoice. */
    creatorUser?: Mercoa.EntityUserResponse;
    /** If the invoice failed to be paid, this field will be populated with the type of failure. */
    failureType?: Mercoa.InvoiceFailureType;
    processedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    /** Fees associated with this invoice. */
    fees?: Mercoa.InvoiceFeesResponse;
}
