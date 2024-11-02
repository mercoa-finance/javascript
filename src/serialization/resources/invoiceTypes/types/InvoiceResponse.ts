/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { InvoiceId } from "./InvoiceId";
import { InvoiceStatus } from "./InvoiceStatus";
import { CurrencyCode } from "../../paymentMethodTypes/types/CurrencyCode";
import { EntityId } from "../../entityTypes/types/EntityId";
import { CounterpartyResponse } from "../../entityTypes/types/CounterpartyResponse";
import { PaymentMethodResponse } from "../../paymentMethodTypes/types/PaymentMethodResponse";
import { PaymentMethodId } from "../../paymentMethodTypes/types/PaymentMethodId";
import { PaymentDestinationOptions } from "./PaymentDestinationOptions";
import { CommentResponse } from "./CommentResponse";
import { InvoiceLineItemResponse } from "./InvoiceLineItemResponse";
import { ApprovalSlot } from "./ApprovalSlot";
import { ApprovalPolicyResponse } from "../../entityTypes/types/ApprovalPolicyResponse";
import { EntityUserResponse } from "../../entityTypes/types/EntityUserResponse";
import { InvoiceFailureType } from "./InvoiceFailureType";
import { InvoiceFeesResponse } from "./InvoiceFeesResponse";
import { PaymentSchedule } from "./PaymentSchedule";

export const InvoiceResponse: core.serialization.ObjectSchema<serializers.InvoiceResponse.Raw, Mercoa.InvoiceResponse> =
    core.serialization.object({
        id: InvoiceId,
        status: InvoiceStatus,
        amount: core.serialization.number().optional(),
        currency: CurrencyCode.optional(),
        invoiceDate: core.serialization.date().optional(),
        deductionDate: core.serialization.date().optional(),
        nextDeductionDate: core.serialization.date().optional(),
        processedAt: core.serialization.date().optional(),
        settlementDate: core.serialization.date().optional(),
        dueDate: core.serialization.date().optional(),
        invoiceNumber: core.serialization.string().optional(),
        noteToSelf: core.serialization.string().optional(),
        serviceStartDate: core.serialization.date().optional(),
        serviceEndDate: core.serialization.date().optional(),
        payerId: EntityId.optional(),
        payer: CounterpartyResponse.optional(),
        paymentSource: PaymentMethodResponse.optional(),
        paymentSourceId: PaymentMethodId.optional(),
        vendorId: EntityId.optional(),
        vendor: CounterpartyResponse.optional(),
        paymentDestination: PaymentMethodResponse.optional(),
        paymentDestinationId: PaymentMethodId.optional(),
        paymentDestinationOptions: PaymentDestinationOptions.optional(),
        paymentDestinationConfirmed: core.serialization.boolean(),
        batchPayment: core.serialization.boolean().optional(),
        hasDocuments: core.serialization.boolean(),
        hasSourceEmail: core.serialization.boolean(),
        comments: core.serialization.list(CommentResponse).optional(),
        lineItems: core.serialization.list(InvoiceLineItemResponse).optional(),
        approvers: core.serialization.list(ApprovalSlot),
        approvalPolicy: core.serialization.list(ApprovalPolicyResponse),
        metadata: core.serialization.record(core.serialization.string(), core.serialization.string()),
        foreignId: core.serialization.string().optional(),
        creatorEntityId: EntityId.optional(),
        creatorUser: EntityUserResponse.optional(),
        failureType: InvoiceFailureType.optional(),
        createdAt: core.serialization.date(),
        updatedAt: core.serialization.date(),
        fees: InvoiceFeesResponse.optional(),
        paymentSchedule: PaymentSchedule.optional(),
    });

export declare namespace InvoiceResponse {
    interface Raw {
        id: InvoiceId.Raw;
        status: InvoiceStatus.Raw;
        amount?: number | null;
        currency?: CurrencyCode.Raw | null;
        invoiceDate?: string | null;
        deductionDate?: string | null;
        nextDeductionDate?: string | null;
        processedAt?: string | null;
        settlementDate?: string | null;
        dueDate?: string | null;
        invoiceNumber?: string | null;
        noteToSelf?: string | null;
        serviceStartDate?: string | null;
        serviceEndDate?: string | null;
        payerId?: EntityId.Raw | null;
        payer?: CounterpartyResponse.Raw | null;
        paymentSource?: PaymentMethodResponse.Raw | null;
        paymentSourceId?: PaymentMethodId.Raw | null;
        vendorId?: EntityId.Raw | null;
        vendor?: CounterpartyResponse.Raw | null;
        paymentDestination?: PaymentMethodResponse.Raw | null;
        paymentDestinationId?: PaymentMethodId.Raw | null;
        paymentDestinationOptions?: PaymentDestinationOptions.Raw | null;
        paymentDestinationConfirmed: boolean;
        batchPayment?: boolean | null;
        hasDocuments: boolean;
        hasSourceEmail: boolean;
        comments?: CommentResponse.Raw[] | null;
        lineItems?: InvoiceLineItemResponse.Raw[] | null;
        approvers: ApprovalSlot.Raw[];
        approvalPolicy: ApprovalPolicyResponse.Raw[];
        metadata: Record<string, string>;
        foreignId?: string | null;
        creatorEntityId?: EntityId.Raw | null;
        creatorUser?: EntityUserResponse.Raw | null;
        failureType?: InvoiceFailureType.Raw | null;
        createdAt: string;
        updatedAt: string;
        fees?: InvoiceFeesResponse.Raw | null;
        paymentSchedule?: PaymentSchedule.Raw | null;
    }
}
