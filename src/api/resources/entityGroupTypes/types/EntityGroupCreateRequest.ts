/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         foreignId: "your-group-id",
 *         name: "AcmeConglomerate",
 *         emailToName: "acmegroup",
 *         entityIds: ["ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"]
 *     }
 */
export interface EntityGroupCreateRequest extends Mercoa.EntityGroupUpdateRequest {
    /** List of entity IDs or foreign IDs */
    entityIds?: Mercoa.EntityId[];
}