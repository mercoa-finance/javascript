/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Mercoa from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import { toJson } from "../../../../../../core/json";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Invoice {
    export interface Options {
        environment?: core.Supplier<environments.MercoaEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token: core.Supplier<core.BearerToken>;
        /** Override the X-API-Version header */
        xApiVersion?: "2024-08-01";
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
        /** Override the X-API-Version header */
        xApiVersion?: "2024-08-01";
    }
}

export class Invoice {
    constructor(protected readonly _options: Invoice.Options) {}

    /**
     * Get invoices for an entity with the given filters.
     *
     * @param {Mercoa.EntityId} entityId - Entity ID or Entity ForeignID
     * @param {Mercoa.entity.EntityGetInvoicesRequest} request
     * @param {Invoice.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mercoa.BadRequest}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Conflict}
     * @throws {@link Mercoa.InternalServerError}
     * @throws {@link Mercoa.Unimplemented}
     *
     * @example
     *     await client.entity.invoice.find("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
     *         excludeReceivables: true,
     *         orderBy: "CREATED_AT",
     *         orderDirection: "ASC",
     *         limit: 10
     *     })
     */
    public async find(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.EntityGetInvoicesRequest = {},
        requestOptions?: Invoice.RequestOptions,
    ): Promise<Mercoa.FindInvoiceResponse> {
        const {
            excludePayables,
            excludeReceivables,
            startDate,
            endDate,
            dateType,
            orderBy,
            orderDirection,
            limit,
            startingAfter,
            metadata,
            lineItemMetadata,
            lineItemGlAccountId,
            search,
            payerId,
            vendorId,
            creatorUserId,
            approverId,
            approverAction,
            invoiceId,
            status,
            paymentType,
            returnPayerMetadata,
            returnVendorMetadata,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (excludePayables != null) {
            _queryParams["excludePayables"] = excludePayables.toString();
        }

        if (excludeReceivables != null) {
            _queryParams["excludeReceivables"] = excludeReceivables.toString();
        }

        if (startDate != null) {
            _queryParams["startDate"] = startDate.toISOString();
        }

        if (endDate != null) {
            _queryParams["endDate"] = endDate.toISOString();
        }

        if (dateType != null) {
            _queryParams["dateType"] = serializers.InvoiceDateFilter.jsonOrThrow(dateType, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (orderBy != null) {
            _queryParams["orderBy"] = serializers.InvoiceOrderByField.jsonOrThrow(orderBy, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (orderDirection != null) {
            _queryParams["orderDirection"] = serializers.OrderDirection.jsonOrThrow(orderDirection, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (startingAfter != null) {
            _queryParams["startingAfter"] = startingAfter;
        }

        if (metadata != null) {
            if (Array.isArray(metadata)) {
                _queryParams["metadata"] = await Promise.all(
                    metadata.map(async (item) =>
                        serializers.MetadataFilter.jsonOrThrow(item, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["request", "metadata"],
                        }),
                    ),
                );
            } else {
                _queryParams["metadata"] = serializers.MetadataFilter.jsonOrThrow(metadata, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["request", "metadata"],
                });
            }
        }

        if (lineItemMetadata != null) {
            if (Array.isArray(lineItemMetadata)) {
                _queryParams["lineItemMetadata"] = await Promise.all(
                    lineItemMetadata.map(async (item) =>
                        serializers.MetadataFilter.jsonOrThrow(item, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["request", "lineItemMetadata"],
                        }),
                    ),
                );
            } else {
                _queryParams["lineItemMetadata"] = serializers.MetadataFilter.jsonOrThrow(lineItemMetadata, {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["request", "lineItemMetadata"],
                });
            }
        }

        if (lineItemGlAccountId != null) {
            if (Array.isArray(lineItemGlAccountId)) {
                _queryParams["lineItemGlAccountId"] = lineItemGlAccountId.map((item) => item);
            } else {
                _queryParams["lineItemGlAccountId"] = lineItemGlAccountId;
            }
        }

        if (search != null) {
            _queryParams["search"] = search;
        }

        if (payerId != null) {
            if (Array.isArray(payerId)) {
                _queryParams["payerId"] = payerId.map((item) =>
                    serializers.EntityId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["payerId"] = payerId;
            }
        }

        if (vendorId != null) {
            if (Array.isArray(vendorId)) {
                _queryParams["vendorId"] = vendorId.map((item) =>
                    serializers.EntityId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["vendorId"] = vendorId;
            }
        }

        if (creatorUserId != null) {
            if (Array.isArray(creatorUserId)) {
                _queryParams["creatorUserId"] = creatorUserId.map((item) =>
                    serializers.EntityUserId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["creatorUserId"] = creatorUserId;
            }
        }

        if (approverId != null) {
            if (Array.isArray(approverId)) {
                _queryParams["approverId"] = approverId.map((item) =>
                    serializers.EntityUserId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["approverId"] = approverId;
            }
        }

        if (approverAction != null) {
            if (Array.isArray(approverAction)) {
                _queryParams["approverAction"] = approverAction.map((item) =>
                    serializers.ApproverAction.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["approverAction"] = serializers.ApproverAction.jsonOrThrow(approverAction, {
                    unrecognizedObjectKeys: "strip",
                });
            }
        }

        if (invoiceId != null) {
            if (Array.isArray(invoiceId)) {
                _queryParams["invoiceId"] = invoiceId.map((item) =>
                    serializers.InvoiceId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["invoiceId"] = invoiceId;
            }
        }

        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) =>
                    serializers.InvoiceStatus.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["status"] = serializers.InvoiceStatus.jsonOrThrow(status, {
                    unrecognizedObjectKeys: "strip",
                });
            }
        }

        if (paymentType != null) {
            _queryParams["paymentType"] = toJson(paymentType);
        }

        if (returnPayerMetadata != null) {
            _queryParams["returnPayerMetadata"] = returnPayerMetadata.toString();
        }

        if (returnVendorMetadata != null) {
            _queryParams["returnVendorMetadata"] = returnVendorMetadata.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MercoaEnvironment.Production,
                `/entity/${encodeURIComponent(serializers.EntityId.jsonOrThrow(entityId))}/invoices`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "0.6.14",
                "User-Agent": "@mercoa/javascript/0.6.14",
                "X-API-Version": requestOptions?.xApiVersion ?? this._options?.xApiVersion ?? "2024-08-01",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.FindInvoiceResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "BadRequest":
                    throw new Mercoa.BadRequest(
                        serializers.BadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "Conflict":
                    throw new Mercoa.Conflict(
                        serializers.Conflict.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "InternalServerError":
                    throw new Mercoa.InternalServerError(
                        serializers.InternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        serializers.Unimplemented.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.MercoaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaTimeoutError("Timeout exceeded when calling GET /entity/{entityId}/invoices.");
            case "unknown":
                throw new errors.MercoaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get invoice metrics for an entity with the given filters. Invoices will always be grouped by currency. If none of excludePayables, excludeReceivables, payerId, vendorId, or invoiceId status filters are provided, excludeReceivables will be set to true.
     *
     * @param {Mercoa.EntityId} entityId - Entity ID or Entity ForeignID
     * @param {Mercoa.entity.InvoiceMetricsRequest} request
     * @param {Invoice.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mercoa.BadRequest}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Conflict}
     * @throws {@link Mercoa.InternalServerError}
     * @throws {@link Mercoa.Unimplemented}
     *
     * @example
     *     await client.entity.invoice.metrics("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
     *         returnByDate: "CREATION_DATE",
     *         excludeReceivables: true,
     *         startDate: "2021-01-01T00:00:00.000Z",
     *         endDate: "2021-01-31T23:59:59.999Z",
     *         currency: "USD",
     *         status: "NEW"
     *     })
     */
    public async metrics(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.InvoiceMetricsRequest = {},
        requestOptions?: Invoice.RequestOptions,
    ): Promise<Mercoa.InvoiceMetricsResponse[]> {
        const {
            search,
            excludePayables,
            excludeReceivables,
            returnByDate,
            returnByDateFrequency,
            groupBy,
            payerId,
            vendorId,
            approverId,
            invoiceId,
            status,
            startDate,
            endDate,
            dateType,
            currency,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (search != null) {
            _queryParams["search"] = search;
        }

        if (excludePayables != null) {
            _queryParams["excludePayables"] = excludePayables.toString();
        }

        if (excludeReceivables != null) {
            _queryParams["excludeReceivables"] = excludeReceivables.toString();
        }

        if (returnByDate != null) {
            _queryParams["returnByDate"] = serializers.InvoiceMetricsPerDateGroupBy.jsonOrThrow(returnByDate, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (returnByDateFrequency != null) {
            _queryParams["returnByDateFrequency"] = serializers.InvoiceMetricsPerDateFrequency.jsonOrThrow(
                returnByDateFrequency,
                { unrecognizedObjectKeys: "strip" },
            );
        }

        if (groupBy != null) {
            if (Array.isArray(groupBy)) {
                _queryParams["groupBy"] = groupBy.map((item) =>
                    serializers.InvoiceMetricsGroupBy.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["groupBy"] = serializers.InvoiceMetricsGroupBy.jsonOrThrow(groupBy, {
                    unrecognizedObjectKeys: "strip",
                });
            }
        }

        if (payerId != null) {
            if (Array.isArray(payerId)) {
                _queryParams["payerId"] = payerId.map((item) =>
                    serializers.EntityId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["payerId"] = payerId;
            }
        }

        if (vendorId != null) {
            if (Array.isArray(vendorId)) {
                _queryParams["vendorId"] = vendorId.map((item) =>
                    serializers.EntityId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["vendorId"] = vendorId;
            }
        }

        if (approverId != null) {
            if (Array.isArray(approverId)) {
                _queryParams["approverId"] = approverId.map((item) =>
                    serializers.EntityUserId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["approverId"] = approverId;
            }
        }

        if (invoiceId != null) {
            if (Array.isArray(invoiceId)) {
                _queryParams["invoiceId"] = invoiceId.map((item) =>
                    serializers.InvoiceId.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["invoiceId"] = invoiceId;
            }
        }

        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) =>
                    serializers.InvoiceStatus.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["status"] = serializers.InvoiceStatus.jsonOrThrow(status, {
                    unrecognizedObjectKeys: "strip",
                });
            }
        }

        if (startDate != null) {
            _queryParams["startDate"] = startDate.toISOString();
        }

        if (endDate != null) {
            _queryParams["endDate"] = endDate.toISOString();
        }

        if (dateType != null) {
            _queryParams["dateType"] = serializers.InvoiceDateFilter.jsonOrThrow(dateType, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (currency != null) {
            if (Array.isArray(currency)) {
                _queryParams["currency"] = currency.map((item) =>
                    serializers.CurrencyCode.jsonOrThrow(item, { unrecognizedObjectKeys: "strip" }),
                );
            } else {
                _queryParams["currency"] = serializers.CurrencyCode.jsonOrThrow(currency, {
                    unrecognizedObjectKeys: "strip",
                });
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MercoaEnvironment.Production,
                `/entity/${encodeURIComponent(serializers.EntityId.jsonOrThrow(entityId))}/invoice-metrics`,
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "0.6.14",
                "User-Agent": "@mercoa/javascript/0.6.14",
                "X-API-Version": requestOptions?.xApiVersion ?? this._options?.xApiVersion ?? "2024-08-01",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.entity.invoice.metrics.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "BadRequest":
                    throw new Mercoa.BadRequest(
                        serializers.BadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "Conflict":
                    throw new Mercoa.Conflict(
                        serializers.Conflict.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "InternalServerError":
                    throw new Mercoa.InternalServerError(
                        serializers.InternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        serializers.Unimplemented.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                    );
                default:
                    throw new errors.MercoaError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MercoaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MercoaTimeoutError(
                    "Timeout exceeded when calling GET /entity/{entityId}/invoice-metrics.",
                );
            case "unknown":
                throw new errors.MercoaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string> {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
