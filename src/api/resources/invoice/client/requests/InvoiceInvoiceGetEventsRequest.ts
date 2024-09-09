/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface InvoiceInvoiceGetEventsRequest {
    /**
     * Start date filter. If not provided, events from the start of time will be returned.
     */
    startDate?: Date;
    /**
     * End date filter. If not provided, events to the end of time will be returned.
     */
    endDate?: Date;
}
