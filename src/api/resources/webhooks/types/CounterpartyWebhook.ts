/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         eventType: "counterparty.added",
 *         payeeId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *         payorId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c"
 *     }
 *
 * @example
 *     {
 *         eventType: "counterparty.hidden",
 *         payeeId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *         payorId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c"
 *     }
 */
export interface CounterpartyWebhook {
    eventType: string;
    payeeId: Mercoa.EntityId;
    payorId: Mercoa.EntityId;
}
