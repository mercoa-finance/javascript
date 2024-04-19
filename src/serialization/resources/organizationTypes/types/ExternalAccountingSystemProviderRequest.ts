/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { CodatProviderRequest } from "./CodatProviderRequest";

export const ExternalAccountingSystemProviderRequest: core.serialization.Schema<
    serializers.ExternalAccountingSystemProviderRequest.Raw,
    Mercoa.ExternalAccountingSystemProviderRequest
> = core.serialization
    .union("type", {
        codat: CodatProviderRequest,
    })
    .transform<Mercoa.ExternalAccountingSystemProviderRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ExternalAccountingSystemProviderRequest {
    type Raw = ExternalAccountingSystemProviderRequest.Codat;

    interface Codat extends CodatProviderRequest.Raw {
        type: "codat";
    }
}
