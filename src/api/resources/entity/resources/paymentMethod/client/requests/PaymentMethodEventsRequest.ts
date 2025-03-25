/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface PaymentMethodEventsRequest {
    /**
     * Start date filter. If not provided, events from the start of time will be returned.
     */
    startDate?: Date;
    /**
     * End date filter. If not provided, events to the end of time will be returned.
     */
    endDate?: Date;
    /**
     * Limit the number of events returned. Limit can range between 1 and 100, and the default is 50.
     */
    limit?: number;
    /**
     * The ID of the event to start after.
     */
    startingAfter?: Mercoa.PaymentMethodEventId;
}
