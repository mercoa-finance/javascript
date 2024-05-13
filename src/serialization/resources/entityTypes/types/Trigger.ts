/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { AmountTrigger } from "./AmountTrigger";
import { VendorTrigger } from "./VendorTrigger";
import { MetadataTrigger } from "./MetadataTrigger";

export const Trigger: core.serialization.Schema<serializers.Trigger.Raw, Mercoa.Trigger> = core.serialization
    .union("type", {
        amount: AmountTrigger,
        vendor: VendorTrigger,
        metadata: MetadataTrigger,
    })
    .transform<Mercoa.Trigger>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Trigger {
    type Raw = Trigger.Amount | Trigger.Vendor | Trigger.Metadata;

    interface Amount extends AmountTrigger.Raw {
        type: "amount";
    }

    interface Vendor extends VendorTrigger.Raw {
        type: "vendor";
    }

    interface Metadata extends MetadataTrigger.Raw {
        type: "metadata";
    }
}
