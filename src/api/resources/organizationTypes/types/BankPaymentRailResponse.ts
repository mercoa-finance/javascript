/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface BankPaymentRailResponse extends Mercoa.GenericPaymentRailResponse {
    availableDeliveryMethods: Mercoa.BankDeliveryMethod[];
    defaultDeliveryMethod: Mercoa.BankDeliveryMethod;
}
