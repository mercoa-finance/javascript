/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         status: Mercoa.InvoiceStatus.New,
 *         amount: 100,
 *         currency: Mercoa.CurrencyCode.Usd,
 *         invoiceDate: new Date("2021-01-01T00:00:00.000Z"),
 *         dueDate: new Date("2021-01-31T00:00:00.000Z"),
 *         invoiceNumber: "INV-123",
 *         noteToSelf: "For the month of January",
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *         paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
 *         paymentDestinationOptions: {
 *             type: "check",
 *             delivery: Mercoa.CheckDeliveryMethod.Mail
 *         },
 *         lineItems: [{
 *                 amount: 100,
 *                 currency: Mercoa.CurrencyCode.Usd,
 *                 description: "Product A",
 *                 name: "Product A",
 *                 quantity: 1,
 *                 unitPrice: 100,
 *                 category: Mercoa.InvoiceLineItemCategory.Expense,
 *                 serviceStartDate: new Date("2021-01-01T00:00:00.000Z"),
 *                 serviceEndDate: new Date("2021-01-31T00:00:00.000Z"),
 *                 metadata: {
 *                     "key1": "value1",
 *                     "key2": "value2"
 *                 },
 *                 glAccountId: "600394"
 *             }],
 *         creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         creatorUserId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506"
 *     }
 *
 * @example
 *     {
 *         status: Mercoa.InvoiceStatus.Draft,
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c"
 *     }
 *
 * @example
 *     {
 *         status: Mercoa.InvoiceStatus.New,
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *         currency: Mercoa.CurrencyCode.Usd,
 *         amount: 100,
 *         invoiceDate: new Date("2021-01-01T00:00:00.000Z"),
 *         dueDate: new Date("2021-01-31T00:00:00.000Z"),
 *         paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769"
 *     }
 *
 * @example
 *     {
 *         status: Mercoa.InvoiceStatus.Scheduled,
 *         payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
 *         vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
 *         currency: Mercoa.CurrencyCode.Usd,
 *         amount: 100,
 *         invoiceDate: new Date("2021-01-01T00:00:00.000Z"),
 *         dueDate: new Date("2021-01-31T00:00:00.000Z"),
 *         paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
 *         paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
 *         deductionDate: new Date("2021-01-29T00:00:00.000Z")
 *     }
 */
export interface InvoiceCreationWithEntityRequest extends Mercoa.InvoiceRequestBase {
    lineItems?: Mercoa.InvoiceLineItemCreationRequest[];
    /** ID of the entity who created this invoice. */
    creatorEntityId: Mercoa.EntityId;
}
