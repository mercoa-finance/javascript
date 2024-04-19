/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../../index";

/**
 * @example
 *     {
 *         name: "string",
 *         networkType: Mercoa.CounterpartyNetworkType.Entity,
 *         paymentMethods: true,
 *         counterpartyId: "string",
 *         limit: 1,
 *         startingAfter: "string"
 *     }
 *
 * @example
 *     {
 *         name: "string",
 *         networkType: Mercoa.CounterpartyNetworkType.Entity,
 *         paymentMethods: true,
 *         counterpartyId: "string",
 *         limit: 1,
 *         startingAfter: "string"
 *     }
 *
 * @example
 *     {
 *         name: "string",
 *         networkType: Mercoa.CounterpartyNetworkType.Entity,
 *         paymentMethods: true,
 *         counterpartyId: "string",
 *         limit: 1,
 *         startingAfter: "string"
 *     }
 *
 * @example
 *     {
 *         name: "string",
 *         networkType: Mercoa.CounterpartyNetworkType.Entity,
 *         paymentMethods: true,
 *         counterpartyId: "string",
 *         limit: 1,
 *         startingAfter: "string"
 *     }
 *
 * @example
 *     {
 *         name: "string",
 *         networkType: Mercoa.CounterpartyNetworkType.Entity,
 *         paymentMethods: true,
 *         counterpartyId: "string",
 *         limit: 1,
 *         startingAfter: "string"
 *     }
 *
 * @example
 *     {
 *         name: "string",
 *         networkType: Mercoa.CounterpartyNetworkType.Entity,
 *         paymentMethods: true,
 *         counterpartyId: "string",
 *         limit: 1,
 *         startingAfter: "string"
 *     }
 *
 * @example
 *     {
 *         name: "string",
 *         networkType: Mercoa.CounterpartyNetworkType.Entity,
 *         paymentMethods: true,
 *         counterpartyId: "string",
 *         limit: 1,
 *         startingAfter: "string"
 *     }
 */
export interface FindPayeeCounterpartiesRequest {
    /**
     * Filter by counterparty name
     */
    name?: string;
    /**
     * Filter by network type. By default, only ENTITY counterparties are returned.
     */
    networkType?: Mercoa.CounterpartyNetworkType | Mercoa.CounterpartyNetworkType[];
    /**
     * If true, will include counterparty payment methods as part of the response
     */
    paymentMethods?: boolean;
    /**
     * Filter by counterparty ids
     */
    counterpartyId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Number of counterparties to return. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * The ID of the counterparties to start after. If not provided, the first page of counterparties will be returned.
     */
    startingAfter?: Mercoa.EntityId;
}
