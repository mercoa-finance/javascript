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
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Invoice {
    constructor(protected readonly _options: Invoice.Options) {}

    /**
     * Get invoices for an entity with the given filters.
     *
     * @param {Mercoa.EntityId} entityId
     * @param {Mercoa.entity.EntityGetInvoicesRequest} request
     * @param {Invoice.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mercoa.InvoiceQueryError}
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     *
     * @example
     *     await mercoa.entity.invoice.find("string", {
     *         excludePayables: true,
     *         excludeReceivables: true,
     *         startDate: new Date("2024-01-15T09:30:00.000Z"),
     *         endDate: new Date("2024-01-15T09:30:00.000Z"),
     *         orderBy: Mercoa.InvoiceOrderByField.Amount,
     *         orderDirection: Mercoa.OrderDirection.Asc,
     *         limit: 1,
     *         startingAfter: "string",
     *         metadata: {
     *             key: "string",
     *             value: "string"
     *         },
     *         search: "string",
     *         payerId: "string",
     *         vendorId: "string",
     *         approverId: "string",
     *         approverAction: Mercoa.ApproverAction.None,
     *         invoiceId: "string",
     *         status: Mercoa.InvoiceStatus.Draft,
     *         includeFees: true
     *     })
     */
    public async find(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.EntityGetInvoicesRequest = {},
        requestOptions?: Invoice.RequestOptions
    ): Promise<Mercoa.FindInvoiceResponse> {
        const {
            excludePayables,
            excludeReceivables,
            startDate,
            endDate,
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
            includeFees,
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
                    metadata.map(
                        async (item) =>
                            await serializers.InvoiceMetadataFilter.jsonOrThrow(item, {
                                unrecognizedObjectKeys: "passthrough",
                                allowUnrecognizedUnionMembers: true,
                                allowUnrecognizedEnumValues: true,
                                breadcrumbsPrefix: ["request", "metadata"],
                            })
                    )
                );
            } else {
                _queryParams["metadata"] = await serializers.InvoiceMetadataFilter.jsonOrThrow(metadata, {
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

        if (includeFees != null) {
            _queryParams["includeFees"] = includeFees.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${encodeURIComponent(await serializers.EntityId.jsonOrThrow(entityId))}/invoices`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.34",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.FindInvoiceResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "InvoiceQueryError":
                    throw new Mercoa.InvoiceQueryError(
                        await serializers.InvoiceQueryError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "AuthHeaderMissingError":
                    throw new Mercoa.AuthHeaderMissingError();
                case "AuthHeaderMalformedError":
                    throw new Mercoa.AuthHeaderMalformedError(
                        await serializers.AuthHeaderMalformedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        await serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        await serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        await serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        await serializers.Unimplemented.parseOrThrow(_response.error.body, {
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
     * @param {Mercoa.EntityId} entityId
     * @param {Mercoa.InvoiceId} invoiceId - ID of the invoice to retrieve. This can be the full invoice ID (in_11aa2b77-6391-49e4-8c3f-b198009202c1) or the first 8 characters of the ID (11aa2b77).
     * @param {Mercoa.entity.GetInvoice} request
     * @param {Invoice.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     *
     * @example
     *     await mercoa.entity.invoice.get("string", "string", {
     *         includeFees: true
     *     })
     */
    public async get(
        entityId: Mercoa.EntityId,
        invoiceId: Mercoa.InvoiceId,
        request: Mercoa.entity.GetInvoice = {},
        requestOptions?: Invoice.RequestOptions
    ): Promise<Mercoa.InvoiceResponse> {
        const { includeFees } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (includeFees != null) {
            _queryParams["includeFees"] = includeFees.toString();
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${encodeURIComponent(
                    await serializers.EntityId.jsonOrThrow(entityId)
                )}/invoice/${encodeURIComponent(await serializers.InvoiceId.jsonOrThrow(invoiceId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.34",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.InvoiceResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "AuthHeaderMissingError":
                    throw new Mercoa.AuthHeaderMissingError();
                case "AuthHeaderMalformedError":
                    throw new Mercoa.AuthHeaderMalformedError(
                        await serializers.AuthHeaderMalformedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        await serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        await serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        await serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        await serializers.Unimplemented.parseOrThrow(_response.error.body, {
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
     * Get invoice metrics for an entity with the given filters. Invoices will be grouped by currency. If none of excludePayables, excludeReceivables, payerId, vendorId, or invoiceId status filters are provided, excludeReceivables will be set to true.
     *
     * @param {Mercoa.EntityId} entityId
     * @param {Mercoa.entity.InvoiceMetricsRequest} request
     * @param {Invoice.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Mercoa.InvoiceQueryError}
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     *
     * @example
     *     await mercoa.entity.invoice.metrics("string", {
     *         search: "string",
     *         excludePayables: true,
     *         excludeReceivables: true,
     *         returnByDate: Mercoa.InvoiceMetricsPerDateGroupBy.CreationDate,
     *         payerId: "string",
     *         vendorId: "string",
     *         approverId: "string",
     *         invoiceId: "string",
     *         status: Mercoa.InvoiceStatus.Draft,
     *         dueDateStart: new Date("2024-01-15T09:30:00.000Z"),
     *         dueDateEnd: new Date("2024-01-15T09:30:00.000Z"),
     *         createdDateStart: new Date("2024-01-15T09:30:00.000Z"),
     *         createdDateEnd: new Date("2024-01-15T09:30:00.000Z"),
     *         currency: Mercoa.CurrencyCode.Aed
     *     })
     */
    public async metrics(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.InvoiceMetricsRequest = {},
        requestOptions?: Invoice.RequestOptions
    ): Promise<Mercoa.InvoiceMetricsResponse[]> {
        const {
            search,
            excludePayables,
            excludeReceivables,
            returnByDate,
            payerId,
            vendorId,
            approverId,
            invoiceId,
            status,
            dueDateStart,
            dueDateEnd,
            createdDateStart,
            createdDateEnd,
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

        if (dueDateStart != null) {
            _queryParams["dueDateStart"] = dueDateStart.toISOString();
        }

        if (dueDateEnd != null) {
            _queryParams["dueDateEnd"] = dueDateEnd.toISOString();
        }

        if (createdDateStart != null) {
            _queryParams["createdDateStart"] = createdDateStart.toISOString();
        }

        if (createdDateEnd != null) {
            _queryParams["createdDateEnd"] = createdDateEnd.toISOString();
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
                `/entity/${encodeURIComponent(await serializers.EntityId.jsonOrThrow(entityId))}/invoice-metrics`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.34",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.entity.invoice.metrics.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch ((_response.error.body as any)?.["errorName"]) {
                case "InvoiceQueryError":
                    throw new Mercoa.InvoiceQueryError(
                        await serializers.InvoiceQueryError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "AuthHeaderMissingError":
                    throw new Mercoa.AuthHeaderMissingError();
                case "AuthHeaderMalformedError":
                    throw new Mercoa.AuthHeaderMalformedError(
                        await serializers.AuthHeaderMalformedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unauthorized":
                    throw new Mercoa.Unauthorized(
                        await serializers.Unauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Forbidden":
                    throw new Mercoa.Forbidden(
                        await serializers.Forbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "NotFound":
                    throw new Mercoa.NotFound(
                        await serializers.NotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "Unimplemented":
                    throw new Mercoa.Unimplemented(
                        await serializers.Unimplemented.parseOrThrow(_response.error.body, {
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
