/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const Trigger: core.serialization.Schema<serializers.Trigger.Raw, Mercoa.Trigger> = core.serialization
    .union("type", {
        amount: core.serialization.lazyObject(async () => (await import("../../..")).AmountTrigger),
        all: core.serialization.object({
            value: core.serialization.unknown(),
        }),
    })
    .transform<Mercoa.Trigger>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Trigger {
    type Raw = Trigger.Amount | Trigger.All;

    interface Amount extends serializers.AmountTrigger.Raw {
        type: "amount";
    }

    interface All {
        type: "all";
        value?: unknown;
    }
}