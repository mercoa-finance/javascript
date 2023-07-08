/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../..";

export interface RunOcr {
    /**
     * Limit OCR vendor search to a specific network
     */
    vendorNetwork?: Mercoa.VendorNetwork;
    /**
     * When using the Entity vendor network, specify the entity to use if. EntityId on an auth token will take precedence over this parameter.
     */
    entityId?: Mercoa.EntityId;
    /** MIME type of the image. Supported types are image/png, image/jpeg, and application/pdf. */
    mimeType: string;
    /** Base64 encoded image or PDF. PNG, JPG, and PDF are supported. 10MB max. */
    image: string;
}
