/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";

export const AccountType: core.serialization.Schema<serializers.AccountType.Raw, Mercoa.AccountType> =
    core.serialization.enum_(["business", "individual"]);

export declare namespace AccountType {
    type Raw = "business" | "individual";
}
