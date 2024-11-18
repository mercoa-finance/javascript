/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../../index";

/**
 * @example
 *     {
 *         document: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII"
 *     }
 */
export interface UploadDocumentRequest {
    /** Base64 encoded image or PDF of invoice document. PNG, JPG, WEBP, and PDF are supported. 10MB max. */
    document: string;
    /** Specify Document Type, defaults to INVOICE */
    type?: Mercoa.DocumentType;
}