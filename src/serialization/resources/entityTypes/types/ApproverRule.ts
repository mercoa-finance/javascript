/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { IdentifierList } from "./IdentifierList";

export const ApproverRule: core.serialization.ObjectSchema<serializers.ApproverRule.Raw, Mercoa.ApproverRule> =
    core.serialization.object({
        numApprovers: core.serialization.number(),
        identifierList: IdentifierList,
        autoAssign: core.serialization.boolean().optional(),
    });

export declare namespace ApproverRule {
    export interface Raw {
        numApprovers: number;
        identifierList: IdentifierList.Raw;
        autoAssign?: boolean | null;
    }
}
