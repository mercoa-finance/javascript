/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

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
