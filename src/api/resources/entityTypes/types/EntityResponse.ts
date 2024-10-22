/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         foreignId: "MY-DB-ID-12345",
 *         name: "Acme Inc.",
 *         email: "customer@acme.com",
 *         acceptedTos: true,
 *         status: Mercoa.EntityStatus.Verified,
 *         isCustomer: true,
 *         isPayor: true,
 *         isPayee: false,
 *         isNetworkPayor: false,
 *         isNetworkPayee: false,
 *         accountType: Mercoa.AccountType.Business,
 *         updatedAt: "2024-01-02T00:00:00Z",
 *         createdAt: "2024-01-01T00:00:00Z",
 *         profile: {
 *             business: {
 *                 email: "customer@acme.com",
 *                 legalBusinessName: "Acme Inc.",
 *                 businessType: Mercoa.BusinessType.Llc,
 *                 phone: {
 *                     countryCode: "1",
 *                     number: "4155551234"
 *                 },
 *                 address: {
 *                     addressLine1: "123 Main St",
 *                     addressLine2: "Unit 1",
 *                     city: "San Francisco",
 *                     stateOrProvince: "CA",
 *                     postalCode: "94105",
 *                     country: "US"
 *                 },
 *                 taxIdProvided: true,
 *                 taxId: {
 *                     ein: {
 *                         number: "12-3456789"
 *                     }
 *                 },
 *                 ownersProvided: true
 *             }
 *         }
 *     }
 *
 * @example
 *     {
 *         id: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *         foreignId: "MY-DB-ID-90909",
 *         name: "Big Box Store",
 *         email: "vendor@bigboxstore.com",
 *         acceptedTos: false,
 *         status: Mercoa.EntityStatus.Unverified,
 *         isCustomer: false,
 *         isPayor: false,
 *         isPayee: true,
 *         isNetworkPayor: false,
 *         isNetworkPayee: false,
 *         accountType: Mercoa.AccountType.Business,
 *         updatedAt: "2024-01-02T00:00:00Z",
 *         createdAt: "2024-01-01T00:00:00Z",
 *         profile: {
 *             business: {
 *                 email: "vendor@bigboxstore.com",
 *                 legalBusinessName: "Big Box Store",
 *                 businessType: Mercoa.BusinessType.PublicCorporation,
 *                 taxIdProvided: false,
 *                 ownersProvided: false
 *             }
 *         }
 *     }
 */
export interface EntityResponse {
    id: Mercoa.EntityId;
    name: string;
    email: string;
    /** The ID used to identify this entity in your system */
    foreignId?: string;
    /** Local-part/username of the email address to which to send invoices to be added to the Invoice Inbox. */
    emailTo?: string;
    /** Email inbox alias addresses. Used when forwarding emails to the emailTo address from an alias. */
    emailToAlias?: string[];
    /** True if this entity has a direct relationship with your organization. */
    isCustomer: boolean;
    accountType: Mercoa.AccountType;
    profile: Mercoa.ProfileResponse;
    /** URL for the entity logo */
    logo?: string;
    status: Mercoa.EntityStatus;
    /** True if this entity has accepted the terms of service. */
    acceptedTos: boolean;
    /** True if this entity can pay invoices. */
    isPayor: boolean;
    /** True if this entity can receive payments. */
    isPayee: boolean;
    /** True if this entity is available as a payor to any entity on your platform. Otherwise this entity will only be available as a payor to entities that have a direct relationship with this entity. */
    isNetworkPayor: boolean;
    /** True if this entity is available as a payee to any entity on your platform. Otherwise this entity will only be available as a payee to entities that have a direct relationship with this entity. */
    isNetworkPayee: boolean;
    /** Simple key/value metadata associated with this entity. For more complex metadata, use the Metadata API. */
    metadata?: Record<string, string>;
    createdAt: Date;
    updatedAt: Date;
}
