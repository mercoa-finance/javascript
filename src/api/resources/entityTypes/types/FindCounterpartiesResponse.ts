/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         count: 1,
 *         hasMore: false,
 *         data: [{
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
 *                         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *                         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *                     }],
 *                 counterpartyType: [Mercoa.CounterpartyNetworkType.Entity]
 *             }]
 *     }
 */
export interface FindCounterpartiesResponse {
    /** Total number of counterparties for the given filters. This value is not limited by the limit parameter. It is provided so that you can determine how many pages of results are available. */
    count: number;
    /** True if there are more counterparties available for the given filters. */
    hasMore: boolean;
    data: Mercoa.CounterpartyResponse[];
}
