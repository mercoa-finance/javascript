/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         foreignId: "MY-DB-ID-12345",
 *         email: "john.doe@acme.com",
 *         name: "John Doe",
 *         entities: [{
 *                 roles: ["admin", "approver"],
 *                 entityId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"
 *             }, {
 *                 roles: ["viewer"],
 *                 entityId: "ent_574s93r-3943-fu39-g9dfr-33b42a55812c"
 *             }]
 *     }
 */
export interface EntityGroupUserRequest {
    /** The ID used to identify this user in your system. This is a required field and needs to be unique for all users in the group. */
    foreignId: string;
    email?: string;
    name?: string;
    /** List of roles per entity. By default, the user will have no roles. */
    entities?: Mercoa.EntityGroupUserEntityRequest[];
}
