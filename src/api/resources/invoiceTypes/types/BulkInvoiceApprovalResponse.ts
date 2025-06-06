/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 id: "in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9"
 *             }, {
 *                 id: "in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
 *                 error: "Invoice approval failed"
 *             }]
 *     }
 */
export interface BulkInvoiceApprovalResponse {
    data: Mercoa.BulkInvoiceApprovalFromObjectResponse[];
}
