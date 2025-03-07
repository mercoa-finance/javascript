/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *         foreignId: "MY-DB-ID-12345",
 *         email: "john.doe@acme.com",
 *         name: "John Doe",
 *         roles: ["admin", "approver"],
 *         createdAt: "2024-01-01T00:00:00Z",
 *         updatedAt: "2024-01-01T00:00:00Z"
 *     }
 */
export interface EntityUserResponse {
    id: Mercoa.EntityUserId;
    /** The ID used to identify this user in your system. */
    foreignId?: string;
    email?: string;
    name?: string;
    roles: string[];
    createdAt: Date;
    updatedAt: Date;
}
