/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const TransactionResponse: core.serialization.ObjectSchema<
    serializers.TransactionResponse.Raw,
    Mercoa.TransactionResponse
> = core.serialization.object({
    id: core.serialization.string(),
    status: core.serialization.lazy(async () => (await import("../../..")).TransactionStatus),
    amount: core.serialization.number(),
    currency: core.serialization.lazy(async () => (await import("../../..")).CurrencyCode).optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
});

export declare namespace TransactionResponse {
    interface Raw {
        id: string;
        status: serializers.TransactionStatus.Raw;
        amount: number;
        currency?: serializers.CurrencyCode.Raw | null;
        createdAt: string;
        updatedAt: string;
    }
}
