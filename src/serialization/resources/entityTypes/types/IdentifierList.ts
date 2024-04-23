/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const IdentifierList: core.serialization.Schema<serializers.IdentifierList.Raw, Mercoa.IdentifierList> =
    core.serialization
        .union("type", {
            rolesList: core.serialization.object({
                value: core.serialization.list(core.serialization.string()),
            }),
            userList: core.serialization.object({
                value: core.serialization.list(
                    core.serialization.lazy(async () => (await import("../../..")).EntityUserId)
                ),
            }),
        })
        .transform<Mercoa.IdentifierList>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace IdentifierList {
    type Raw = IdentifierList.RolesList | IdentifierList.UserList;

    interface RolesList {
        type: "rolesList";
        value: string[];
    }

    interface UserList {
        type: "userList";
        value: serializers.EntityUserId.Raw[];
    }
}
