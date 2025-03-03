/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../index";

export type ExternalAccountingSystemCompanyCreationRequest =
    | Mercoa.entity.ExternalAccountingSystemCompanyCreationRequest.Codat
    | Mercoa.entity.ExternalAccountingSystemCompanyCreationRequest.Rutter;

export namespace ExternalAccountingSystemCompanyCreationRequest {
    export interface Codat extends Mercoa.entity.CodatCompanyCreationRequest {
        type: "codat";
    }

    export interface Rutter extends Mercoa.entity.RutterCompanyCreationRequest {
        type: "rutter";
    }
}
