/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Mercoa } from "@mercoa/javascript";
import * as core from "../../../../core";

export const FindCounterpartiesResponse: core.serialization.ObjectSchema<
    serializers.FindCounterpartiesResponse.Raw,
    Mercoa.FindCounterpartiesResponse
> = core.serialization.object({
    entityCounterparties: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).CounterpartyResponse)
    ),
    platformCounterparties: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).CounterpartyResponse)
    ),
    mercoaCounterparties: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../..")).CounterpartyResponse)
    ),
});

export declare namespace FindCounterpartiesResponse {
    interface Raw {
        entityCounterparties: serializers.CounterpartyResponse.Raw[];
        platformCounterparties: serializers.CounterpartyResponse.Raw[];
        mercoaCounterparties: serializers.CounterpartyResponse.Raw[];
    }
}