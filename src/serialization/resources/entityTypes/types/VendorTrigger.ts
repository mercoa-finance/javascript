/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const VendorTrigger: core.serialization.ObjectSchema<serializers.VendorTrigger.Raw, Mercoa.VendorTrigger> =
    core.serialization.object({
        vendorIds: core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).EntityId)),
    });

export declare namespace VendorTrigger {
    interface Raw {
        vendorIds: serializers.EntityId.Raw[];
    }
}
