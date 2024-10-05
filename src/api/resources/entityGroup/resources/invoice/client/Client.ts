/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Mercoa from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Invoice {
    interface Options {
        environment?: core.Supplier<environments.MercoaEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        /** Override the X-API-Version header */
        xApiVersion?: "2024-08-01";
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the X-API-Version header */
        xApiVersion?: "2024-08-01";
    }
}

export class Invoice {
    constructor(protected readonly _options: Invoice.Options) {}

    /**
     * Get invoices for an entity group with the given filters.
     *
     * @param {Mercoa.EntityGroupId} entityGroupId - Entity Group ID or Entity Group ForeignID
     * @param {Mercoa.entityGroup.EntityGetInvoicesRequest} request
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
     *     await client.entityGroup.invoice.find("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
     *         excludeReceivables: true,
     *         orderBy: Mercoa.InvoiceOrderByField.CreatedAt,
     *         orderDirection: Mercoa.OrderDirection.Asc,
     *         limit: 10
     *     })
     */
    public async find(
        entityGroupId: Mercoa.EntityGroupId,
        request: Mercoa.entityGroup.EntityGetInvoicesRequest = {},
        requestOptions?: Invoice.RequestOptions
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
            search,
            payerId,
            vendorId,
            approverId,
            approverAction,
            invoiceId,
            status,
            paymentType,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
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
            _queryParams["dateType"] = dateType;
        }

        if (orderBy != null) {
            _queryParams["orderBy"] = orderBy;
        }

        if (orderDirection != null) {
            _queryParams["orderDirection"] = orderDirection;
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
                        })
                    )
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

        if (search != null) {
            _queryParams["search"] = search;
        }

        if (payerId != null) {
            if (Array.isArray(payerId)) {
                _queryParams["payerId"] = payerId.map((item) => item);
            } else {
                _queryParams["payerId"] = payerId;
            }
        }

        if (vendorId != null) {
            if (Array.isArray(vendorId)) {
                _queryParams["vendorId"] = vendorId.map((item) => item);
            } else {
                _queryParams["vendorId"] = vendorId;
            }
        }

        if (approverId != null) {
            if (Array.isArray(approverId)) {
                _queryParams["approverId"] = approverId.map((item) => item);
            } else {
                _queryParams["approverId"] = approverId;
            }
        }

        if (approverAction != null) {
            if (Array.isArray(approverAction)) {
                _queryParams["approverAction"] = approverAction.map((item) => item);
            } else {
                _queryParams["approverAction"] = approverAction;
            }
        }

        if (invoiceId != null) {
            if (Array.isArray(invoiceId)) {
                _queryParams["invoiceId"] = invoiceId.map((item) => item);
            } else {
                _queryParams["invoiceId"] = invoiceId;
            }
        }

        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) => item);
            } else {
                _queryParams["status"] = status;
            }
        }

        if (paymentType != null) {
            _queryParams["paymentType"] = JSON.stringify(paymentType);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entityGroup/${encodeURIComponent(serializers.EntityGroupId.jsonOrThrow(entityGroupId))}/invoices`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "0.5.9",
                "User-Agent": "@mercoa/javascript/0.5.9",
                "X-API-Version": requestOptions?.xApiVersion ?? this._options?.xApiVersion ?? "2024-08-01",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
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
                        })
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Conflict":
                    throw new Mercoa.Conflict(
                        serializers.Conflict.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "InternalServerError":
                    throw new Mercoa.InternalServerError(
                        serializers.InternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        serializers.Unimplemented.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
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
                throw new errors.MercoaTimeoutError();
            case "unknown":
                throw new errors.MercoaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get invoice metrics for an entity group with the given filters. Invoices will be grouped by currency. If none of excludePayables, excludeReceivables, payerId, vendorId, or invoiceId status filters are provided, excludeReceivables will be set to true.
     *
     * @param {Mercoa.EntityGroupId} entityGroupId - Entity Group ID or Entity Group ForeignID
     * @param {Mercoa.entityGroup.GroupInvoiceMetricsRequest} request
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
     *     await client.entityGroup.invoice.metrics("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
     *         returnByDate: Mercoa.InvoiceMetricsPerDateGroupBy.CreationDate,
     *         excludeReceivables: true,
     *         startDate: new Date("2021-01-01T00:00:00.000Z"),
     *         endDate: new Date("2021-01-31T23:59:59.999Z"),
     *         currency: Mercoa.CurrencyCode.Usd,
     *         status: Mercoa.InvoiceStatus.New
     *     })
     */
    public async metrics(
        entityGroupId: Mercoa.EntityGroupId,
        request: Mercoa.entityGroup.GroupInvoiceMetricsRequest = {},
        requestOptions?: Invoice.RequestOptions
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
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
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
            _queryParams["returnByDate"] = returnByDate;
        }

        if (returnByDateFrequency != null) {
            _queryParams["returnByDateFrequency"] = returnByDateFrequency;
        }

        if (groupBy != null) {
            if (Array.isArray(groupBy)) {
                _queryParams["groupBy"] = groupBy.map((item) => item);
            } else {
                _queryParams["groupBy"] = groupBy;
            }
        }

        if (payerId != null) {
            if (Array.isArray(payerId)) {
                _queryParams["payerId"] = payerId.map((item) => item);
            } else {
                _queryParams["payerId"] = payerId;
            }
        }

        if (vendorId != null) {
            if (Array.isArray(vendorId)) {
                _queryParams["vendorId"] = vendorId.map((item) => item);
            } else {
                _queryParams["vendorId"] = vendorId;
            }
        }

        if (approverId != null) {
            if (Array.isArray(approverId)) {
                _queryParams["approverId"] = approverId.map((item) => item);
            } else {
                _queryParams["approverId"] = approverId;
            }
        }

        if (invoiceId != null) {
            if (Array.isArray(invoiceId)) {
                _queryParams["invoiceId"] = invoiceId.map((item) => item);
            } else {
                _queryParams["invoiceId"] = invoiceId;
            }
        }

        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) => item);
            } else {
                _queryParams["status"] = status;
            }
        }

        if (startDate != null) {
            _queryParams["startDate"] = startDate.toISOString();
        }

        if (endDate != null) {
            _queryParams["endDate"] = endDate.toISOString();
        }

        if (dateType != null) {
            _queryParams["dateType"] = dateType;
        }

        if (currency != null) {
            if (Array.isArray(currency)) {
                _queryParams["currency"] = currency.map((item) => item);
            } else {
                _queryParams["currency"] = currency;
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entityGroup/${encodeURIComponent(
                    serializers.EntityGroupId.jsonOrThrow(entityGroupId)
                )}/invoice-metrics`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "0.5.9",
                "User-Agent": "@mercoa/javascript/0.5.9",
                "X-API-Version": requestOptions?.xApiVersion ?? this._options?.xApiVersion ?? "2024-08-01",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.entityGroup.invoice.metrics.Response.parseOrThrow(_response.body, {
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
                        })
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Conflict":
                    throw new Mercoa.Conflict(
                        serializers.Conflict.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "InternalServerError":
                    throw new Mercoa.InternalServerError(
                        serializers.InternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        serializers.Unimplemented.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
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
                throw new errors.MercoaTimeoutError();
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
