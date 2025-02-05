/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Permission =
    | "invoice.all"
    | "invoice.view.all"
    | "invoice.view.draft"
    | "invoice.view.new"
    | "invoice.view.approved"
    | "invoice.view.scheduled"
    | "invoice.view.pending"
    | "invoice.view.paid"
    | "invoice.view.archived"
    | "invoice.view.refused"
    | "invoice.view.canceled"
    | "invoice.view.failed"
    | "invoice.create.all"
    | "invoice.create.draft"
    | "invoice.create.new"
    | "invoice.create.approved"
    | "invoice.create.scheduled"
    | "invoice.delete"
    | "invoice.comment.view"
    | "invoice.comment.create"
    | "invoice.approver.override"
    | "invoice.check.print"
    | "paymentMethod.all"
    | "paymentMethod.view"
    | "paymentMethod.create"
    | "paymentMethod.update"
    | "paymentMethod.delete";

export const Permission = {
    InvoiceAll: "invoice.all",
    InvoiceViewAll: "invoice.view.all",
    InvoiceViewDraft: "invoice.view.draft",
    InvoiceViewNew: "invoice.view.new",
    InvoiceViewApproved: "invoice.view.approved",
    InvoiceViewScheduled: "invoice.view.scheduled",
    InvoiceViewPending: "invoice.view.pending",
    InvoiceViewPaid: "invoice.view.paid",
    InvoiceViewArchived: "invoice.view.archived",
    InvoiceViewRefused: "invoice.view.refused",
    InvoiceViewCanceled: "invoice.view.canceled",
    InvoiceViewFailed: "invoice.view.failed",
    InvoiceCreateAll: "invoice.create.all",
    InvoiceCreateDraft: "invoice.create.draft",
    InvoiceCreateNew: "invoice.create.new",
    InvoiceCreateApproved: "invoice.create.approved",
    InvoiceCreateScheduled: "invoice.create.scheduled",
    InvoiceDelete: "invoice.delete",
    InvoiceCommentView: "invoice.comment.view",
    InvoiceCommentCreate: "invoice.comment.create",
    InvoiceApproverOverride: "invoice.approver.override",
    InvoiceCheckPrint: "invoice.check.print",
    PaymentMethodAll: "paymentMethod.all",
    PaymentMethodView: "paymentMethod.view",
    PaymentMethodCreate: "paymentMethod.create",
    PaymentMethodUpdate: "paymentMethod.update",
    PaymentMethodDelete: "paymentMethod.delete",
} as const;
