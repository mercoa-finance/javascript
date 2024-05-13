/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         isCustomer: true,
 *         isPayor: true,
 *         isPayee: false,
 *         accountType: Mercoa.AccountType.Business,
 *         foreignId: "MY-DB-ID-12345",
 *         profile: {
 *             business: {
 *                 email: "customer@acme.com",
 *                 legalBusinessName: "Acme Inc.",
 *                 website: "http://www.acme.com",
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
 *                 taxId: {
 *                     ein: {
 *                         number: "12-3456789"
 *                     }
 *                 }
 *             }
 *         }
 *     }
 */
export interface EntityRequest {
    /** The ID used to identify this entity in your system. This ID must be unique across all entities in your system. */
    foreignId?: string;
    /** Sets the email address to which to send invoices to be added to the Invoice Inbox. Only provide the local-part/username of the email address, do not include the @domain.com */
    emailTo?: string;
    /** Email inbox alias addresses. Used when forwarding emails to the emailTo address from an alias. Include the full email address. */
    emailToAlias?: string[];
    /** If this entity has a direct relationship with your organization (e.g your direct customer or client), set this to true. Otherwise, set to false (e.g your customer's vendors). */
    isCustomer: boolean;
    accountType: Mercoa.AccountType;
    profile: Mercoa.ProfileRequest;
    /** If this entity will be paying invoices, set this to true. */
    isPayor: boolean;
    /** If this entity will be receiving payments, set this to true. */
    isPayee: boolean;
    /** Base64 encoded PNG image data for the entity logo. */
    logo?: string;
}
