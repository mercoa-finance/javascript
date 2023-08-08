/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const PaymentMethodId: core.serialization.Schema<serializers.PaymentMethodId.Raw, Mercoa.PaymentMethodId> =
    core.serialization.string();

export declare namespace PaymentMethodId {
    type Raw = string;
}