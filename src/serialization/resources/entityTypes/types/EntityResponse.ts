/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "./EntityId";
import { AccountType } from "./AccountType";
import { ProfileResponse } from "./ProfileResponse";
import { EntityStatus } from "./EntityStatus";

export const EntityResponse: core.serialization.ObjectSchema<serializers.EntityResponse.Raw, Mercoa.EntityResponse> =
    core.serialization.object({
        id: EntityId,
        name: core.serialization.string(),
        email: core.serialization.string(),
        foreignId: core.serialization.string().optional(),
        emailTo: core.serialization.string().optional(),
        emailToAlias: core.serialization.list(core.serialization.string()).optional(),
        isCustomer: core.serialization.boolean(),
        accountType: AccountType,
        profile: ProfileResponse,
        status: EntityStatus,
        acceptedTos: core.serialization.boolean(),
        isPayor: core.serialization.boolean(),
        isPayee: core.serialization.boolean(),
        isNetworkPayor: core.serialization.boolean(),
        isNetworkPayee: core.serialization.boolean(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace EntityResponse {
    interface Raw {
        id: EntityId.Raw;
        name: string;
        email: string;
        foreignId?: string | null;
        emailTo?: string | null;
        emailToAlias?: string[] | null;
        isCustomer: boolean;
        accountType: AccountType.Raw;
        profile: ProfileResponse.Raw;
        status: EntityStatus.Raw;
        acceptedTos: boolean;
        isPayor: boolean;
        isPayee: boolean;
        isNetworkPayor: boolean;
        isNetworkPayee: boolean;
        createdAt: string;
        updatedAt: string;
    }
}
