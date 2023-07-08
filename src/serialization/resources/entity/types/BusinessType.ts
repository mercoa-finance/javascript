/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const BusinessType: core.serialization.Schema<serializers.entity.BusinessType.Raw, Mercoa.entity.BusinessType> =
    core.serialization.enum_([
        "soleProprietorship",
        "unincorporatedAssociation",
        "trust",
        "publicCorporation",
        "privateCorporation",
        "llc",
        "partnership",
        "unincorporatedNonProfit",
        "incorporatedNonProfit",
    ]);

export declare namespace BusinessType {
    type Raw =
        | "soleProprietorship"
        | "unincorporatedAssociation"
        | "trust"
        | "publicCorporation"
        | "privateCorporation"
        | "llc"
        | "partnership"
        | "unincorporatedNonProfit"
        | "incorporatedNonProfit";
}
