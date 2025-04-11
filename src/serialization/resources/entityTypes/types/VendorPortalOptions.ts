/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Mercoa from "../../../../api/index";
import * as core from "../../../../core";
import { VendorPortalTab } from "./VendorPortalTab";

export const VendorPortalOptions: core.serialization.ObjectSchema<
    serializers.VendorPortalOptions.Raw,
    Mercoa.VendorPortalOptions
> = core.serialization.object({
    tabs: core.serialization.list(VendorPortalTab).optional(),
    defaultTab: VendorPortalTab.optional(),
    welcomeMessage: core.serialization.string().optional(),
});

export declare namespace VendorPortalOptions {
    export interface Raw {
        tabs?: VendorPortalTab.Raw[] | null;
        defaultTab?: VendorPortalTab.Raw | null;
        welcomeMessage?: string | null;
    }
}
