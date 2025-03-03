/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { MetadataCustomizationRequest } from "../../customizationTypes/types/MetadataCustomizationRequest";
import { PaymentMethodCustomizationRequest } from "../../customizationTypes/types/PaymentMethodCustomizationRequest";
import { OcrCustomizationResponse } from "../../customizationTypes/types/OcrCustomizationResponse";
import { NotificationCustomizationRequest } from "../../customizationTypes/types/NotificationCustomizationRequest";
import { WorkflowCustomizationRequest } from "../../customizationTypes/types/WorkflowCustomizationRequest";
import { FeeCustomizationRequest } from "../../customizationTypes/types/FeeCustomizationRequest";
import { RolePermissionRequest } from "../../organizationTypes/types/RolePermissionRequest";
import { Permission } from "../../organizationTypes/types/Permission";

export const EntityCustomizationResponse: core.serialization.ObjectSchema<
    serializers.EntityCustomizationResponse.Raw,
    Mercoa.EntityCustomizationResponse
> = core.serialization.object({
    metadata: core.serialization.list(MetadataCustomizationRequest),
    paymentSource: core.serialization.list(PaymentMethodCustomizationRequest),
    backupDisbursement: core.serialization.list(PaymentMethodCustomizationRequest),
    paymentDestination: core.serialization.list(PaymentMethodCustomizationRequest),
    ocr: OcrCustomizationResponse,
    notifications: NotificationCustomizationRequest,
    workflow: WorkflowCustomizationRequest,
    fees: FeeCustomizationRequest,
    rolePermissions: RolePermissionRequest,
});

export declare namespace EntityCustomizationResponse {
    export interface Raw {
        metadata: MetadataCustomizationRequest.Raw[];
        paymentSource: PaymentMethodCustomizationRequest.Raw[];
        backupDisbursement: PaymentMethodCustomizationRequest.Raw[];
        paymentDestination: PaymentMethodCustomizationRequest.Raw[];
        ocr: OcrCustomizationResponse.Raw;
        notifications: NotificationCustomizationRequest.Raw;
        workflow: WorkflowCustomizationRequest.Raw;
        fees: FeeCustomizationRequest.Raw;
        rolePermissions: RolePermissionRequest.Raw;
    }
}
