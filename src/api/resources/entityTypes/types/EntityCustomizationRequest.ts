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
 *                 disabled: true,
 *                 defaultDeliveryMethod: Mercoa.BankDeliveryMethod.AchSameDay
 *             }, {
 *                 type: "custom",
 *                 schemaId: "cpms_7df2974a-4069-454c-912f-7e58ebe030fb",
 *                 disabled: true
 *             }],
 *         backupDisbursement: [{
 *                 type: "check",
 *                 disabled: true,
 *                 defaultDeliveryMethod: Mercoa.CheckDeliveryMethod.Mail,
 *                 printDescription: true
 *             }],
 *         paymentDestination: [{
 *                 type: "bankAccount",
 *                 disabled: true,
 *                 defaultDeliveryMethod: Mercoa.BankDeliveryMethod.AchSameDay
 *             }, {
 *                 type: "check",
 *                 disabled: true,
 *                 defaultDeliveryMethod: Mercoa.CheckDeliveryMethod.Mail,
 *                 printDescription: true
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
 *         },
 *         rolePermissions: {
 *             "admin": [Mercoa.Permission.InvoiceAll, Mercoa.Permission.PaymentMethodAll]
 *         },
 *         fees: {
 *             payable: {
 *                 source: {
 *                     achStandard: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     },
 *                     achSameDay: {
 *                         type: "percentage",
 *                         amount: 2.5
 *                     },
 *                     checkPrint: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     },
 *                     checkMail: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     }
 *                 },
 *                 destination: {
 *                     achStandard: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     },
 *                     achSameDay: {
 *                         type: "percentage",
 *                         amount: 2.5
 *                     },
 *                     checkPrint: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     },
 *                     checkMail: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     }
 *                 }
 *             },
 *             receivable: {
 *                 source: {
 *                     achStandard: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     },
 *                     achSameDay: {
 *                         type: "percentage",
 *                         amount: 2.5
 *                     },
 *                     checkPrint: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     },
 *                     checkMail: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     }
 *                 },
 *                 destination: {
 *                     achStandard: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     },
 *                     achSameDay: {
 *                         type: "percentage",
 *                         amount: 2.5
 *                     },
 *                     checkPrint: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     },
 *                     checkMail: {
 *                         type: "flat",
 *                         amount: 2.5
 *                     }
 *                 }
 *             }
 *         }
 *     }
 */
export interface EntityCustomizationRequest {
    metadata?: Mercoa.MetadataCustomizationRequest[];
    paymentSource?: Mercoa.PaymentMethodCustomizationRequest[];
    backupDisbursement?: Mercoa.PaymentMethodCustomizationRequest[];
    paymentDestination?: Mercoa.PaymentMethodCustomizationRequest[];
    ocr?: Mercoa.OcrCustomizationRequest;
    notifications?: Mercoa.NotificationCustomizationRequest;
    workflow?: Mercoa.WorkflowCustomizationRequest;
    fees?: Mercoa.FeeCustomizationRequest;
    rolePermissions?: Mercoa.RolePermissionRequest;
}
