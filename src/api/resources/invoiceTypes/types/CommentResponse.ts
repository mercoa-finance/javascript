/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "ic_b3525b66-da94-4525-9f31-426bcf657128",
 *         text: "This is a comment",
 *         user: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2024-01-01T00:00:00.000Z")
 *         },
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 *
 * @example
 *     {
 *         id: "ic_b3525b66-da94-4525-9f31-426bcf657128",
 *         text: "This is an approval comment",
 *         user: {
 *             id: "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
 *             foreignId: "MY-DB-ID-12345",
 *             email: "john.doe@acme.com",
 *             name: "John Doe",
 *             roles: ["admin", "approver"],
 *             createdAt: new Date("2024-01-01T00:00:00.000Z"),
 *             updatedAt: new Date("2024-01-01T00:00:00.000Z")
 *         },
 *         associatedApprovalAction: {
 *             userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
 *             action: Mercoa.ApproverAction.Approve
 *         },
 *         createdAt: new Date("2021-01-01T00:00:00.000Z"),
 *         updatedAt: new Date("2021-01-01T00:00:00.000Z")
 *     }
 */
export interface CommentResponse {
    id: string;
    text: string;
    user?: Mercoa.EntityUserResponse;
    /** If an approval action has triggered the generation of this comment, returns the associated approval action and actor */
    associatedApprovalAction?: Mercoa.AssociatedApprovalAction;
    createdAt: Date;
    updatedAt: Date;
}
