/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         foreignId: "your-group-id",
 *         name: "AcmeConglomerate",
 *         emailToName: "acmegroup"
 *     }
 */
export interface EntityGroupUpdateRequest {
    foreignId?: string;
    name?: string;
    emailToName?: string;
    /** Metadata key/value pairs to associate with this group. Will overwrite existing metadata. */
    metadata?: Record<string, string>;
}
