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
 *             updatedAt: "2024-01-02T00:00:00Z",
 *             createdAt: "2024-01-01T00:00:00Z",
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
 *                     taxId: {
 *                         ein: {
 *                             number: "12-3456789"
 *                         }
 *                     },
 *                     ownersProvided: true
 *                 }
 *             }
 *         },
 *         updatedByEntityId: "admin",
 *         user: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: "2024-01-01T00:00:00Z",
 *             updatedAt: "2024-01-01T00:00:00Z"
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
 *             updatedAt: "2024-01-02T00:00:00Z",
 *             createdAt: "2024-01-01T00:00:00Z",
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
 *                     taxId: {
 *                         ein: {
 *                             number: "12-3456789"
 *                         }
 *                     },
 *                     ownersProvided: true
 *                 }
 *             }
 *         },
 *         updatedByEntityId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *         user: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: "2024-01-01T00:00:00Z",
 *             updatedAt: "2024-01-01T00:00:00Z"
 *         }
 *     }
 */
export interface EntityWebhook {
    /** The type of the event. */
    eventType: string;
    /** The entity involved in the event. */
    entity: Mercoa.EntityResponse;
    /**
     * The ID of the entity that updated the entity. This will be different from the entityId if the entity was updated by a different entity (e.g. a C2 updating a C3).
     * If the entity was created or updated by an admin, this will be 'admin'.
     */
    updatedByEntityId: Mercoa.EntityId;
    /** User who initiated the change. */
    user?: Mercoa.EntityUserResponse;
}
