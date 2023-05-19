/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Mercoa } from "@mercoa/javascript";

export interface EntityUserResponse {
    id: Mercoa.EntityUserId;
    /** Id from external auth provider or your auth system */
    foreignId?: string;
    email?: string;
    name?: string;
    roles: string[];
    createdAt: Date;
    updatedAt: Date;
}