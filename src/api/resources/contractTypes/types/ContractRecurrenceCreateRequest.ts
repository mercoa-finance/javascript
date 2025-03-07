/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         rrule: "DTSTART:20250201T000000ZRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1",
 *         justification: "Monthly recurring fee billed in advance on the 1st of each month",
 *         filteredContractSummary: "Contract Start Date: January 29, 2025\nParties to the Agreement:\n- Provider (Vendor): [Vendor Name] - Client (Payer): [Client Name]\nFees and Payment Terms:\n- Monthly Recurring Fee: \\$20.00 - Payment Schedule: Fees are payable in advance on the 1st day of each month. - First Payment Date: February 1, 2025 - Payment Method: Via credit card to the account designated by Provider. - Payment Due Date: Payment is due 5 days after the invoice date.\n",
 *         invoiceSchema: {
 *             lineItems: [{
 *                     name: "Monthly Subscription Service Fee",
 *                     unitPrice: 20,
 *                     currency: Mercoa.CurrencyCode.Usd,
 *                     quantity: 1
 *                 }]
 *         }
 *     }
 */
export interface ContractRecurrenceCreateRequest {
    /** RFC 5545 RRULE string */
    rrule: string;
    /** Natural language justification for the recurrence */
    justification: string;
    /** Natural language summary of the contract, filtered to only include information relevant to the recurrence */
    filteredContractSummary: string;
    /** Schema of the invoices to be created by this recurrence */
    invoiceSchema: Mercoa.ContractInvoiceSchema;
}
