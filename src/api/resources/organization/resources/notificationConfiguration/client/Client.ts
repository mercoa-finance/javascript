/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Mercoa from "../../../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace NotificationConfiguration {
    interface Options {
        environment?: core.Supplier<environments.MercoaEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class NotificationConfiguration {
    constructor(protected readonly _options: NotificationConfiguration.Options) {}

    /**
     * Retrieve all notification configurations
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     */
    public async getAll(
        requestOptions?: NotificationConfiguration.RequestOptions
    ): Promise<Mercoa.NotificationConfigurationResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                "/organization/notification-configurations"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.17",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.organization.notificationConfiguration.getAll.Response.parseOrThrow(
                _response.body,
                {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                    breadcrumbsPrefix: ["response"],
                }
            );
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
     * Retrieve notification configuration for this notification type
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     */
    public async get(
        notificationType: Mercoa.NotificationType,
        requestOptions?: NotificationConfiguration.RequestOptions
    ): Promise<Mercoa.NotificationConfigurationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/organization/notification-configuration/${await serializers.NotificationType.jsonOrThrow(
                    notificationType
                )}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.17",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.NotificationConfigurationResponse.parseOrThrow(_response.body, {
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
     * Update notification configuration for this notification type
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     */
    public async update(
        notificationType: Mercoa.NotificationType,
        request: Mercoa.NotificationConfigurationRequest,
        requestOptions?: NotificationConfiguration.RequestOptions
    ): Promise<Mercoa.NotificationConfigurationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/organization/notification-configuration/${await serializers.NotificationType.jsonOrThrow(
                    notificationType
                )}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.17",
            },
            contentType: "application/json",
            body: await serializers.NotificationConfigurationRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.NotificationConfigurationResponse.parseOrThrow(_response.body, {
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
     * Reset notification configuration for this notification type
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     * @throws {@link Mercoa.Forbidden}
     * @throws {@link Mercoa.NotFound}
     * @throws {@link Mercoa.Unimplemented}
     */
    public async reset(
        notificationType: Mercoa.NotificationType,
        requestOptions?: NotificationConfiguration.RequestOptions
    ): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/organization/notification-configuration/${await serializers.NotificationType.jsonOrThrow(
                    notificationType
                )}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.3.17",
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return;
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

    protected async _getAuthorizationHeader() {
        return `Bearer ${await core.Supplier.get(this._options.token)}`;
    }
}
