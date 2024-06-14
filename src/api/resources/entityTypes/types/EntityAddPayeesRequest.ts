/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         payees: ["ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
 *         customizations: [{
 *                 counterpartyId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *                 accountId: "85866843"
 *             }]
 *     }
 */
export interface EntityAddPayeesRequest {
    /** List of payee entity IDs to associate with the entity */
    payees: Mercoa.EntityId[];
    /** List of customizations to apply to the payees. If the payee is not currently a counterparty of the entity, the counterparty will be created with the provided customizations. */
    customizations?: Mercoa.CounterpartyCustomizationRequest[];
}
