/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         delivery: Mercoa.CheckDeliveryMethod.Mail,
 *         printDescription: true
 *     }
 */
export interface CheckPaymentDestinationOptions {
    /** Delivery method for check disbursements. Defaults to MAIL. */
    delivery?: Mercoa.CheckDeliveryMethod;
    /** If true, prints the invoice description (noteToSelf) on the check note. Defaults to false. */
    printDescription?: boolean;
}
