/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Mercoa from "../../../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";

export declare namespace Invoice {
    interface Options {
        environment?: core.Supplier<environments.MercoaEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Invoice {
    constructor(protected readonly _options: Invoice.Options) {}

    /**
     * Get invoices for an entity
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     */
    public async find(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.EntityGetInvoicesRequest = {}
    ): Promise<Mercoa.FindInvoiceResponse> {
        const { startDate, endDate, orderBy, orderDirection, limit, startingAfter, search, status } = request;
        const _queryParams = new URLSearchParams();
        if (startDate != null) {
            _queryParams.append("startDate", startDate.toISOString());
        }

        if (endDate != null) {
            _queryParams.append("endDate", endDate.toISOString());
        }

        if (orderBy != null) {
            _queryParams.append("orderBy", orderBy);
        }

        if (orderDirection != null) {
            _queryParams.append("orderDirection", orderDirection);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (startingAfter != null) {
            _queryParams.append("startingAfter", startingAfter);
        }

        if (search != null) {
            _queryParams.append("search", search);
        }

        if (status != null) {
            if (Array.isArray(status)) {
                for (const _item of status) {
                    _queryParams.append("status", _item);
                }
            } else {
                _queryParams.append("status", status);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/invoices`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.2.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
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
     * Get invoice metrics for an entity
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     */
    public async metrics(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.InvoiceMetricsRequest
    ): Promise<Mercoa.InvoiceMetricsResponse> {
        const { search, status, dueDateStart, dueDateEnd, createdDateStart, createdDateEnd, currency } = request;
        const _queryParams = new URLSearchParams();
        if (search != null) {
            _queryParams.append("search", search);
        }

        if (status != null) {
            if (Array.isArray(status)) {
                for (const _item of status) {
                    _queryParams.append("status", _item);
                }
            } else {
                _queryParams.append("status", status);
            }
        }

        if (dueDateStart != null) {
            _queryParams.append("dueDateStart", dueDateStart.toISOString());
        }

        if (dueDateEnd != null) {
            _queryParams.append("dueDateEnd", dueDateEnd.toISOString());
        }

        if (createdDateStart != null) {
            _queryParams.append("createdDateStart", createdDateStart.toISOString());
        }

        if (createdDateEnd != null) {
            _queryParams.append("createdDateEnd", createdDateEnd.toISOString());
        }

        _queryParams.append("currency", currency);
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/invoice-metrics`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.2.2",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.InvoiceMetricsResponse.parseOrThrow(_response.body, {
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

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
