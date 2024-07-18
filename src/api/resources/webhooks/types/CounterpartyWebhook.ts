/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         eventType: "counterparty.added",
 *         payeeId: ["ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
 *         payorId: ["ent_8545a84e-a45f-41bf-bdf1-33b42a55812c"],
 *         user: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2024-01-01T00:00:00.000Z")
 *         }
 *     }
 *
 * @example
 *     {
 *         eventType: "counterparty.hidden",
 *         payeeId: ["ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
 *         payorId: ["ent_8545a84e-a45f-41bf-bdf1-33b42a55812c"],
 *         user: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2024-01-01T00:00:00.000Z")
 *         }
 *     }
 */
export interface CounterpartyWebhook {
    eventType: string;
    payeeId: Mercoa.EntityId[];
    payorId: Mercoa.EntityId[];
    /** User who initiated the change. */
    user?: Mercoa.EntityUserResponse;
}
