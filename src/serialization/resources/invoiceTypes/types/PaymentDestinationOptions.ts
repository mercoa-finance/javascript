/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Mercoa from "../../../../api";
import * as core from "../../../../core";

export const PaymentDestinationOptions: core.serialization.Schema<
    serializers.PaymentDestinationOptions.Raw,
    Mercoa.PaymentDestinationOptions
> = core.serialization
    .union("type", {
        check: core.serialization.lazyObject(async () => (await import("../../..")).CheckPaymentDestinationOptions),
        bankAccount: core.serialization.lazyObject(
            async () => (await import("../../..")).BankAccountPaymentDestinationOptions
        ),
    })
    .transform<Mercoa.PaymentDestinationOptions>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace PaymentDestinationOptions {
    type Raw = PaymentDestinationOptions.Check | PaymentDestinationOptions.BankAccount;

    interface Check extends serializers.CheckPaymentDestinationOptions.Raw {
        type: "check";
    }

    interface BankAccount extends serializers.BankAccountPaymentDestinationOptions.Raw {
        type: "bankAccount";
    }
}
