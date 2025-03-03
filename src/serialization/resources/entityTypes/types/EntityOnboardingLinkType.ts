/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const EntityOnboardingLinkType: core.serialization.Schema<
    serializers.EntityOnboardingLinkType.Raw,
    Mercoa.EntityOnboardingLinkType
> = core.serialization.enum_(["PAYEE", "PAYOR"]);

export declare namespace EntityOnboardingLinkType {
    export type Raw = "PAYEE" | "PAYOR";
}
