/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../..";

export interface FindCounterpartiesResponse {
    /** Counterparties that have been paid by this entity */
    entityCounterparties: Mercoa.CounterpartyResponse[];
    /** Counterparties that have paid by any entity on your platform */
    platformCounterparties: Mercoa.CounterpartyResponse[];
    /** External counterparties that have been verified by Mercoa */
    mercoaCounterparties: Mercoa.CounterpartyResponse[];
}
