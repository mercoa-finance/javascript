/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../../../../index";

/**
 * @example
 *     {
 *         format: "CSV",
 *         paymentMethods: true,
 *         invoiceMetrics: true
 *     }
 */
export interface DownloadBulkPayorsRequest {
    /**
     * Format of the file to download. Defaults to CSV.
     */
    format?: Mercoa.BulkDownloadFormat;
    /**
     * Filter counterparties by name or email. Partial matches are supported.
     */
    search?: string;
    /**
     * Filter by network type. By default, only ENTITY counterparties are returned.
     */
    networkType?: Mercoa.CounterpartyNetworkType | Mercoa.CounterpartyNetworkType[];
    /**
     * If true, will include counterparty payment methods as part of the response
     */
    paymentMethods?: boolean;
    /**
     * If true, will include counterparty invoice metrics as part of the response
     */
    invoiceMetrics?: boolean;
    /**
     * Filter by counterparty ids (Foreign ID is supported)
     */
    counterpartyId?: Mercoa.EntityId | Mercoa.EntityId[];
    /**
     * Filter counterparties by simple key/value metadata. Each filter will be applied as an AND condition. Duplicate keys will be ignored.
     */
    metadata?: Mercoa.MetadataFilter | Mercoa.MetadataFilter[];
    /**
     * If true, will return simple key/value metadata for the counterparties. For more complex metadata, use the Metadata API.
     */
    returnMetadata?: string | string[];
}
