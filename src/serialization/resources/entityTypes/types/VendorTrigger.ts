/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { EntityId } from "./EntityId";

export const VendorTrigger: core.serialization.ObjectSchema<serializers.VendorTrigger.Raw, Mercoa.VendorTrigger> =
    core.serialization.object({
        vendorIds: core.serialization.list(EntityId),
    });

export declare namespace VendorTrigger {
    export interface Raw {
        vendorIds: EntityId.Raw[];
    }
}
