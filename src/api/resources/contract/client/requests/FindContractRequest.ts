/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../index";

/**
 * @example
 *     {
 *         creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c"
 *     }
 */
export interface FindContractRequest {
    /**
     * ID of the entity that created the contracts
     */
    creatorEntityId?: Mercoa.EntityId;
}
