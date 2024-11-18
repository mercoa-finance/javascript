/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceStatus } from "./InvoiceStatus";
import { CurrencyCode } from "../../paymentMethodTypes/types/CurrencyCode";
import { EntityId } from "../../entityTypes/types/EntityId";
import { PaymentMethodId } from "../../paymentMethodTypes/types/PaymentMethodId";
import { PaymentDestinationOptions } from "./PaymentDestinationOptions";
import { ApprovalSlotAssignment } from "./ApprovalSlotAssignment";
import { EntityUserId } from "../../entityTypes/types/EntityUserId";
import { InvoiceFeesRequest } from "./InvoiceFeesRequest";
import { PaymentSchedule } from "./PaymentSchedule";

export const InvoiceTemplateRequestBase: core.serialization.ObjectSchema<
    serializers.InvoiceTemplateRequestBase.Raw,
    Mercoa.InvoiceTemplateRequestBase
> = core.serialization.object({
    status: InvoiceStatus.optional(),
    amount: core.serialization.number().optional(),
    currency: CurrencyCode.optional(),
    invoiceDate: core.serialization.date().optional(),
    deductionDate: core.serialization.date().optional(),
    dueDate: core.serialization.date().optional(),
    invoiceNumber: core.serialization.string().optional(),
    noteToSelf: core.serialization.string().optional(),
    serviceStartDate: core.serialization.date().optional(),
    serviceEndDate: core.serialization.date().optional(),
    payerId: EntityId.optional(),
    paymentSourceId: PaymentMethodId.optional(),
    vendorId: EntityId.optional(),
    paymentDestinationId: PaymentMethodId.optional(),
    paymentDestinationOptions: PaymentDestinationOptions.optional(),
    approvers: core.serialization.list(ApprovalSlotAssignment).optional(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.string()).optional(),
    document: core.serialization.string().optional(),
    creatorUserId: EntityUserId.optional(),
    fees: InvoiceFeesRequest.optional(),
    batchPayment: core.serialization.boolean().optional(),
    paymentSchedule: PaymentSchedule.optional(),
});

export declare namespace InvoiceTemplateRequestBase {
    interface Raw {
        status?: InvoiceStatus.Raw | null;
        amount?: number | null;
        currency?: CurrencyCode.Raw | null;
        invoiceDate?: string | null;
        deductionDate?: string | null;
        dueDate?: string | null;
        invoiceNumber?: string | null;
        noteToSelf?: string | null;
        serviceStartDate?: string | null;
        serviceEndDate?: string | null;
        payerId?: EntityId.Raw | null;
        paymentSourceId?: PaymentMethodId.Raw | null;
        vendorId?: EntityId.Raw | null;
        paymentDestinationId?: PaymentMethodId.Raw | null;
        paymentDestinationOptions?: PaymentDestinationOptions.Raw | null;
        approvers?: ApprovalSlotAssignment.Raw[] | null;
        metadata?: Record<string, string> | null;
        document?: string | null;
        creatorUserId?: EntityUserId.Raw | null;
        fees?: InvoiceFeesRequest.Raw | null;
        batchPayment?: boolean | null;
        paymentSchedule?: PaymentSchedule.Raw | null;
    }
}