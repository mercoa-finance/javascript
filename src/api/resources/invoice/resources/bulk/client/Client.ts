/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Mercoa from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Bulk {
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

export class Bulk {
    constructor(protected readonly _options: Bulk.Options) {}

    /**
     * Create multiple invoices in bulk. This endpoint will process synchronously and return a list of invoices that were created or failed to create.
     *
     * @param {Mercoa.BulkInvoiceCreationRequest} request
     * @param {Bulk.RequestOptions} requestOptions - Request-specific configuration.
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
     *     await client.invoice.bulk.create({
     *         invoices: [{
     *                 status: "NEW",
     *                 amount: 100,
     *                 currency: "USD",
     *                 invoiceDate: "2021-01-01T00:00:00Z",
     *                 dueDate: "2021-01-31T00:00:00Z",
     *                 invoiceNumber: "INV-123",
     *                 noteToSelf: "For the month of January",
     *                 payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
     *                 paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
     *                 vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
     *                 paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
     *                 paymentDestinationOptions: {
     *                     type: "check",
     *                     delivery: "MAIL",
     *                     printDescription: true
     *                 },
     *                 lineItems: [{
     *                         amount: 100,
     *                         currency: "USD",
     *                         description: "Product A",
     *                         name: "Product A",
     *                         quantity: 1,
     *                         unitPrice: 100,
     *                         category: "EXPENSE",
     *                         serviceStartDate: "2021-01-01T00:00:00Z",
     *                         serviceEndDate: "2021-01-31T00:00:00Z",
     *                         metadata: {
     *                             "key1": "value1",
     *                             "key2": "value2"
     *                         },
     *                         glAccountId: "600394"
     *                     }],
     *                 creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
     *                 creatorUserId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506"
     *             }]
     *     })
     */
    public async create(
        request: Mercoa.BulkInvoiceCreationRequest,
        requestOptions?: Bulk.RequestOptions
    ): Promise<Mercoa.BulkInvoiceCreationResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MercoaEnvironment.Production,
                "invoices"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@mercoa/javascript",
                "X-Fern-SDK-Version": "0.6.6",
                "User-Agent": "@mercoa/javascript/0.6.6",
                "X-API-Version": requestOptions?.xApiVersion ?? this._options?.xApiVersion ?? "2024-08-01",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.BulkInvoiceCreationRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.BulkInvoiceCreationResponse.parseOrThrow(_response.body, {
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
