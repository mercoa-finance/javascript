/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface CounterpartyResponse extends Mercoa.EntityResponse {
    paymentMethods: Mercoa.PaymentMethodResponse[];
    counterpartyType: Mercoa.CounterpartyNetworkType[];
}
