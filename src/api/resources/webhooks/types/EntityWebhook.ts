/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         eventType: "entity.created",
 *         entity: {
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
 *             }
 *         },
 *         user: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2024-01-01T00:00:00.000Z")
 *         }
 *     }
 *
 * @example
 *     {
 *         eventType: "entity.updated",
 *         entity: {
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
 *             }
 *         },
 *         user: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2024-01-01T00:00:00.000Z")
 *         }
 *     }
 */
export interface EntityWebhook {
    eventType: string;
    entity: Mercoa.EntityResponse;
    /** User who initiated the change. */
    user?: Mercoa.EntityUserResponse;
}
