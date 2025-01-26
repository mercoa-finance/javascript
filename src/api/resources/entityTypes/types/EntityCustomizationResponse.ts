/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         metadata: [{
 *                 key: "my_custom_field",
 *                 disabled: true
 *             }, {
 *                 key: "my_other_field",
 *                 disabled: false
 *             }],
 *         paymentSource: [{
 *                 type: "bankAccount",
 *                 disabled: true
 *             }, {
 *                 type: "custom",
 *                 schemaId: "cpms_7df2974a-4069-454c-912f-7e58ebe030fb",
 *                 disabled: true
 *             }],
 *         backupDisbursement: [{
 *                 type: "check",
 *                 disabled: true
 *             }],
 *         paymentDestination: [{
 *                 type: "bankAccount",
 *                 disabled: true
 *             }, {
 *                 type: "check",
 *                 disabled: true
 *             }],
 *         ocr: {
 *             lineItems: true,
 *             collapseLineItems: true,
 *             invoiceMetadata: true,
 *             lineItemMetadata: true,
 *             lineItemGlAccountId: true,
 *             predictMetadata: true,
 *             taxAndShippingAsLineItems: true
 *         },
 *         notifications: {
 *             assumeRole: "admin"
 *         },
 *         workflow: {
 *             autoAdvanceInvoiceStatus: true
 *         }
 *     }
 */
export interface EntityCustomizationResponse {
    metadata: Mercoa.MetadataCustomizationRequest[];
    paymentSource: Mercoa.PaymentMethodCustomizationRequest[];
    backupDisbursement: Mercoa.PaymentMethodCustomizationRequest[];
    paymentDestination: Mercoa.PaymentMethodCustomizationRequest[];
    ocr: Mercoa.OcrCustomizationResponse;
    notifications: Mercoa.NotificationCustomizationRequest;
    workflow: Mercoa.WorkflowCustomizationRequest;
}
