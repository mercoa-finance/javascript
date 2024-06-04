/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Mercoa from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { CodatCompanyResponse } from "./CodatCompanyResponse";
import { RutterCompanyResponse } from "./RutterCompanyResponse";

export const ExternalAccountingSystemCompanyResponse: core.serialization.Schema<
    serializers.entity.ExternalAccountingSystemCompanyResponse.Raw,
    Mercoa.entity.ExternalAccountingSystemCompanyResponse
> = core.serialization
    .union("type", {
        codat: CodatCompanyResponse,
        rutter: RutterCompanyResponse,
        none: CodatCompanyResponse,
    })
    .transform<Mercoa.entity.ExternalAccountingSystemCompanyResponse>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace ExternalAccountingSystemCompanyResponse {
    type Raw =
        | ExternalAccountingSystemCompanyResponse.Codat
        | ExternalAccountingSystemCompanyResponse.Rutter
        | ExternalAccountingSystemCompanyResponse.None;

    interface Codat extends CodatCompanyResponse.Raw {
        type: "codat";
    }

    interface Rutter extends RutterCompanyResponse.Raw {
        type: "rutter";
    }

    interface None extends CodatCompanyResponse.Raw {
        type: "none";
    }
}
