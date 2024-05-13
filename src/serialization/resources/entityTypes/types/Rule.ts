/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ApproverRule } from "./ApproverRule";

export const Rule: core.serialization.Schema<serializers.Rule.Raw, Mercoa.Rule> = core.serialization
    .union("type", {
        approver: ApproverRule,
    })
    .transform<Mercoa.Rule>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Rule {
    type Raw = Rule.Approver;

    interface Approver extends ApproverRule.Raw {
        type: "approver";
    }
}
