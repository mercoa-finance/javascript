/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Mercoa from "../../../index";

export interface MetadataFilter {
    key: string;
    /** If multiple values are provided, the filter will match if any of the values match (OR filter) */
    value: Mercoa.StringOrStringArray;
}
