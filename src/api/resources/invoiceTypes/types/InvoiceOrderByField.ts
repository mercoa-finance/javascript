/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type InvoiceOrderByField =
    | "AMOUNT"
    | "DUE_DATE"
    | "CREATED_AT"
    | "UPDATED_AT"
    | "DEDUCTION_DATE"
    | "INVOICE_DATE"
    | "SETTLEMENT_DATE"
    | "INVOICE_NUMBER"
    | "VENDOR_NAME"
    | "PAYER_NAME";
export const InvoiceOrderByField = {
    Amount: "AMOUNT",
    DueDate: "DUE_DATE",
    CreatedAt: "CREATED_AT",
    UpdatedAt: "UPDATED_AT",
    DeductionDate: "DEDUCTION_DATE",
    InvoiceDate: "INVOICE_DATE",
    SettlementDate: "SETTLEMENT_DATE",
    InvoiceNumber: "INVOICE_NUMBER",
    VendorName: "VENDOR_NAME",
    PayerName: "PAYER_NAME",
} as const;
