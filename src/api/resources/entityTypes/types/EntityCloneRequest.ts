/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         createFromId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         foreignId: "MY-DB-ID-12345"
 *     }
 */
export interface EntityCloneRequest {
    /** The ID or ForeignId of the entity to clone. */
    createFromId: Mercoa.EntityId;
    /** The ID used to identify this entity in your system. This ID must be unique across all entities in your system. */
    foreignId?: string;
    /** Sets the email address to which to send invoices to be added to the Invoice Inbox. Only provide the local-part/username of the email address, do not include the @domain.com */
    emailTo?: string;
    /** Email inbox alias addresses. Used when forwarding emails to the emailTo address from an alias. Include the full email address. */
    emailToAlias?: string[];
    /** Base64 encoded PNG image data for the entity logo. Max size 100KB. */
    logo?: string;
    /** Simple key/value metadata associated with this entity. For more complex metadata, use the Metadata API. */
    metadata?: Record<string, string>;
}
