/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../..";

export interface FindEntities {
    foreignId?: string | string[];
    status?: Mercoa.EntityStatus | Mercoa.EntityStatus[];
    /**
     * If true, entities that are marked as payees will be returned.
     * If false or not provided, entities that are marked as payees will not be returned.
     *
     */
    isPayee?: boolean;
    /**
     * If true or not provided, entities that are marked as payors will be returned.
     * If false, entities that are marked as payors will not be returned.
     *
     */
    isPayor?: boolean;
    /**
     * Filter entities by name. Partial matches are supported.
     */
    name?: string;
    /**
     * Number of entities to return. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;
    /**
     * The ID of the entity to start after. If not provided, the first page of entities will be returned.
     */
    startingAfter?: Mercoa.EntityId;
}
