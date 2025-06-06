/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         sessionId: ["session_123", "session_456"]
 *     }
 *
 * @example
 *     {}
 */
export interface InvalidateTokensRequest {
    /** Optional list of session IDs to invalidate. If not provided, all sessions will be invalidated. */
    sessionId?: string[];
}
