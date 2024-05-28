/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Mercoa from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace EmailLog {
    interface Options {
        environment?: core.Supplier<environments.MercoaEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class EmailLog {
    constructor(protected readonly _options: EmailLog.Options) {}

    /**
     * Get all incoming invoice emails for an entity.
     *
     * @param {Mercoa.EntityId} entityId
     * @param {Mercoa.entity.emailLog.EntityEmailLogRequest} request
     * @param {EmailLog.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await mercoa.entity.emailLog.find("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c")
     */
    public async find(
        entityId: Mercoa.EntityId,
        request: Mercoa.entity.emailLog.EntityEmailLogRequest = {},
        requestOptions?: EmailLog.RequestOptions
    ): Promise<Mercoa.EmailLogResponse> {
        const { startDate, endDate, limit, startingAfter, search } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (startDate != null) {
            _queryParams["startDate"] = startDate.toISOString();
        }

        if (endDate != null) {
            _queryParams["endDate"] = endDate.toISOString();
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (startingAfter != null) {
            _queryParams["startingAfter"] = startingAfter;
        }

        if (search != null) {
            _queryParams["search"] = search;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${encodeURIComponent(await serializers.EntityId.jsonOrThrow(entityId))}/emailLogs`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.36",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.EmailLogResponse.parseOrThrow(_response.body, {
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
                        await serializers.BadRequest.parseOrThrow(_response.error.body, {
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
                case "Conflict":
                    throw new Mercoa.Conflict(
                        await serializers.Conflict.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "InternalServerError":
                    throw new Mercoa.InternalServerError(
                        await serializers.InternalServerError.parseOrThrow(_response.error.body, {
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
     * Get an email log by ID
     *
     * @param {Mercoa.EntityId} entityId
     * @param {Mercoa.EmailLogId} logId
     * @param {EmailLog.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await mercoa.entity.emailLog.get("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", "log_8545a84e-a45f-41bf-bdf1-33b42a55812c")
     */
    public async get(
        entityId: Mercoa.EntityId,
        logId: Mercoa.EmailLogId,
        requestOptions?: EmailLog.RequestOptions
    ): Promise<Mercoa.EmailLog> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${encodeURIComponent(
                    await serializers.EntityId.jsonOrThrow(entityId)
                )}/emailLog/${encodeURIComponent(await serializers.EmailLogId.jsonOrThrow(logId))}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.36",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.EmailLog.parseOrThrow(_response.body, {
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
                        await serializers.BadRequest.parseOrThrow(_response.error.body, {
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
                case "Conflict":
                    throw new Mercoa.Conflict(
                        await serializers.Conflict.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case "InternalServerError":
                    throw new Mercoa.InternalServerError(
                        await serializers.InternalServerError.parseOrThrow(_response.error.body, {
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