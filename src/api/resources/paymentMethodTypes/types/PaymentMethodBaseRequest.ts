/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PaymentMethodBaseRequest {
    /** If true, this payment method will be set as the default source. Only one payment method can be set as the default source. If another payment method is already set as the default source, it will be unset. */
    defaultSource?: boolean;
    /** If true, this payment method will be set as the default destination. Only one payment method can be set as the default destination. If another payment method is already set as the default destination, it will be unset. */
    defaultDestination?: boolean;
}
