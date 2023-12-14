/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface CloudMailinEnvelope {
    to: string;
    recipients: string[];
    from: string;
    heloDomain: string;
    remoteIp: string;
    spf?: unknown;
    tls: boolean;
    tlsCipher?: string;
    md5?: string;
}