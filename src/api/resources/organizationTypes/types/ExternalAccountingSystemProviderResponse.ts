/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export type ExternalAccountingSystemProviderResponse =
    | Mercoa.ExternalAccountingSystemProviderResponse.None
    | Mercoa.ExternalAccountingSystemProviderResponse.Codat
    | Mercoa.ExternalAccountingSystemProviderResponse.Rutter;

export declare namespace ExternalAccountingSystemProviderResponse {
    interface None extends Mercoa.CodatProviderResponse {
        type: "none";
    }

    interface Codat extends Mercoa.CodatProviderResponse {
        type: "codat";
    }

    interface Rutter extends Mercoa.RutterProviderResponse {
        type: "rutter";
    }
}
