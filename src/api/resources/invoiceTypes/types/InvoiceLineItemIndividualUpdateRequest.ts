/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         name: "Product A",
 *         description: "Product A",
 *         serviceStartDate: "2021-01-01T00:00:00Z",
 *         serviceEndDate: "2021-01-31T00:00:00Z",
 *         metadata: {
 *             "key1": "value1",
 *             "key2": "value2"
 *         },
 *         glAccountId: "600394"
 *     }
 */
export interface InvoiceLineItemIndividualUpdateRequest {
    name?: string;
    description?: string;
    /** Category of the line item. Defaults to EXPENSE. */
    category?: Mercoa.InvoiceLineItemCategory;
    serviceStartDate?: Date;
    serviceEndDate?: Date;
    metadata?: Record<string, string>;
    /** ID of general ledger account associated with this line item. */
    glAccountId?: string;
}
