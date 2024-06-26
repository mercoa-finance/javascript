/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         isOwner: true,
 *         ownershipPercentage: 40
 *     }
 *
 * @example
 *     {
 *         isController: true
 *     }
 *
 * @example
 *     {
 *         isOwner: true,
 *         ownershipPercentage: 40,
 *         isController: true
 *     }
 */
export interface Responsibilities {
    jobTitle?: string;
    /** Indicates whether this individual has significant management responsibilities within the business */
    isController?: boolean;
    /** Indicates whether this individual has an ownership stake of at least 25% in the business */
    isOwner?: boolean;
    /** Percentage of ownership in the business. Must be between 0 and 100. */
    ownershipPercentage?: number;
}
