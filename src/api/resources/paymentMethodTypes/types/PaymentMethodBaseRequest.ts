/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface PaymentMethodBaseRequest {
    /** If true, this payment method will be set as the default source. Only one payment method can be set as the default source. If another payment method is already set as the default source, it will be unset. */
    defaultSource?: boolean;
    /** If true, this payment method will be set as the default destination. Only one payment method can be set as the default destination. If another payment method is already set as the default destination, it will be unset. */
    defaultDestination?: boolean;
    /** ID for this payment method in the external accounting system (e.g Rutter or Codat) */
    externalAccountingSystemId?: string;
    /** If true, this payment method will be frozen. Frozen payment methods cannot be used for payments, but will still be returned in API responses. */
    frozen?: boolean;
    /** Metadata associated with this payment method. */
    metadata?: Record<string, string>;
    /** (ALPHA, MAY BE REMOVED) Indicate whether the payment method has been verified by the entity. This is useful if another entity has added this payment method to this entity, and you want the owner of the payment method to verify it is correct. */
    confirmedByEntity?: boolean;
}
