/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface EntityResponse {
    id: Mercoa.EntityId;
    foreignId?: string;
    emailTo?: string;
    emailToAlias?: string[];
    ownedByOrg: boolean;
    accountType: Mercoa.entity.AccountType;
    name: string;
    email: string;
    profile: Mercoa.entity.ProfileResponse;
    status: Mercoa.entity.EntityStatus;
    acceptedTos: boolean;
    /** True if this entity can pay invoices. */
    isPayor: boolean;
    /** True if this entity can receive payments. */
    isPayee: boolean;
    createdAt: Date;
    updatedAt: Date;
}
