/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../../index";
import * as Mercoa from "../../../../../../../../../api/index";
import * as core from "../../../../../../../../../core";
import { CurrencyCode } from "../../../../../../../paymentMethodTypes/types/CurrencyCode";
import { PaymentMethodId } from "../../../../../../../paymentMethodTypes/types/PaymentMethodId";

export const WithdrawWalletFundsRequest: core.serialization.Schema<
    serializers.entity.paymentMethod.WithdrawWalletFundsRequest.Raw,
    Mercoa.entity.paymentMethod.WithdrawWalletFundsRequest
> = core.serialization.object({
    amount: core.serialization.number(),
    currency: CurrencyCode.optional(),
    destinationPaymentMethodId: PaymentMethodId,
});

export declare namespace WithdrawWalletFundsRequest {
    export interface Raw {
        amount: number;
        currency?: CurrencyCode.Raw | null;
        destinationPaymentMethodId: PaymentMethodId.Raw;
    }
}
