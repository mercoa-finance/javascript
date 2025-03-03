/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { ContractResponse } from "./ContractResponse";

export const FindContractResponse: core.serialization.ObjectSchema<
    serializers.FindContractResponse.Raw,
    Mercoa.FindContractResponse
> = core.serialization.object({
    count: core.serialization.number(),
    hasMore: core.serialization.boolean(),
    data: core.serialization.list(ContractResponse),
});

export declare namespace FindContractResponse {
    export interface Raw {
        count: number;
        hasMore: boolean;
        data: ContractResponse.Raw[];
    }
}
