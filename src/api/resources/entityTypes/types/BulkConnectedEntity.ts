/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced",
 *         linkCreatedAsPayor: false,
 *         linkCreatedAsPayee: true
 *     }
 *
 * @example
 *     {
 *         id: "ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced",
 *         linkCreatedAsPayor: true,
 *         linkCreatedAsPayee: false
 *     }
 */
export interface BulkConnectedEntity {
    /** The ID of the entity to connect to. */
    id: Mercoa.EntityId;
    /** If true, the created entities will be linked to the connected entity as a payor (customer). */
    linkCreatedAsPayor: boolean;
    /** If true, the created entities will be linked to the connected entity as a payee (vendor). */
    linkCreatedAsPayee: boolean;
}
