/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "ent_123",
 *         name: "Acme Inc.",
 *         email: "customer@acme.com",
 *         acceptedTos: true,
 *         status: Mercoa.EntityStatus.Verified,
 *         isCustomer: true,
 *         isPayor: true,
 *         isPayee: false,
 *         accountType: Mercoa.AccountType.Business,
 *         updatedAt: new Date("2024-01-02T00:00:00.000Z"),
 *         createdAt: new Date("2024-01-01T00:00:00.000Z"),
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
 *                     city: "San Francisco",
 *                     stateOrProvince: "CA",
 *                     postalCode: "94105",
 *                     country: "US"
 *                 },
 *                 taxIdProvided: true,
 *                 ownersProvided: true
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
    status: Mercoa.EntityStatus;
    /** True if this entity has accepted the terms of service. */
    acceptedTos: boolean;
    /** True if this entity can pay invoices. */
    isPayor: boolean;
    /** True if this entity can receive payments. */
    isPayee: boolean;
    createdAt: Date;
    updatedAt: Date;
}
