/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as core from "../../../../core";

export const EntityForeignIdAlreadyExists: core.serialization.Schema<
    serializers.EntityForeignIdAlreadyExists.Raw,
    string
> = core.serialization.string();

export declare namespace EntityForeignIdAlreadyExists {
    type Raw = string;
}
