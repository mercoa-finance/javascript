/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { Ein } from "./Ein";

export const TaxId: core.serialization.ObjectSchema<serializers.TaxId.Raw, Mercoa.TaxId> = core.serialization.object({
    ein: Ein,
});

export declare namespace TaxId {
    export interface Raw {
        ein: Ein.Raw;
    }
}
