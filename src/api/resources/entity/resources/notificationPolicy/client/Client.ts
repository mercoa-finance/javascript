/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Mercoa from "../../../../..";
import * as serializers from "../../../../../../serialization";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors";

export declare namespace NotificationPolicy {
    interface Options {
        environment?: core.Supplier<environments.MercoaEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
    }
}

export class NotificationPolicy {
    constructor(protected readonly _options: NotificationPolicy.Options) {}

    /**
     * Retrieve all notification policies associated with this entity
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     */
    public async getAll(entityId: Mercoa.EntityId): Promise<Mercoa.NotificationPolicyResponse[]> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(entityId)}/notification-policies`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.2.8",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.entity.notificationPolicy.getAll.Response.parseOrThrow(_response.body, {
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
     * Retrieve notification policy associated with this entity
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     */
    public async get(
        entityId: Mercoa.EntityId,
        notificationType: Mercoa.NotificationType
    ): Promise<Mercoa.NotificationPolicyResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(
                    entityId
                )}/notification-policy/${await serializers.NotificationType.jsonOrThrow(notificationType)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.2.8",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.NotificationPolicyResponse.parseOrThrow(_response.body, {
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
     * Update notification policy associated with this entity
     * @throws {@link Mercoa.AuthHeaderMissingError}
     * @throws {@link Mercoa.AuthHeaderMalformedError}
     * @throws {@link Mercoa.Unauthorized}
     */
    public async update(
        entityId: Mercoa.EntityId,
        notificationType: Mercoa.NotificationType,
        request: Mercoa.NotificationPolicyRequest
    ): Promise<Mercoa.NotificationPolicyResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                `/entity/${await serializers.EntityId.jsonOrThrow(
                    entityId
                )}/notification-policy/${await serializers.NotificationType.jsonOrThrow(notificationType)}`
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "v0.2.8",
            },
            contentType: "application/json",
            body: await serializers.NotificationPolicyRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.NotificationPolicyResponse.parseOrThrow(_response.body, {
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
