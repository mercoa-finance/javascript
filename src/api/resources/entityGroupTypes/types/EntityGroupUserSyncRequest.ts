/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface EntityGroupUserSyncRequest {
    /**
     * Entity ID / foreign ID of an entity currently in the group to copy users and roles from.
     * If not provided, users will be synced from the entity with the most users that has been updated most recently.
     */
    copyUsersFrom?: Mercoa.EntityId;
    /** List of roles to filter users by. If not provided, all users will be copied. If provided, only users with the provided roles will be copied. */
    filterRoles?: string[];
    /** If true, users will be added to entities if they are not found in the copyUsersFrom entity. Default is true. */
    addUsers?: boolean;
    /** If true, users will be removed from entities if they are not found in the copyUsersFrom entity. Default is false. */
    removeUsers?: boolean;
}
