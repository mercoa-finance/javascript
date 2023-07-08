/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const TaxId: core.serialization.ObjectSchema<serializers.entity.TaxId.Raw, Mercoa.entity.TaxId> =
    core.serialization.object({
        ein: core.serialization.lazyObject(async () => (await import("../../..")).entity.Ein),
    });

export declare namespace TaxId {
    interface Raw {
        ein: serializers.entity.Ein.Raw;
    }
}
