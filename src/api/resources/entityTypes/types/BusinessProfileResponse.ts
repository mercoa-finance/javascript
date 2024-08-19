/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         email: "customer@acme.com",
 *         legalBusinessName: "Acme Inc.",
 *         businessType: Mercoa.BusinessType.Llc,
 *         phone: {
 *             countryCode: "1",
 *             number: "4155551234"
 *         },
 *         address: {
 *             addressLine1: "123 Main St",
 *             addressLine2: "Unit 1",
 *             city: "San Francisco",
 *             stateOrProvince: "CA",
 *             postalCode: "94105",
 *             country: "US"
 *         },
 *         taxIdProvided: true,
 *         ownersProvided: true
 *     }
 *
 * @example
 *     {
 *         email: "vendor@bigboxstore.com",
 *         legalBusinessName: "Big Box Store",
 *         businessType: Mercoa.BusinessType.PublicCorporation,
 *         taxIdProvided: false,
 *         ownersProvided: false
 *     }
 */
export interface BusinessProfileResponse {
    email?: string;
    legalBusinessName: string;
    businessType?: Mercoa.BusinessType;
    phone?: Mercoa.PhoneNumber;
    doingBusinessAs?: string;
    website?: string;
    description?: string;
    address?: Mercoa.Address;
    /** True if all representatives have been provided for this business. */
    ownersProvided?: boolean;
    taxIdProvided: boolean;
    industryCodes?: Mercoa.IndustryCodes;
    averageMonthlyTransactionVolume?: number;
    averageTransactionSize?: number;
    maxTransactionSize?: number;
}
