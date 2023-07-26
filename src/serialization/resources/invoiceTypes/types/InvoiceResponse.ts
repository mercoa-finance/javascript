/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const InvoiceResponse: core.serialization.ObjectSchema<serializers.InvoiceResponse.Raw, Mercoa.InvoiceResponse> =
    core.serialization.object({
        id: core.serialization.lazy(async () => (await import("../../..")).InvoiceId),
        status: core.serialization.lazy(async () => (await import("../../..")).InvoiceStatus),
        amount: core.serialization.number().optional(),
        currency: core.serialization.lazy(async () => (await import("../../..")).CurrencyCode).optional(),
        invoiceDate: core.serialization.date().optional(),
        deductionDate: core.serialization.date().optional(),
        fundedDate: core.serialization.date().optional(),
        dueDate: core.serialization.date().optional(),
        invoiceNumber: core.serialization.string().optional(),
        noteToSelf: core.serialization.string().optional(),
        serviceStartDate: core.serialization.date().optional(),
        serviceEndDate: core.serialization.date().optional(),
        payerId: core.serialization.lazy(async () => (await import("../../..")).EntityId).optional(),
        payer: core.serialization.lazyObject(async () => (await import("../../..")).EntityResponse).optional(),
        paymentSource: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodResponse).optional(),
        paymentSourceId: core.serialization.lazy(async () => (await import("../../..")).PaymentMethodId).optional(),
        vendorId: core.serialization.lazy(async () => (await import("../../..")).EntityId).optional(),
        vendor: core.serialization.lazyObject(async () => (await import("../../..")).EntityResponse).optional(),
        paymentDestination: core.serialization
            .lazy(async () => (await import("../../..")).PaymentMethodResponse)
            .optional(),
        paymentDestinationId: core.serialization
            .lazy(async () => (await import("../../..")).PaymentMethodId)
            .optional(),
        paymentDestinationConfirmed: core.serialization.boolean(),
        hasDocuments: core.serialization.boolean(),
        comments: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).CommentResponse))
            .optional(),
        transactions: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).TransactionResponse))
            .optional(),
        lineItems: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).InvoiceLineItemResponse))
            .optional(),
        approvers: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).InvoiceApproverResponse)
        ),
        approvalPolicy: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../..")).ApprovalPolicyResponse)
        ),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.string()),
        createdBy: core.serialization.lazyObject(async () => (await import("../../..")).EntityUserResponse).optional(),
        processedAt: core.serialization.date().optional(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
    });

export declare namespace InvoiceResponse {
    interface Raw {
        id: serializers.InvoiceId.Raw;
        status: serializers.InvoiceStatus.Raw;
        amount?: number | null;
        currency?: serializers.CurrencyCode.Raw | null;
        invoiceDate?: string | null;
        deductionDate?: string | null;
        fundedDate?: string | null;
        dueDate?: string | null;
        invoiceNumber?: string | null;
        noteToSelf?: string | null;
        serviceStartDate?: string | null;
        serviceEndDate?: string | null;
        payerId?: serializers.EntityId.Raw | null;
        payer?: serializers.EntityResponse.Raw | null;
        paymentSource?: serializers.PaymentMethodResponse.Raw | null;
        paymentSourceId?: serializers.PaymentMethodId.Raw | null;
        vendorId?: serializers.EntityId.Raw | null;
        vendor?: serializers.EntityResponse.Raw | null;
        paymentDestination?: serializers.PaymentMethodResponse.Raw | null;
        paymentDestinationId?: serializers.PaymentMethodId.Raw | null;
        paymentDestinationConfirmed: boolean;
        hasDocuments: boolean;
        comments?: serializers.CommentResponse.Raw[] | null;
        transactions?: serializers.TransactionResponse.Raw[] | null;
        lineItems?: serializers.InvoiceLineItemResponse.Raw[] | null;
        approvers: serializers.InvoiceApproverResponse.Raw[];
        approvalPolicy: serializers.ApprovalPolicyResponse.Raw[];
        metadata: Record<string, string>;
        createdBy?: serializers.EntityUserResponse.Raw | null;
        processedAt?: string | null;
        createdAt: string;
        updatedAt: string;
    }
}
