/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../..";

export interface FindCounterpartiesRequest {
    /**
     * include payment method information in response
     */
    paymentMethods?: boolean;
    /**
     * filter by counterparty ids
     */
    counterpartyId?: Mercoa.EntityId | Mercoa.EntityId[];
}
