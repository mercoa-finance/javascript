/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         name: {
 *             firstName: "John",
 *             middleName: "Quincy",
 *             lastName: "Adams",
 *             suffix: "Jr."
 *         },
 *         phone: {
 *             countryCode: "1",
 *             number: "4155551234"
 *         },
 *         email: "john.doe@acme.com",
 *         address: {
 *             addressLine1: "123 Main St",
 *             addressLine2: "Unit 1",
 *             city: "San Francisco",
 *             stateOrProvince: "CA",
 *             postalCode: "94105",
 *             country: "US"
 *         },
 *         birthDate: {
 *             day: "1",
 *             month: "1",
 *             year: "1980"
 *         },
 *         governmentId: {
 *             ssn: "123-45-6789"
 *         },
 *         responsibilities: {
 *             isOwner: true,
 *             ownershipPercentage: 40,
 *             isController: true
 *         }
 *     }
 */
export interface RepresentativeRequest {
    name: Mercoa.FullName;
    phone: Mercoa.PhoneNumber;
    email: string;
    address: Mercoa.Address;
    birthDate: Mercoa.BirthDate;
    governmentId: Mercoa.IndividualGovernmentId;
    responsibilities: Mercoa.Responsibilities;
}
