/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         id: "cpms_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         name: "Wire",
 *         isSource: false,
 *         isDestination: true,
 *         supportedCurrencies: [Mercoa.CurrencyCode.Usd, Mercoa.CurrencyCode.Eur],
 *         fields: [{
 *                 name: "bankName",
 *                 displayName: "Bank Name",
 *                 type: Mercoa.CustomPaymentMethodSchemaFieldType.Text,
 *                 optional: false
 *             }, {
 *                 name: "recipientName",
 *                 displayName: "Recipient Name",
 *                 type: Mercoa.CustomPaymentMethodSchemaFieldType.Text,
 *                 optional: false
 *             }, {
 *                 name: "accountNumber",
 *                 displayName: "Account Number",
 *                 type: Mercoa.CustomPaymentMethodSchemaFieldType.UsBankAccountNumber,
 *                 optional: false,
 *                 useAsAccountNumber: true
 *             }, {
 *                 name: "routingNumber",
 *                 displayName: "Routing Number",
 *                 type: Mercoa.CustomPaymentMethodSchemaFieldType.UsBankRoutingNumber,
 *                 optional: false
 *             }],
 *         createdAt: "2021-01-01T00:00:00Z",
 *         updatedAt: "2021-01-01T00:00:00Z",
 *         estimatedProcessingTime: 0,
 *         maxAmount: 100000,
 *         minAmount: 1
 *     }
 *
 * @example
 *     {
 *         id: "cpms_14f78dcd-4614-426e-a37a-7af262431d41",
 *         name: "Check",
 *         isSource: false,
 *         isDestination: true,
 *         supportedCurrencies: [Mercoa.CurrencyCode.Usd],
 *         fields: [{
 *                 name: "payToTheOrderOf",
 *                 displayName: "Pay To The Order Of",
 *                 type: Mercoa.CustomPaymentMethodSchemaFieldType.Text,
 *                 optional: false
 *             }, {
 *                 name: "accountNumber",
 *                 displayName: "Account Number",
 *                 type: Mercoa.CustomPaymentMethodSchemaFieldType.UsBankAccountNumber,
 *                 optional: false,
 *                 useAsAccountNumber: true
 *             }, {
 *                 name: "routingNumber",
 *                 displayName: "Routing Number",
 *                 type: Mercoa.CustomPaymentMethodSchemaFieldType.UsBankRoutingNumber,
 *                 optional: false
 *             }, {
 *                 name: "address",
 *                 displayName: "Address",
 *                 type: Mercoa.CustomPaymentMethodSchemaFieldType.Address,
 *                 optional: false
 *             }],
 *         createdAt: "2021-01-01T00:00:00Z",
 *         updatedAt: "2021-01-01T00:00:00Z",
 *         estimatedProcessingTime: 7,
 *         maxAmount: 50000,
 *         minAmount: 1
 *     }
 */
export interface CustomPaymentMethodSchemaResponse {
    id: Mercoa.CustomPaymentMethodSchemaId;
    name: string;
    /** This payment method can be used as a payment source for an invoice */
    isSource: boolean;
    /** This payment method can be used as a payment destination for an invoice */
    isDestination: boolean;
    /** List of currencies that this payment method supports. */
    supportedCurrencies: Mercoa.CurrencyCode[];
    fields: Mercoa.CustomPaymentMethodSchemaField[];
    /** Estimated time in days for this payment method to process a payments. 0 is an same-day payment methods, -1 is unknown processing time. */
    estimatedProcessingTime: number;
    /** The maximum amount that can be transferred from this payment method in a single transaction. */
    maxAmount?: number;
    /** The minimum amount that can be transferred from this payment method in a single transaction. Default is 1. */
    minAmount?: number;
    createdAt: Date;
    updatedAt: Date;
}
