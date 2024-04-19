/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const NotificationId: core.serialization.Schema<serializers.NotificationId.Raw, Mercoa.NotificationId> =
    core.serialization.string();

export declare namespace NotificationId {
    type Raw = string;
}
