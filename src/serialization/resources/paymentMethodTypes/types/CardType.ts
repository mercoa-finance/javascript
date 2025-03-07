/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const CardType: core.serialization.Schema<serializers.CardType.Raw, Mercoa.CardType> = core.serialization.enum_([
    "credit",
    "debit",
    "prepaid",
    "unknown",
]);

export declare namespace CardType {
    export type Raw = "credit" | "debit" | "prepaid" | "unknown";
}
