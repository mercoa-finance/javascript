/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Mercoa } from "@mercoa/javascript";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Entity {
    interface Options {
        environment?: environments.MercoaEnvironment | string;
        token: core.Supplier<core.BearerToken>;
    }
}

export class Entity {
    constructor(private readonly options: Entity.Options) {}

    /**
     * Get all entities
     */
    public async getAll(): Promise<Mercoa.EntityResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.MercoaEnvironment.Production, "/entities"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.entity.getAll.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    public async find(request: Mercoa.FindEntities = {}): Promise<Mercoa.EntityResponse[]> {
        const { foreignId, status } = request;
        const _queryParams = new URLSearchParams();
        if (foreignId != null) {
            _queryParams.append("foreignId", foreignId);
        }

        if (status != null) {
            _queryParams.append("status", status);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.MercoaEnvironment.Production, "/entity"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.entity.find.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    public async create(request: Mercoa.EntityRequest): Promise<Mercoa.EntityResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.MercoaEnvironment.Production, "/entity"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.EntityRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.EntityResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
     * Get entity
     */
    public async get(entityId: Mercoa.EntityId): Promise<Mercoa.EntityResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.EntityResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
     * Update entity
     */
    public async update(
        entityId: Mercoa.EntityId,
        request: Mercoa.EntityUpdateRequest
    ): Promise<Mercoa.EntityResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.EntityUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.EntityResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
     * Delete entity
     */
    public async delete(entityId: Mercoa.EntityId): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
     * Get invoices for an entity
     */
    public async getInvoices(
        entityId: Mercoa.EntityId,
        request: Mercoa.GetInvoicesRequest = {}
    ): Promise<Mercoa.InvoiceResponse[]> {
        const { status } = request;
        const _queryParams = new URLSearchParams();
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
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/invoices`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.entity.getInvoices.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
     * End user accepts Terms of Service
     */
    public async acceptTermsOfService(entityId: Mercoa.EntityId): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/accept-tos`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.entity.acceptTermsOfService.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
     * Get JWT token for entity
     */
    public async getToken(entityId: Mercoa.EntityId): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/token`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.entity.getToken.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
     * Get Plaid token
     */
    public async plaidLinkToken(entityId: Mercoa.EntityId): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/plaidLinkToken`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
        });
        if (_response.ok) {
            return await serializers.entity.plaidLinkToken.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.MercoaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    private async _getAuthorizationHeader() {
        const bearer = await core.Supplier.get(this.options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
