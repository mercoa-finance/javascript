/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { BnplCadence } from "./BnplCadence";
import { BnplDayOfWeek } from "./BnplDayOfWeek";

export const BnplOfferRequest: core.serialization.ObjectSchema<
    serializers.BnplOfferRequest.Raw,
    Mercoa.BnplOfferRequest
> = core.serialization.object({
    cadence: BnplCadence,
    installmentsStartDate: core.serialization.string(),
    numberOfInstallments: core.serialization.number(),
    paymentDayOfWeek: BnplDayOfWeek,
    downPaymentDueDate: core.serialization.string(),
});

export declare namespace BnplOfferRequest {
    export interface Raw {
        cadence: BnplCadence.Raw;
        installmentsStartDate: string;
        numberOfInstallments: number;
        paymentDayOfWeek: BnplDayOfWeek.Raw;
        downPaymentDueDate: string;
    }
}
