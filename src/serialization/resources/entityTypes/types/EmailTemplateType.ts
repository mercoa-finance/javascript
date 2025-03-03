/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const EmailTemplateType: core.serialization.Schema<serializers.EmailTemplateType.Raw, Mercoa.EmailTemplateType> =
    core.serialization.enum_(["PAYMENT", "DISBURSEMENT"]);

export declare namespace EmailTemplateType {
    export type Raw = "PAYMENT" | "DISBURSEMENT";
}
