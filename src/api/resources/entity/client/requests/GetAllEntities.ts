/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface GetAllEntities {
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
}
