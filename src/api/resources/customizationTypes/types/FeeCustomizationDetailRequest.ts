/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

/**
 * @example
 *     {
 *         source: {
 *             achStandard: {
 *                 type: "flat",
 *                 amount: 2.5
 *             },
 *             achSameDay: {
 *                 type: "percentage",
 *                 amount: 2.5
 *             },
 *             checkPrint: {
 *                 type: "flat",
 *                 amount: 2.5
 *             },
 *             checkMail: {
 *                 type: "flat",
 *                 amount: 2.5
 *             },
 *             checkMailPriority: {
 *                 type: "flat",
 *                 amount: 2.5
 *             },
 *             checkMailUpsNextDay: {
 *                 type: "flat",
 *                 amount: 2.5
 *             }
 *         },
 *         destination: {
 *             achStandard: {
 *                 type: "flat",
 *                 amount: 2.5
 *             },
 *             achSameDay: {
 *                 type: "percentage",
 *                 amount: 2.5
 *             },
 *             checkPrint: {
 *                 type: "flat",
 *                 amount: 2.5
 *             },
 *             checkMail: {
 *                 type: "flat",
 *                 amount: 2.5
 *             },
 *             checkMailPriority: {
 *                 type: "flat",
 *                 amount: 2.5
 *             },
 *             checkMailUpsNextDay: {
 *                 type: "flat",
 *                 amount: 2.5
 *             }
 *         }
 *     }
 */
export interface FeeCustomizationDetailRequest {
    /** Fees to be applied to the source of the transaction. */
    source?: Mercoa.FeeCustomizationRailRequest;
    /** Fees to be applied to the destination of the transaction. */
    destination?: Mercoa.FeeCustomizationRailRequest;
}
