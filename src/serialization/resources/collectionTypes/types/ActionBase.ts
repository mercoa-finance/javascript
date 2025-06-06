/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ActionId } from "./ActionId";
import { ActionStatus } from "./ActionStatus";

export const ActionBase: core.serialization.ObjectSchema<serializers.ActionBase.Raw, Mercoa.ActionBase> =
    core.serialization.object({
        id: ActionId,
        scheduledExecutionTime: core.serialization.date(),
        status: ActionStatus,
    });

export declare namespace ActionBase {
    export interface Raw {
        id: ActionId.Raw;
        scheduledExecutionTime: string;
        status: ActionStatus.Raw;
    }
}
