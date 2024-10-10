/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         roles: ["admin", "approver"],
 *         entityId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"
 *     }
 *
 * @example
 *     {
 *         roles: ["viewer"],
 *         entityId: "ent_9e02a20e-7749-47de-8d8a-f8ff2859fa90"
 *     }
 */
export interface EntityGroupUserEntityRequest {
    /** List of roles. A role can be any string. For example: "payer", "approver", "viewer" */
    roles: string[];
    /** The IDs of the entities that these roles applies to. */
    entityId: Mercoa.EntityId;
}
