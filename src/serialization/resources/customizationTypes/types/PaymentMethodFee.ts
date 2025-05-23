/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { PercentageFee } from "./PercentageFee";
import { FlatFee } from "./FlatFee";
import { DefaultFee } from "./DefaultFee";

export const PaymentMethodFee: core.serialization.Schema<serializers.PaymentMethodFee.Raw, Mercoa.PaymentMethodFee> =
    core.serialization
        .union("type", {
            percentage: PercentageFee,
            flat: FlatFee,
            default: DefaultFee,
        })
        .transform<Mercoa.PaymentMethodFee>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace PaymentMethodFee {
    export type Raw = PaymentMethodFee.Percentage | PaymentMethodFee.Flat | PaymentMethodFee.Default;

    export interface Percentage extends PercentageFee.Raw {
        type: "percentage";
    }

    export interface Flat extends FlatFee.Raw {
        type: "flat";
    }

    export interface Default extends DefaultFee.Raw {
        type: "default";
    }
}
